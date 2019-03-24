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
    this.state = { person: "", exercise: "", sets: [[0, 0]] };
  }

  addSet() {
    this.setState({ sets: this.state.sets.concat([[0, 0]]) });
    console.log(this.state.sets);
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
    this.setState({ person: event.target.value });
  }

  handleExerciseChange(event) {
    this.setState({ exercise: event.target.value });
  }

  render() {
    return (
      <div>
        <form className="newForm">
          <label className="formItem">
            Name:
            <input type="text" name="name" />
          </label>
          <select className="formItem" onChange={this.handleNameChange}>
            <option value="Taylor">Taylor</option>
            <option value="Rob">Rob</option>
          </select>
          <div className="setInputs">
            {this.state.sets.map((x, y) => (
              <div className={"setInput"}>
                <label className="inputItem" for={"set" + (y + 1)}>
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
        <button type="submit" value="Submit" className="formItem" >
          Submit
        </button>
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
//         value={this.state.person}
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
