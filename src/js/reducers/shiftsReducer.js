export default function reducer(state={
  shifts: []
}, action) {
  switch (action.type) {
    case 'FETCH_SHIFTS': {
      return {
        ...state,
        shifts: action.payload
      }
    }
  }

  return state;
}