<template>
  <q-page padding>
    <WTable :queries="droppedQueries"/>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import * as constants from '../constants'
import WTable from '../components/WTable'
export default {
  name: 'Archive',
  components: {
    WTable
  },
  computed: {
    ...mapGetters('queries', ['getQueries']),
    queries () {
      return this.getQueries
    },
    droppedQueries () {
      return this.queries.filter(query => query.status.name === constants.DROP_STATUS || query.status.name === constants.DONE_STATUS)
    }
  }
}
</script>
