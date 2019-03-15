import React, { Component } from "react";

class ExerciseResultsTable extends Component {
  constructor(props) {
    super(props);
    this.handleSetsAndReps = this.handleSetsAndReps.bind(this);
    this.state = {
      weight1: null,
      weight2: null,
      weight3: null,
      weight4: null,
      weight5: null,
      rep1: null,
      rep2: null,
      rep3: null,
      rep4: null,
      rep5: null
    };
  }

  handleSetsAndReps() {
    //console.log(this.props.exercise);
    const info = this.props.exercise;
    if (info.Set1) {
      this.setState({ weight1: info.Set1.Weight, rep1: info.Set1.Reps });
    }
    if (info.Set2) {
      this.setState({ weight2: info.Set2.Weight, rep2: info.Set2.Reps });
    }
    if (info.Set3) {
      this.setState({ weight3: info.Set3.Weight, rep3: info.Set3.Reps });
    }
    if (info.Set4) {
      this.setState({ weight4: info.Set4.Weight, rep4: info.Set4.Reps });
    }
    if (info.Set5) {
      this.setState({ weight5: info.Set5.Weight, rep5: info.Set5.Reps });
    }
  }

  componentWillReceiveProps() {
    this.handleSetsAndReps();
  }

  render() {
    return (
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
            <td>{this.state.weight1}</td>
            <td>{this.state.weight2}</td>
            <td>{this.state.weight3}</td>
            <td>{this.state.weight4}</td>
            <td>{this.state.weight5}</td>
          </tr>
          <tr>
            <td>{this.state.rep1}</td>
            <td>{this.state.rep2}</td>
            <td>{this.state.rep3}</td>
            <td>{this.state.rep4}</td>
            <td>{this.state.rep5}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ExerciseResultsTable;
