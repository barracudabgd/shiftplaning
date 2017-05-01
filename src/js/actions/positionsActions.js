import database from '../database'

export function fetchPositions(payload) {
  return function(dispach) {
    database.ref('/').once('value', snap => {
      const response = snap.val()

      dispach({
        type: 'FETCH_POSITIONS',
        payload: response.positions
      })
    })
  }
}