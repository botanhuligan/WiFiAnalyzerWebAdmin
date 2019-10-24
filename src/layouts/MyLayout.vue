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
  async created () {
    await this.getLabelsData()
    const queries = await this.getQueries()
    await this.updateLists(queries)
  },
  mounted () {
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('common', ['toggleLeftMenuOpened', 'getLabelsData']),
    ...mapActions('queries', ['getQueries', 'updateLists'])
  }
}
</script>
<style>
  .my-layout {
    background-color: #EAEEF3;
  }
</style>
