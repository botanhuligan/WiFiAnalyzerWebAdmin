<template>
  <div>
    <div class="row items-between relative-position">
      <div class="col q-ma-md">
        <q-btn dense flat class="text-lowercase text-capitalize" v-go-back="'/queries'">Назад</q-btn>
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
        <div class="q-pa-md col-6"><WConnectionInfo :info="info"/></div>
        <div class="q-pa-md col">Тепловая карта</div>
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
      info: {
        id: '1',
        description: 'Pariatur magna proident occaecat duis aute amet magna. Reprehenderit velit tempor veniam Lorem. Consequat nulla irure labore tempor cupidatat. Eu amet labore magna deserunt nulla non tempor culpa nulla velit elit id. Consectetur esse nostrud amet exercitation minim nisi. Amet labore voluptate nisi excepteur enim et consequat sunt consequat nulla pariatur dolor fugiat consectetur. Laborum id mollit esse veniam dolor culpa anim incididunt. Non nisi reprehenderit dolore ullamco non ea occaecat irure sit sint cillum irure mollit. Velit nostrud amet consequat minim cupidatat consectetur excepteur eiusmod labore labore proident minim. Qui velit velit amet nisi. Commodo duis exercitation velit consectetur tempor ullamco.',
        sender: 'La la la',
        category: 'warning'
      }
    }
  },
  methods: {
    ...mapActions('queries', ['getQuery'])
  }
}
</script>
