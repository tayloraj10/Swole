import React, { Component } from "react";
import AddNewExercise from "./AddNewExercise";

import "../styles/ExerciseResultsTable.css";

class ExerciseResultsTable extends Component {
  constructor(props) {
    super(props);
    this.adding = this.adding.bind(this);
    this.state = { add: false, edit: false };
  }

  adding() {
    this.setState({ add: true });
  }

  render() {
    return (
      <div>
        {this.props.exercise && (
          <table className="exerciseTable">
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
            <button className="button" onClick={this.adding}>
              Add New Exercise
            </button>
          </div>
        )}

        {this.state.add && <AddNewExercise person={this.props.person} />}
      </div>
    );
  }
}

export default ExerciseResultsTable;
