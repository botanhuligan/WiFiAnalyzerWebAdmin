<template>
  <q-page padding>
    <div>
      <WTable :queries="queries"/>
    </div>
  </q-page>
</template>

<script>
import WTable from '../components/WTable'
import { mapActions } from 'vuex'
export default {
  name: 'Queries',
  async mounted () {
    this.queries = await this.getQueriesData()
  },
  data () {
    return {
      queries: []
    }
  },
  components: { WTable },
  methods: {
    ...mapActions('queries', ['getQueriesData'])
  }
}
</script>
