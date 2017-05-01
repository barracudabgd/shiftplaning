import database from '../database'

export function fetchShifts(payload) {
  return function(dispach) {
    database.ref('/').once('value', snap => {
      const response = snap.val()

      dispach({
        type: 'FETCH_SHIFTS',
        payload: response.shifts
      })
    })
  }
}