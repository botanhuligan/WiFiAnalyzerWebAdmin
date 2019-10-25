import { Notify } from 'quasar'
import axios from 'axios'
const { BACKEND_URL } = process.env
const axiosInstance = axios.create({ baseURL: BACKEND_URL })
import * as constants from '../../constants'
/* Изменение статуса левого меню */
export function toggleLeftMenuOpened ({ dispatch, commit }) {
  commit('toggleLeftDrawerOpened')
}
/* Получение списка возможных категорий */
export async function getLabelsData ({ dispatch, commit }) {
  const labels = axiosInstance.get(constants.GET_LABELS_URL)
  commit('setLabels', labels.data)
}
/* Получение списка возможных статусов */
export async function getStatusesData ({ dispatch, commit }) {
  const statuses = axiosInstance.get(constants.GET_STATUSES_URL)
  commit('setStatuses', statuses.data)
}
/* Авторизация на странице входа */
export async function authorize ({ dispatch, commit }, payload) {
  const { username, password } = payload
  const formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)
  const result = axiosInstance.post(constants.AUTH_URL, formData, {})
  if (result.data.result === 'success') {
    document.cookie = `csrftoken=${result.data.token}`
  }
}

/* сообщение об ошибке */
export function errorMessage (context, messageName) {
  const message = typeof messageName === 'string'
    ? messageName
    : messageName.messageName
  console.debug('errorMessage messageName = ', messageName)
  console.debug('errorMessage message = ', message)
  Notify.create({
    ...context.state.defaultNotification,
    ...{
      color: 'negative',
      message
    }
  })
}
