import firebase from "firebase";
import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/GetLastWeightPage.css";

import ExerciseSelection from "../components/ExerciseSelection";
import PersonSelection from "../components/PersonSelection";
import ExerciseResultsTable from "../components/ExerciseResultsTable";
import AddNewExercise from "../components/AddNewExercise";
import { initializeFirebase, fetchFirebase } from "../actions/firebase.action";

let database;
let data;

class GetLastWeightPage extends Component {
  constructor(props) {
    super(props);
    this.getUniqueExercises = this.getUniqueExercises.bind(this);
    this.getUniquePersons = this.getUniquePersons.bind(this);
    this.getExercisesByPerson = this.getExercisesByPerson.bind(this);
    this.changeExercise = this.changeExercise.bind(this);

    this.state = {
      uniqueExercises: null,
      uniquePersons: null,
      exercisesByPerson: null,
      exercisesByPersonUnique: null,
      data: data,
      currentExercise: null
    };
  }

  getUniquePersons = data => [...new Set(data.map(item => item.Person))];
  getUniqueExercises = data => [...new Set(data.map(item => item.Name))];

  getExercisesByPerson(event) {
    let tempObject = {};
    this.state.data.forEach((item, index) => {
      if (this.state.data[index]["Person"] === event.target.value) {
        tempObject[this.state.data[index]["Exercise"]] = this.state.data[index][
          "LastWeight"
        ];
      }
    });
    this.setState({
      exercisesByPerson: tempObject,
      exercisesByPersonUnique: Object.keys(tempObject),
      currentExercise: null
    });
  }

  changeExercise(event) {
    this.setState({
      currentExercise: this.state.exercisesByPerson[event.target.value]
    });
  }

  componentDidMount() {
    this.props.initializeFirebase();
  }

  render() {
    return (
      <div className={"weightviewer"}>
        <div className={"persons selector"}>
          <PersonSelection
            uniquePersons={this.state.uniquePersons}
            change={this.getExercisesByPerson}
          />
        </div>
        <div className={"exercises selector"}>
          <ExerciseSelection
            uniqueExercises={this.state.exercisesByPersonUnique}
            change={this.changeExercise}
          />
        </div>
        <div>
          <ExerciseResultsTable exercise={this.state.currentExercise} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { initializeFirebase, fetchFirebase }
)(GetLastWeightPage);

export { GetLastWeightPage };
