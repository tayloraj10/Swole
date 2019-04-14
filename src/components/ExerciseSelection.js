import React, { Component } from "react";

class ExerciseSelection extends Component {
  render() {
    return (
      <div>
        {this.props.selectedExercises && (
          <select onChange={this.props.change}>
            {this.props.selectedExercises.map((item, i) => {
              return (
                <option key={i} value={item.Exercise}>
                  {item.Exercise}
                </option>
              );
            })}
          </select>
        )}
      </div>
    );
  }
}

export default ExerciseSelection;
