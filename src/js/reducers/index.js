import { combineReducers } from 'redux'

import shifts from './shiftsReducer'
import employees from './employeesReducer'
import positions from './positionsReducer'
import dateTime from './dateTimeReducer'

export default combineReducers({
  shifts,
  employees,
  positions,
  dateTime
})