import React from "react"

import { Shifts } from '../'

export default class WeekDays extends React.Component {

  render() {
    var employees = this.generateEmployees()

    return (
      <tbody>
        {employees}
      </tbody>
    );
  }

  generateEmployees () {
    let filteredEmployees = this.props.data.employees.filter((employee) => {
          let firstName = employee.firstName.toLowerCase(),
              lastName = employee.lastName.toLowerCase(),
              fullName = firstName + ' ' + lastName,
              employeesFilter = this.props.data.employeesFilter.toLowerCase()

              return fullName.indexOf(employeesFilter) !== -1
        })

    return filteredEmployees.map((employee, index) => {
      let fullName = employee.firstName + ' ' + employee.lastName

      return <tr key={index}>
              <td>
                <img class="avatar" src={employee.avatar} />
                {fullName}
              </td>
              {this.props.data.weekDays.map((day, index) => {
                return <td key={index}>
                        <Shifts data={this.props.data} date={day} employee={employee}/>
                      </td>
              })}
            </tr>
    })
  }
}


