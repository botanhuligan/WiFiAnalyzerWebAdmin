<template>
  <q-page padding>
    <div class="row drag-container" v-drag-and-drop:options="options">
        <div class="column col-4 drag-column q-pa-md">
          <div class="q-pa-md">Заявки</div>
          <div class="col cards-column q-pa-md rounded-borders  drag-inner-list to_do" v-bind:class="{'offseted': shouldOffsetAdded}">
                <WDashboardCard
                  v-for="(query, key) in filteredTasks('to_do')"
                  :key="key" :query="query" class="drag-item" :id="query.id"
                />
          </div>
        </div>
        <div class="column col-4 drag-column q-pa-md">
          <div class="q-pa-md">В работе</div>
          <div class="col cards-column q-pa-md rounded-borders  drag-inner-list doing" v-bind:class="{'offseted': shouldOffsetAdded}">
                <WDashboardCard v-for="(query, key) in filteredTasks('doing')" :key="key" :query="query" class="drag-item" :id="query.id"/>
          </div>
        </div>
        <div class="column col-4 drag-column q-pa-md">
          <div class="q-pa-md">Выполнено</div>
          <div class="col cards-column q-pa-md rounded-borders  drag-inner-list done" v-bind:class="{'offseted': shouldOffsetAdded}">
                <WDashboardCard v-for="(query, key) in filteredTasks('done')" :key="key" :query="query" class="drag-item" :id="query.id"/>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import WDashboardCard from '../components/WDashboardCard'
export default {
  name: 'Dashboard',
  components: {
    WDashboardCard
  },
  computed: {
    ...mapState('queries', ['queries', 'todoList', 'inProgressList', 'doneList']),
    ...mapGetters('queries', ['getQueries']),
    filteredTasks () {
      return name => this.items.filter(query => query.status.name === name)
    },
    shouldOffsetAdded () {
      return this.items && this.items.length > 0
    },
    items: {
      get () {
        return this.getQueries
      },
      set () {
        return false
      }
    }
  },
  data () {
    return {
      statuses: [{
        name: 'to_do',
        title: 'Заявки',
        list: []
      }, {
        name: 'doing',
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
    ...mapActions('queries', ['updateQueryStatus']),
    ...mapMutations('common', ['toggleLoginDialogShown']),
    async onDrop (e) {
      const dropTargetStatus = await this.statuses.find(status => e.droptarget.className.indexOf(status.name) !== -1)
      const idToUpdate = e.items[0].id
      const updatableQuery = this.items.find(item => item.id === +idToUpdate)
      /* FIXME достаем description и label из объекта, чтобы отправлять на сервер полный объект */
      this.items = await this.updateQueryStatus({
        queryId: idToUpdate,
        description: updatableQuery.description,
        status: dropTargetStatus.name,
        label: updatableQuery.label && updatableQuery.label.name
      })
      location.reload()
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
    },
    items: {
      handler: (val, oldVal) => {
        console.log(oldVal, val)
      },
      deep: true
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
