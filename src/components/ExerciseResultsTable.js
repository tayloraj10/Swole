import React, { Component } from "react";
// import { Button } from "@material-ui/core";

import AddNewExercise from "./AddNewExercise";

import "../styles/ExerciseResultsTable.css";

class ExerciseResultsTable extends Component {
  constructor(props) {
    super(props);
    this.adding = this.adding.bind(this);
    this.editing = this.editing.bind(this);
    this.state = { add: true, edit: false };
  }

  adding() {
    this.setState({ add: true });
  }

  editing() {
    alert("Editing");
  }

  render() {
    return (
      <div>
        {this.props.exercise && (
          <table className={"exerciseTable"}>
            <thead>
              <tr>
                <td />
                {this.props.exercise.map((x, y) => (
                  <th key={y + 1}>Set {y + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Weight</th>
                {this.props.exercise.map((x, y) => (
                  <td key={y + 1}>{x.Weight}</td>
                ))}
              </tr>
              <tr>
                <th>Reps</th>
                {this.props.exercise.map((x, y) => (
                  <td key={y + 1}>{x.Reps}</td>
                ))}
              </tr>
              <tr />
            </tbody>
          </table>
        )}
        {this.props.exercise && (
          <div>
            <button onClick={this.editing}>Edit</button>
            <button onClick={this.adding}>Add New Exercise</button>
          </div>
        )}

        {this.state.add && <AddNewExercise />}

        {/* <Button variant="contained" className={"button"}>
          Edit
        </Button>
        <Button variant="contained" className={"button"}>
          Add New Exercise
        </Button> */}
      </div>
    );
  }
}

export default ExerciseResultsTable;
