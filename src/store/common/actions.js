import { Notify } from 'quasar'
import axios from 'axios'
import * as constants from '../../constants'
/* Изменение статуса левого меню */
export function toggleLeftMenuOpened ({ dispatch, commit }) {
  commit('toggleLeftDrawerOpened')
}
/* Получение списка labels */
export async function getLabelsData ({ dispatch, commit }) {
  const labels = axios.get(constants.GET_LABELS_URL)
  commit('setLabels', labels.data)
}
/* Получение списка labels */
export async function getStatusesData ({ dispatch, commit }) {
  const statuses = axios.get(constants.GET_STATUSES_URL)
  commit('setStatuses', statuses.data)
}

/* сообщение об ошибке */
export function errorMessage (context, messageName) {
  const message = typeof messageName === 'string'
    ? context.rootGetters.i18n.t(messageName)
    : context.rootGetters.i18n.t(messageName.messageName, messageName.params)
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
