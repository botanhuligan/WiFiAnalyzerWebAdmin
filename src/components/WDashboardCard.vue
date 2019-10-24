<template>
  <q-card
    flat
    class="bg-white column q-ma-md"
  >
    <div class="q-pa-md row justify-between">
      <div class="col"><q-badge :color="labelColor" class="" transparent>{{query.label.title }}</q-badge></div>
      <div class="col-1">
<!--        <q-btn icon="more_horiz" dense flat round class="full-width" @click="toggleMenuShowing"/>-->
        <q-menu v-model="showing">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup v-for="(status, key) in statuses" :key="key">
              <q-item-section>{{ status.title }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>
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
import { mapGetters } from 'vuex'
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
        return 'orange'
      }
      if (this.query.label.name === 'done') {
        return 'green'
      }
      return 'grey'
    },
    ...mapGetters('common', ['getStatuses']),
    statuses () {
      return this.getStatuses
    }
  },
  props: ['query'],
  data () {
    return {
      showing: false
    }
  },
  methods: {
    toggleMenuShowing (e) {
      this.showing = !this.showing
      e.stopPropagation()
    }
  }
}
</script>
