import React, { Component } from "react";
// import {
//   Input,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem
// } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";

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
    this.state = { Person: "", Exercise: "", sets: [["", ""]] };
  }

  addSet() {
    this.setState({ sets: this.state.sets.concat([[0, 0]]) });
    //console.log(this.state.sets);
  }

  removeSet() {
    this.setState({ sets: this.state.sets.slice(0, -1) });
    console.log(this.state.sets);
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
          <label className="formItem">
            Exercise:
            <input
              type="text"
              name="name"
              onChange={this.handleExerciseChange}
            />
          </label>
          <select className="formItem" onChange={this.handlePersonChange}>
            <option value="Taylor">Taylor</option>
            <option value="Rob">Rob</option>
          </select>
          <div className="setInputs">
            {this.state.sets.map((x, y) => (
              <div key={y} className={"setInput"}>
                <label className="inputItem" htmlFor={"set" + (y + 1)}>
                  Set {y + 1}
                </label>
                <input
                  className="inputItem"
                  type="text"
                  name={"set" + (y + 1)}
                  className="formItem"
                  placeholder="Weight"
                  value={this.state.sets[y][0]}
                  onChange={e => this.handleWeightChange(y, e)}
                />
                <input
                  className="inputItem"
                  type="text"
                  name={"set" + (y + 1)}
                  className="formItem"
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
              className="addremove"
            />
            <input
              type="button"
              name="decrease"
              value="-"
              onClick={this.removeSet}
              className="addremove"
            />
          </div>
        </form>
        <div>
          <button
            type="button"
            className="formItem"
            onClick={this.props.addExerciseSubmit(this.state)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

// <div style={{display: 'block'}}>
//   <form className={"newForm"}>
//     <FormControl required fullWidth>
//       <InputLabel>Exercise</InputLabel>
//       <Input id="Exercise" name="Exercise" autoFocus />
//     </FormControl>

//     <FormControl required>
//       <Select
//         value={this.state.Person}
//         autoWidth
//         inputProps={{
//           name: "Person"
//         }}
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={"Taylor"}>Taylor</MenuItem>
//         <MenuItem value={"Rob"}>Rob</MenuItem>
//       </Select>
//     </FormControl>

//     <Button
//       type="submit"
//       variant="contained"
//       color="secondary"
//       className={"submitButton"}
//     >
//       Submit
//     </Button>
//   </form>
// </div>

export default AddNewExercise;
