export default function reducer(state={
  positions: []
}, action) {
  switch (action.type) {
    case 'FETCH_POSITIONS': {
      return {
        ...state,
        positions: action.payload
      }
    }
  }

  return state;
}