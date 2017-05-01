import database from '../database'

export function fetchEmployees(payload) {
  return function(dispach) {
    database.ref('/').once('value', snap => {
      const response = snap.val()

      dispach({
        type: 'FETCH_EMPLOYEES',
        payload: response.employees
      })
    })
  }
}

export function filterEmployees(payload) {
  return {
    type: 'FILTER_EMPLOYEES',
    payload: payload
  }
}
