import React, { Component } from "react";

class ExerciseSelection extends Component {
  render() {
    return (
      <div>
        {this.props.uniqueExercises && (
          <select onChange={this.props.change}>
            <option>Pick an Exercise</option>
            {this.props.uniqueExercises.map((x, y) => (
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

export default ExerciseSelection;
