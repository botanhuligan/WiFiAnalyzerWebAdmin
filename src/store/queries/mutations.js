/* Получение данных */
export function setQueries (state, queries) {
  state.queries = queries
}
/* Получение данных */
export function updateQuery (state, { queryId, status }) {
  state.queries.forEach((query, index) => {
    if (query.id === +queryId) {
      console.log('found')
      state.queries[index].status = { status, title: status }
    }
  })
}
/* Установка активного запроса */
export function setActiveQuery (state, data) {
  state.activeQuery = data
}
/* Установка активного запроса */
export function setTodoList (state, data) {
  state.todoList = data
}
/* Установка активного запроса */
export function setInProgressList (state, data) {
  state.inProgressList = data
}
/* Установка активного запроса */
export function setDoneList (state, data) {
  state.doneList = data
}
