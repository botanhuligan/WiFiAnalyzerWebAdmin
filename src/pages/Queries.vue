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
    this.queries = await this.getQueries()
  },
  data () {
    return {
      queries: []
    }
  },
  components: { WTable },
  methods: {
    ...mapActions('queries', ['getQueries'])
  }
}
</script>
