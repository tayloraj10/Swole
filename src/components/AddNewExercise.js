import React, { Component } from "react";
import { connect } from "react-redux";
import { addExercise } from "../actions/firebase.action";

import "../styles/AddNewExercise.css";

class AddNewExercise extends Component {
  constructor(props) {
    super(props);
    this.addSet = this.addSet.bind(this);
    this.removeSet = this.removeSet.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleRepChange = this.handleRepChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.state = { Exercise: "", sets: [["", ""]] };
  }

  addSet() {
    this.setState({ sets: this.state.sets.concat([["", ""]]) });
  }

  removeSet() {
    this.setState({ sets: this.state.sets.slice(0, -1) });
  }

  handleWeightChange(index, event) {
    let newArray = this.state.sets;
    newArray[index][0] = event.target.value;
    this.setState({ sets: newArray });
  }

  handleRepChange(index, event) {
    let newArray = this.state.sets;
    newArray[index][1] = event.target.value;
    this.setState({ sets: newArray });
  }

  handlePersonChange(event) {
    this.setState({ Person: event.target.value });
  }

  handleExerciseChange(event) {
    this.setState({ Exercise: event.target.value });
  }

  render() {
    return (
      <div>
        <form className="newForm">
          <label className="setInput">
            Exercise:
            <input
              className="input"
              type="text"
              name="name"
              onChange={this.handleExerciseChange}
            />
          </label>

          {this.state.sets.map((x, y) => (
            <div key={y} className={"setInput"}>
              <label htmlFor={"set" + (y + 1)}>Set {y + 1}:</label>
              <input
                className="input"
                type="text"
                name={"set" + (y + 1)}
                placeholder="Weight"
                value={this.state.sets[y][0]}
                onChange={e => this.handleWeightChange(y, e)}
              />
              <input
                className="input"
                type="text"
                name={"set" + (y + 1)}
                placeholder="Reps"
                value={this.state.sets[y][1]}
                onChange={e => this.handleRepChange(y, e)}
              />
            </div>
          ))}
          <input
            type="button"
            name="increase"
            value="+"
            onClick={this.addSet}
            className="add"
          />
          <input
            type="button"
            name="decrease"
            value="-"
            onClick={this.removeSet}
            className="add"
          />
        </form>
        <div>
          <button type="button" onClick={this.props.addExercise}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { addExercise }
)(AddNewExercise);

export { AddNewExercise };
