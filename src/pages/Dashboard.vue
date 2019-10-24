<template>
  <q-page padding>
    <div class="row drag-container" v-drag-and-drop:options="options">
        <div class="column col-4 drag-column q-pa-md">
          <div class="q-pa-md">Заявки</div>
          <div class="col cards-column q-pa-md rounded-borders  drag-inner-list" v-bind:class="{'offseted': shouldOffsetAdded}">
                <WDashboardCard v-for="(query, key) in filteredTasks('to_do')" :key="key" :query="query" class="drag-item" :id="query.id"/>
          </div>
        </div>
        <div class="column col-4 drag-column q-pa-md">
          <div class="q-pa-md">В работе</div>
          <div class="col cards-column q-pa-md rounded-borders  drag-inner-list" v-bind:class="{'offseted': shouldOffsetAdded}">
                <WDashboardCard v-for="(query, key) in filteredTasks('doing')" :key="key" :query="query" class="drag-item" :id="query.id"/>
          </div>
        </div>
        <div class="column col-4 drag-column q-pa-md">
          <div class="q-pa-md">Выполнено</div>
          <div class="col cards-column q-pa-md rounded-borders  drag-inner-list" v-bind:class="{'offseted': shouldOffsetAdded}">
                <WDashboardCard v-for="(query, key) in filteredTasks('done')" :key="key" :query="query" class="drag-item" :id="query.id"/>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import WDashboardCard from '../components/WDashboardCard'
export default {
  name: 'Dashboard',
  components: {
    WDashboardCard
  },
  computed: {
    ...mapState('queries', ['data', 'todoList', 'inProgressList', 'doneList']),
    ...mapGetters('queries', ['getQueries']),
    filteredTasks () {
      return name => this.items.filter(query => query.status.name === name)
    },
    shouldOffsetAdded () {
      return this.items.length > 0
    },
    todoListModel: {
      get () {
        return this.todoList
      },
      set (value) {
        this.updateTodoList(value)
      }
    },
    inProgressListModel: {
      get () {
        return this.inProgressList
      },
      set (value) {
        this.updateInProgressList(value)
      }
    },
    doneListModel: {
      get () {
        return this.doneList
      },
      set (value) {
        this.updateDoneList(value)
      }
    },
    items () {
      return this.getQueries
    }
  },
  async mounted () {
    console.debug('data on dashboard page', this.items)
  },
  data () {
    return {
      statuses: [{
        name: 'to_do',
        title: 'Заявки',
        list: []
      }, {
        name: 'active',
        title: 'В работе',
        list: []
      }, {
        name: 'done',
        title: 'Выполнено',
        list: []
      }],
      options: {
        dropzoneSelector: '.drag-inner-list',
        draggableSelector: '.drag-item',
        onDrop: (e) => this.onDrop(e)
      },
      list: [],
      myArray: 'myArray',
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    ...mapActions('queries', ['updateTodoList', 'updateInProgressList', 'updateDoneList', 'updateQueryStatus']),
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    onDrop (e) {
      console.log({
        event: e,
        el: this.$el
      })
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
<style>
  .cards-column {
    background-color: #DDE4EC;
  }
  .offseted {
    padding-bottom: 100px;
  }
</style>
