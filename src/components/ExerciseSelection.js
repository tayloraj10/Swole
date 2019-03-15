import React, { Component } from "react";

class ExerciseSelection extends Component {
  render() {
    return (
      <div>
        {this.props.uniqueExercises && (
          <select onChange={this.props.change}>
            <option>Pick an Excersize :)</option>
            {this.props.uniqueExercises.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
}

export default ExerciseSelection;
