<template>
  <q-card
    flat
    class="bg-white column"
    @click.native="$router.push({ path: '/query', query: { queryId: query.id }, props: { info: query } })"
  >
    <div class="q-pa-md">
      <q-badge :color="labelColor" transparent>{{query.label.title }}</q-badge></div>
    <q-card-section class="text-body1">
      {{ query.title }}
    </q-card-section>
    <q-card-section class="text-body2">
      {{ query.description }}
    </q-card-section>
    <q-card-section class="text-body2">
      <WDate :timestamp="query.timestamp"/>
    </q-card-section>
  </q-card>
</template>

<script>
import WDate from '../components/WDate'
export default {
  name: 'WDashboardCard',
  components: {
    WDate
  },
  computed: {
    labelColor () {
      if (this.query.label.name === 'to_do') {
        return 'red'
      }
      if (this.query.label.name === 'in_progress') {
        return 'ora nge'
      }
      if (this.query.label.name === 'done') {
        return 'green'
      }
      return 'grey'
    }
  },
  props: ['query'],
  data () {
    return {}
  }
}
</script>
