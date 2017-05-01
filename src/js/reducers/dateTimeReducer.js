export default function reducer(state={
  dateRange: null,
  weekDays: [],
  weekTracker: 0
}, action) {
  switch (action.type) {
    case 'GET_DATE_TIME': {
      return {
        ...state,
        dateRange: action.payload.dateRange,
        weekDays: action.payload.weekDays,
        weekTracker: action.payload.weekTracker
      }
    }
    case 'SET_WEEK': {
      return {
        ...state,
        dateRange: action.payload.dateRange,
        weekDays: action.payload.weekDays,
        weekTracker: action.payload.weekTracker
      }
    }
  }

  return state;
}