import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class ExerciseSelection extends Component {
  render() {
    return (
      <div>
        {this.props.selectedExercises && (
          <Select onChange={this.props.change}>
            {this.props.selectedExercises.map((item, i) => {
              return (
                <MenuItem key={i} value={item.Exercise}>
                  {item.Exercise}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </div>
    );
  }
}

export default ExerciseSelection;
