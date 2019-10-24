<template>
  <q-card>
    <div class="q-pa-md text-h6">Описание</div>
    <div class="q-pa-md">{{ info.description }}</div>
  </q-card>
</template>

<script>
export default {
  name: 'WDescriptionCard',
  props: ['info'],
  data () {
    return {
    }
  }
}
</script>
