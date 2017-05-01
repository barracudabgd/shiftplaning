import React from "react"

export default class TableHeader extends React.Component {
  render() {
    var daysList = this.props.data.weekDays.map((day, index) => {
          return <td key={index}>
                    <ul class="list-group">
                      <li class="list-group-item">{day.dayName}</li>
                      <li class="list-group-item">{day.dayDate}</li>
                    </ul>
                  </td>
        })

    return (
      <thead>
        <tr>
          <td>
            <div class='text-center'>
              {this.props.data.dateRange}
            </div>
            <a href='javascript:;' class='btn btn-primary pull-left' onClick={this.props.changeWeek}>Prev</a>
            <a href='javascript:;' class='btn btn-primary pull-right' onClick={this.props.changeWeek}>Next</a>
          </td>

          {daysList}
        </tr>
      </thead>
    );
  }
}
