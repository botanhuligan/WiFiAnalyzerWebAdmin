import axios from 'axios'
import * as constants from '../../constants'
/* Получение заявок с сервера */
export async function getQueriesData ({ dispatch, commit }) {
  try {
    const resp = await axios.get(constants.GET_QUERIES_URL)
    const { data } = resp
    console.debug('data queries', data)
    commit('setQueries', data)
    return data
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}
/* Обновление query в сторе */
export async function updateQueryStatus ({ dispatch, commit }, payload) {
  const { queryId, status } = payload
  try {
    dispatch('sendUpdateQueryStatusRequest', payload)
    commit('updateQuery', { queryId, status })
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}
/* Отправка запроса на обновление query */
export async function sendUpdateQueryStatusRequest ({ dispatch, commit }, payload) {
  const { queryId, description, status, label } = payload
  try {
    await axios.put(
      `${constants.UPDATE_QUERIES_URL}/${queryId}/`,
      { description, status, label },
      { withCredentials: true }
    )
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}
/* Получение одной заявки по id */
export async function getQuery ({ dispatch, commit }, queryId) {
  try {
    const { data } = await axios.get(`${constants.GET_LABEL_URL}/${queryId}`)
    commit('setActiveQuery', data)
    return data
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}
