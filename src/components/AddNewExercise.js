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
    this.state = { person: "" };
  }

  render() {
    return (
      <div style={{display: 'block'}}>
        <form className={"newForm"}>
          <FormControl required fullWidth>
            <InputLabel>Exercise</InputLabel>
            <Input id="Exercise" name="Exercise" autoFocus />
          </FormControl>

          <FormControl required>
            <Select
              value={this.state.person}
              autoWidth
              inputProps={{
                name: "Person"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Taylor"}>Taylor</MenuItem>
              <MenuItem value={"Rob"}>Rob</MenuItem>
            </Select>
          </FormControl>

          {/* <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={"submitButton"}
          >
            Submit
          </Button> */}
        </form>
      </div>

      // <div>
      //   <form className="newForm">
      //     <label>
      //       Name:
      //       <input type="text" name="name" />
      //     </label>
      //     <select>
      //       <option value="Taylor">Taylor</option>
      //       <option value="Rob">Rob</option>
      //     </select>
      //   </form>
      //   <Button type="submit" value="Submit" />
      // </div>
    );
  }
}

export default AddNewExercise;
