<template>
  <div>
    <div class="text-h6">Характеристики</div>
    <div class="text-body">SpeedTest</div>
    <div class="text-h6">{{ speed_test }}</div>
    <div class="text-body">Качество сети</div>
  </div>
</template>

<script>
export default {
  name: 'WConnectionInfo',
  props: ['info'],
  data () {
    return {
      speed_test: this.info.speed_test
    }
  }
}
</script>
