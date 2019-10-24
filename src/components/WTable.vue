<template>
  <div class="q-pa-md">
    <q-table
      :data="queries"
      :columns="columns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :filter="filter"
      rows-per-page-label=""
      flat
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr
          :props="props"
          @click.native="$router.push({ path: '/query', query: { queryId: props.row.id }, props: { info: props.row } })"
        >
          <q-td auto-width>
            <q-checkbox dense v-model="props.selected" />
          </q-td>
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="date" :props="props"><WDate :timestamp="props.row.timestamp"/></q-td>
          <q-td key="author" :props="props">{{ props.row.author.first_name }}</q-td>
          <q-td key="title" :props="props">{{ props.row.title }}</q-td>
          <q-td key="category" :props="props">
            <q-badge :color="getLabelColor(props.row.label.name)" v-show="!!props.row.label.name">
              {{ props.row.label.title }}
            </q-badge>
          </q-td>
          <q-td key="status" :props="props">{{ props.row.status.title }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import WDate from '../components/WDate'
import * as constants from '../constants'
export default {
  name: 'WTable',
  components: { WDate },
  computed: {
  },
  props: ['queries'],
  data () {
    return {
      filter: undefined,
      selected: [],
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Номер заявки',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'date', align: 'center', label: 'Дата создания', field: 'date', sortable: true },
        { name: 'author', label: 'Отправитель', field: 'author', sortable: true, style: 'width: 10px' },
        { name: 'title', label: 'Имя завки', field: 'title' },
        { name: 'category', label: 'Категория', field: 'category' },
        { name: 'status', label: 'Статус', field: 'status' }
      ]
    }
  },
  methods: {
    getLabelColor (label) {
      if (label.name === constants.TODO_STATUS) {
        return 'red'
      }
      if (label.name === constants.DOING_STATUS) {
        return 'orange'
      }
      if (label.name === constants.DONE_STATUS) {
        return 'green'
      }
      return 'grey'
    }
  }
}
</script>
