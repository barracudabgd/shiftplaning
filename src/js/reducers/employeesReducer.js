export default function reducer(state={
  employees: [],
  filterEmployees: ''
}, action) {
  switch (action.type) {
    case 'FETCH_EMPLOYEES': {
      return {
        ...state,
        employees: action.payload
      }
    }
    case 'FILTER_EMPLOYEES': {
      return {
        ...state,
        filterEmployees: action.payload
      }
    }
  }

  return state;
}