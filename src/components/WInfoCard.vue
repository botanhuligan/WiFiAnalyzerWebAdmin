<template>
  <q-card>
    <q-card-section class="column">
      <div class="row text-caption">Номер заявки</div>
      <div class="row text-h6">{{ id }}</div>
      <div class="row text-caption">Дата создания</div>
      <div class="row"><WDate :timestamp="info.timestamp"/></div>
      <div class="row text-caption">Категория</div>
      <div class="row"><q-badge color="orange">{{ category }}</q-badge></div>
      <q-separator color="grey"/>
      <div class="row text-caption">Отправитель</div>
      <q-btn type="a" dense flat class="row">{{ sender }}</q-btn>
      <div class="row text-caption">Контакты</div>
      <div class="row">{{ contacts }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
// import { mapGetters } from 'vuex'
import WDate from '../components/WDate'
export default {
  name: 'WInfoCard',
  props: ['info'],
  components: {
    WDate
  },
  computed: {
    // info () {
    //   return this.getterActiveQuery
    // },
    // ...mapGetters('query', ['getterActiveQuery'])
  },
  updated () {
    console.debug('info object on WInfoCard', this.info)
  },
  // props: ['info'],
  data () {
    return {
      id: this.info.id,
      date: this.info.date,
      category: this.info.category,
      sender: this.info.author.first_name,
      department: this.info.department,
      contacts: this.info.contacts
    }
  }
}
</script>
