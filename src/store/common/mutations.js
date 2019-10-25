export function toggleLeftDrawerOpened (state, payload) {
  state.leftDrawerOpen = !state.leftDrawerOpen
}
export function setLabels (state, labels) {
  state.labels = labels
}
export function setStatuses (state, statuses) {
  state.statuses = statuses
}
export function toggleLoginDialogShown (state) {
  state.loginDialogShown = !state.loginDialogShown
}
