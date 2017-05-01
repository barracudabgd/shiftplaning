import React from "react"

import { TableHeader, TableBody, FilterInput } from '../'

export default class TableList extends React.Component {

  render() {
    return (
      <div class="table-responsive">
        <table class="table table-striped">
          <TableHeader data={this.props.data} changeWeek={this.props.changeWeek}/>
          <TableBody data={this.props.data} />
        </table>
        <FilterInput data={this.props.data} getFilter={this.props.getFilter}/>
      </div>
    );
  }
}