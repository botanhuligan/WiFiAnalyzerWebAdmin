<template>
  <div>
    <q-table
      :data="points"
      :columns="columns"
      row-key="name"
      flat
    >
      <template v-slot:body="props">
        <q-tr
          :props="props"
        >
          <q-td key="id" :props="props">
            {{ queryId }}
          </q-td>
          <q-td key="mac" :props="props">{{ props.row.BSSID }}</q-td>
          <q-td key="channels" :props="props">{{ props.row.capabilities.length || '-' }}</q-td>
          <q-td key="vendor" :props="props">{{ props.row.vendor || '-' }}</q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  name: 'WConnectionInfo',
  props: ['points', 'queryId'],
  data () {
    return {
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
        { name: 'mac', label: 'MAC адрес', field: 'mac' },
        { name: 'channels', label: 'Channel', field: 'channels' },
        { name: 'vendor', label: 'Вендор', field: 'vendor' }
      ]
    }
  }
}
</script>
