<template>
  <div>
    <div class="text-h6">Характеристики</div>
    <div class="text-subtitle">SpeedTest</div>
    <div class="text-h6">{{ points && points.speed_test }}</div>
    <div class="text-subtitle">Качество сети</div>
    <div class="text-h6">{{ points && points.speed_test }}</div>
    <q-table
      :data="points"
      :columns="columns"
      row-key="name"
      flat
    >
      <template v-slot:body="props">
        <q-tr
          :props="points"
        >
          <q-td key="id" :props="points">
            {{ props.row.id }}
          </q-td>
          <q-td key="mac" :props="points">{{ props.row.BSSID }}</q-td>
          <q-td key="channels" :props="points">{{ props.row.capabilities.length || '-' }}</q-td>
          <q-td key="cendor" :props="points">{{ props.row.vendor || '-' }}</q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  name: 'WConnectionInfo',
  props: ['points'],
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
