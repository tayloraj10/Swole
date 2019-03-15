import React, { Component } from "react";

class PersonSelection extends Component {
  render() {
    return (
      <div>
        {this.props.uniquePersons && (
          <select onChange={this.props.change}>
            <option>-</option>
            {this.props.uniquePersons.map((x, y) => (
              <option key={y} value={x}>
                {x}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
}

export default PersonSelection;
