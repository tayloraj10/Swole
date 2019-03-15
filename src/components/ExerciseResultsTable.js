import React, { Component } from "react";

class ExerciseResultsTable extends Component {
  render() {
    return (
      <div>
        {this.props.exercise && (
          <table className={"exerciseTable"}>
            <thead>
              <tr>
                {this.props.exercise.map((item, i) => (
                  <td key={i + 1}>Set {i + 1}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.props.exercise && (
                <tr>
                  {this.props.exercise.map((item, i) => (
                    <td key={i + 1}>{item.Weight}</td>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ExerciseResultsTable;
