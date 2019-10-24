<template>
  <q-page padding>
    <div class="row drag-container">
      <div
        :status="status.title"
        class="col-4 drag-column q-pa-md" :key="key" v-for="(status, key) in statuses">
        <div class="column">
          <div class="q-pa-md drag-inner-list">{{ status.title }}</div>
          <div class="col cards-column q-pa-md rounded-borders" v-bind:class="{'offseted': shouldOffsetAdded}">
            <draggable
              class="list-group"
              v-model="todoListModel"
              v-bind="dragOptions"
              :move="onMove" @start="isDragging=true" @end="isDragging=false"
              tag="div">
              <transition-group type="transition" :name="'flip-list'">
                <WDashboardCard v-for="(query, key) in filteredTasks(status.name)" :key="key" :query="query" class="drag-item"/>
              </transition-group>
            </draggable>
          </div>
          <div class="col cards-column q-pa-md rounded-borders" v-bind:class="{'offseted': shouldOffsetAdded}">
            <draggable
              class="list-group"
              v-model="inProgressListModel"
              v-bind="dragOptions"
              :move="onMove" @start="isDragging=true" @end="isDragging=false"
              tag="div">
              <transition-group type="transition" :name="'flip-list'">
                <WDashboardCard v-for="(query, key) in filteredTasks(status.name)" :key="key" :query="query" class="drag-item"/>
              </transition-group>
            </draggable>
          </div>
          <div class="col cards-column q-pa-md rounded-borders" v-bind:class="{'offseted': shouldOffsetAdded}">
            <draggable
              class="list-group"
              v-model="doneListModel"
              v-bind="dragOptions"
              :move="onMove" @start="isDragging=true" @end="isDragging=false"
              tag="div">
              <transition-group type="transition" :name="'flip-list'">
                <WDashboardCard v-for="(query, key) in filteredTasks(status.name)" :key="key" :query="query" class="drag-item"/>
              </transition-group>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import draggable from 'vuedraggable'
import { mapActions, mapState } from 'vuex'
import WDashboardCard from '../components/WDashboardCard'
export default {
  name: 'Dashboard',
  components: {
    WDashboardCard,
    draggable
  },
  computed: {
    ...mapState('queries', ['data', 'todoList', 'inProgressList', 'doneList']),
    filteredTasks () {
      return groupId => this.items.filter(query => query.status === groupId)
    },
    shouldOffsetAdded () {
      return this.items.length > 0
    },
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
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
    }
  },
  async mounted () {
    this.items = await this.getQueries()
    console.debug('data on dashboard page', this.items)
  },
  data () {
    return {
      items: [],
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
        onDrop (e) {
          const targetGroupId = parseInt(e.droptarget.dataset.id)
          const itemIds = e.items.map(item => parseInt(item.dataset.id))
          this.updateItemsWithNewGroupId(itemIds, targetGroupId)
        }
      },
      list: [],
      myArray: 'myArray',
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    ...mapActions('queries', ['getQueries', 'updateTodoList', 'updateInProgressList', 'updateDoneList']),
    updateItemsWithNewGroupId (itemsIds, groupId) {
      this.items
        .filter(item => itemsIds.indexOf(item.id) >= 0)
        .forEach(item => {
          item.groupId = groupId
        })
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
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
