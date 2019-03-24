import React, { Component } from "react";
import {
  Input,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "../styles/AddNewExercise.css";

class AddNewExercise extends Component {
  constructor(props) {
    super(props);
    this.addSet = this.addSet.bind(this);
    this.removeSet = this.removeSet.bind(this);
    this.state = { person: "", numberSets: [1] };
  }

  addSet() {
    this.setState({ numberSets: this.state.numberSets.concat([1])});
    console.log(this.state.numberSets);
  }

  removeSet() {
    this.setState({ numberSets: this.state.numberSets.slice(0, -1)});
    console.log(this.state.numberSets);
  }

  render() {
    return (
      <div>
        <form className="newForm">
          <label className="formItem">
            Name:
            <input type="text" name="name" />
          </label>
          <select className="formItem">
            <option value="Taylor">Taylor</option>
            <option value="Rob">Rob</option>
          </select>
          <div className="setInputs">
            {this.state.numberSets.map((x, y) => (
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
                />
                <input
                  className="inputItem"
                  type="text"
                  name={"set" + (y + 1)}
                  className="formItem"
                  placeholder="Reps"
                />
              </div>
            ))}
            <input
              type="button"
              name="increase"
              value="+"
              onClick={this.addSet}
              className='addremove'
            />
            <input
              type="button"
              name="decrease"
              value="-"
              onClick={this.removeSet}
              className='addremove'
            />
          </div>
        </form>
        <button type="submit" value="Submit" className="formItem">
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
