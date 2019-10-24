<template>
  <q-card>
    <q-card-section class="column">
      <div class="row text-caption">Номер заявки</div>
      <div class="row text-h6">{{ info.id }}</div>
      <div class="row text-caption">Дата создания</div>
      <div class="row"><WDate :timestamp="info.timestamp"/></div>
      <div class="row text-caption">Категория</div>
      <div class="row"><q-badge :color="labelColor">{{ info.label && info.label.title }}</q-badge></div>
      <q-separator color="grey"/>
      <div class="row text-caption">Отправитель</div>
      <div dense flat class="text-lowercase text-capitalize text-blue text-underscore">{{ info.author && info.author.first_name || 'Нет данных' }}</div>
      <div class="row text-caption">Контакты</div>
      <div class="row">{{ info.contacts || 'Нет данных' }}</div>
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
    labelColor () {
      if (!this.info.label) {
        return 'grey'
      }
      if (this.info.label.name === 'to_do') {
        return 'red'
      }
      if (this.info.label.name === 'in_progress') {
        return 'orange'
      }
      if (this.info.label.name === 'done') {
        return 'green'
      }
      return 'grey'
    }
  },
  updated () {
    console.debug('info object on WInfoCard', this.info)
  },
  // props: ['info'],
  data () {
    return {
      // id: this.info.id,
      // date: this.info.date,
      // category: this.info.category,
      // sender: this.info.author.first_name,
      // department: this.info.department,
      // contacts: this.info.contacts
    }
  }
}
</script>
