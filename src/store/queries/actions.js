import axios from 'axios'
import * as constants from '../../constants'

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

export async function updateQueryStatus ({ dispatch, commit }, payload) {
  const { queryId, status } = payload
  try {
    // const resp = await axios.get(constants.GET_QUERIES_URL)
    commit('updateQuery', { queryId, status })
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}

export async function getQuery ({ dispatch, commit }, queryId) {
  try {
    const { data } = await axios.get(`${constants.GET_LABEL_URL}/${queryId}`)
    commit('setActiveQuery', data)
    return data
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}

export async function updateTodoList ({ dispatch, commit }, list) {
  try {
    // const resp = await axios.get(GET_QUERIES_URL, queryId)
    commit('setTodoList', list)
  } catch (err) {
    await dispatch('common/errorMessage', err, { root: true })
  }
}

export async function updateInProgressList ({ dispatch, commit }, list) {
  try {
    // const resp = await axios.get(GET_QUERIES_URL, queryId)
    commit('setInProgressList', list)
  } catch (err) {
    await dispatch('common/errorMessage', err)
  }
}

export async function updateDoneList ({ dispatch, commit }, list) {
  try {
    // const resp = await axios.get(GET_QUERIES_URL, queryId)
    commit('setDoneList', list)
  } catch (err) {
    await dispatch('common/errorMessage', err)
  }
}

export async function updateLists ({ dispatch, commit }, queries) {
  try {
    const todoList = queries.filter(query => query.status === 'to_do')
    const inProgressList = queries.filter(query => query.status === 'in_progress')
    const doneList = queries.filter(query => query.status === 'done')
    commit('setDoneList', todoList)
    commit('setDoneList', inProgressList)
    commit('setDoneList', doneList)
  } catch (err) {
    await dispatch('common/errorMessage', err)
  }
}
