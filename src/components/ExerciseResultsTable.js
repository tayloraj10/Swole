import React, { Component } from "react";

class ExerciseResultsTable extends Component {
  render() {
    return (
      <div>
        {this.props.exercise && (
          <table className={"exerciseTable"}>
            <thead>
              <tr>
                <th>Set 1</th>
                <th>Set 2</th>
                <th>Set 3</th>
                <th>Set 4</th>
                <th>Set 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* {this.props.exercise.map((x, y) => (
                  <td key={y + 1}>{x.Weight}</td>
                ))} */}
              </tr>
              <tr />
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ExerciseResultsTable;
