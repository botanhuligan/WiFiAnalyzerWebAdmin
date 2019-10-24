<template>
  <div class="column">
    <div class="q-pa-md drag-inner-list">{{ status }}</div>
    <div class="col cards-column q-pa-md rounded-borders" v-bind:class="{'offseted': shouldOffsetAdded}">
      <draggable
        v-model="list"
        v-bind="dragOptions"
        :move="onMove" @start="isDragging=true" @end="isDragging=false"
        tag="div"
        group="people">
        <transition-group type="transition" :name="'flip-list'">
<!--         <div v-for="element in myArray" :key="element.id">{{element.name}}</div>-->
          <WDashboardCard v-for="(query, key) in tasks" :key="key" :query="query" class="drag-item"/>
        </transition-group>
      </draggable>
<!--      <WDashboardCard v-for="(query, key) in tasks" :key="key" :query="query"/>-->
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import WDashboardCard from './WDashboardCard'
export default {
  name: 'WDashboardColumn',
  components: {
    WDashboardCard,
    draggable
  },
  computed: {
    shouldOffsetAdded () {
      return this.tasks.length > 0
    },
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  props: ['tasks', 'status'],
  mounted () {
    console.debug('column', this.shouldOffsetAdded)
  },
  data () {
    return {
      list: [],
      myArray: 'myArray',
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
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
.offseted {
  padding-bottom: 100px;
}
</style>
