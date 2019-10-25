<template>
  <q-page padding>
    <q-form
      class="q-gutter-md"
      method="POST"
      action="/api/login/"
      @submit="onSubmit"
    >
      <q-input name="username" label="Логин" lazy-rules v-model="username"/>
      <q-input name="password" label="Пароль" lazy-rules v-model="password"/>
      <q-btn label="Submit" type="submit" color="primary"/>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Auth',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('common', ['authorize']),
    onSubmit () {
      this.authorize({ username: this.username, password: this.password })
    }
  }
}
</script>
