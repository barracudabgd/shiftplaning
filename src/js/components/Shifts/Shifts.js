import React from "react"

export default class Shifts extends React.Component {
  render() {
    var shifts = this.generateShifts()

    return (
      <div>
        {shifts}
      </div>
    );
  }

  generateShifts () {
    return this.props.data.shifts.map((shift, index) => {
      let isDate = this.props.date.dayDate == shift.dateTime.date,
          firstName = this.props.employee.firstName,
          lastName = this.props.employee.lastName,
          isFirstName = false,
          isLastName = false,
          positions = this.props.data.positions,
          color = positions[shift.position].color,
          style = {
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: color
          }

      for(let i = 0; i < shift.employees.length; i++) {
        isFirstName = firstName == shift.employees[i].firstName,
        isLastName = lastName == shift.employees[i].lastName
      }

      if (isDate && isFirstName && isLastName) {
        return <div key={index} style={style}>
                 <div>{shift.name}</div>
                <div>{shift.dateTime.time}</div>
              </div>
      }
    })
  }
}


