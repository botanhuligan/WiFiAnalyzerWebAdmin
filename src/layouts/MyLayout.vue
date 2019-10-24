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
    this.loading = true
    await this.getLabelsData()
    await this.getStatusesData()
    await this.getQueriesData()
    this.loading = false
    // const queries = await this.getQueriesData()
    // await this.updateLists(queries)
  },
  data () {
    return {
      search: '',
      loading: false
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
