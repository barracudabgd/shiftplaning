import React from "react"

import { Employees } from '../'

export default class TableBody extends React.Component {

  render() {
    return (
      <Employees data={this.props.data}/>
    );
  }


}


