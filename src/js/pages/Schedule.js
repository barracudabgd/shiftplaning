import React from "react"
import { connect } from 'react-redux'

//Components
import TableList from '../components/TableList/TableList'
// Actions
import { fetchEmployees, filterEmployees } from '../actions/employeesActions'
import { fetchPositions } from '../actions/positionsActions'
import { fetchShifts } from '../actions/shiftsActions'
import { getDateTime, setWeek } from '../actions/dateTimeActions'

@connect((store) => {
  return {
    data: {
      dateRange: store.dateTime.dateRange,
      weekDays: store.dateTime.weekDays,
      weekTracker: store.dateTime.weekTracker,
      employees: store.employees.employees,
      positions: store.positions.positions,
      shifts: store.shifts.shifts,
      employeesFilter: store.employees.filterEmployees
    }
  }
})

export default class Schedule extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchEmployees())
    this.props.dispatch(fetchPositions())
    this.props.dispatch(fetchShifts())
    this.props.dispatch(getDateTime())
  }

  render() {
    return (
      <TableList
        data={this.props.data}
        changeWeek={this.changeWeek.bind(this)}
        getFilter={this.getFilter.bind(this)} />
    );
  }

  changeWeek(e){
    this.props.dispatch(setWeek(e.target.text, this.props.data.weekTracker))
  }

  getFilter(e){
    this.props.dispatch(filterEmployees(e.target.value))
  }
}
