<template>
  <div>
    <div class="row items-between relative-position">
      <div class="col q-ma-md">
        <q-btn dense flat class="text-lowercase text-capitalize" @click="handleHistoryBack">Назад</q-btn>
      </div>
      <div class="col absolute-right">
<!--        <q-btn color="blue" size="sm" class="col" dense>Начать</q-btn>-->
<!--        <q-btn width="36px" size="sm" class="col" dense>Ответить</q-btn>-->
      </div>
    </div>
    <div class="row">
      <div class="col-3 q-ma-md">
        <WInfoCard :info="info"/>
      </div>
      <div class="col q-ma-md">
        <WDescriptionCard :info="info"/>
      </div>
    </div>
    <div class="row col-12 column q-pa-md">
      <q-card class="row">
        <div class="q-pa-md col-6">
          <WConnectionInfo :points="info.wifi_points && info.wifi_points.points"/>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WInfoCard from './WInfoCard'
import WDescriptionCard from './WDescriptionCard'
import WConnectionInfo from './WConnectionInfo'
export default {
  name: 'QueryComponent',
  components: {
    WInfoCard,
    WDescriptionCard,
    WConnectionInfo
  },
  computed: {
    queryId () {
      return this.$route.query.queryId
    },
    ...mapState('queries', ['activeQuery'])
  },
  async mounted () {
    const query = await this.getQuery(this.$route.query.queryId)
    this.info = query
  },
  // props: ['info'],
  data () {
    return {
      info: {}
    }
  },
  methods: {
    ...mapActions('queries', ['getQuery']),
    handleHistoryBack () {
      if (window.history.length > 1) {
        window.history.back()
      }
    }
  }
}
</script>
