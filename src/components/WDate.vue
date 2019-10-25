<template>
  <div class="text-body2">
    {{ formattedDate }}
  </div>
</template>

<script>
export default {
  name: 'WDate',
  props: ['timestamp'],
  computed: {
    formattedDate () {
      if (this.timestamp instanceof Number !== true) {
        return ''
      }
      const date = new Date()
      date.setTime(parseInt(this.timestamp, 10))
      const day = date.getDay()
      const month = date.getMonth()
      const year = date.getFullYear()
      const hours = date.getHours()
      const minutes = date.getMinutes()

      return `${day}/${month}/${year} ${hours}:${minutes}`
    }
  },
  data () {
    return {}
  }
}
</script>
