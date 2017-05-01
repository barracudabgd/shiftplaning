import React from "react"

export default class FilterInput extends React.Component {

  render() {
    return (
      <div class='form-group'>
        <label class='control-label'>Filter</label>
        <input type='text' class='form-control' onChange={this.props.getFilter}/>
      </div>
    );
  }
}