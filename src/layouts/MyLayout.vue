<template>
  <q-layout view="lHh Lpr lFf" class="my-layout">
    <LeftDrawer :leftDrawerOpen="true" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import LeftDrawer from '../components/LeftDrawer'
export default {
  name: 'MyLayout',
  components: {
    LeftDrawer
  },
  computed: {
    // ...mapState('common', ['leftDrawerOpen'])
  },
  async mounted () {
    await this.getLabelsData()
    await this.getStatusesData()
    const queries = await this.getQueriesData()
    await this.updateLists(queries)
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('common', ['toggleLeftMenuOpened', 'getLabelsData', 'getStatusesData']),
    ...mapActions('queries', ['getQueriesData', 'updateLists'])
  }
}
</script>
<style>
  .my-layout {
    background-color: #EAEEF3;
  }
</style>
