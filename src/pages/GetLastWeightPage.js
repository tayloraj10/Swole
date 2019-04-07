import firebase from "firebase";
import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/GetLastWeightPage.css";

import ExerciseSelection from "../components/ExerciseSelection";
import PersonSelection from "../components/PersonSelection";
import ExerciseResultsTable from "../components/ExerciseResultsTable";
import AddNewExercise from "../components/AddNewExercise";
import { initializeFirebase, fetchFirebase } from "../actions/firebase.action";

class GetLastWeightPage extends Component {
  constructor(props) {
    super(props);

    this.changeExercise = this.changeExercise.bind(this);

    this.state = {
      selectedPerson: null,
      exercises: [],
      uniquePersons: [],
      selectedExercise: null,
      selectedExercises: null
    };
  }

  getUniquePersons = () => [
    ...new Set(this.props.firebase.db.map(item => item.Person))
  ];

  getExercises = () =>
    this.setState({
      selectedExercises: this.props.firebase.db.filter(
        item => item.Person === this.state.selectedPerson
      )
    });

  changeExercise(event) {
    this.setState({
      selectedExercise: this.state.selectedExercises.filter(
        item => item.Exercise === event.target.value
      )
    });
  }

  componentWillMount() {
    this.props.initializeFirebase();
  }

  handlePersonChange = event => {
    this.setState({ selectedPerson: event.target.value }, this.getExercises);
  };

  render() {
    return (
      <div>
        {this.props.firebase && this.props.firebase.db && (
          <PersonSelection
            uniquePersons={this.getUniquePersons()}
            change={this.handlePersonChange}
          />
        )}
        {this.state.selectedPerson && (
          <ExerciseSelection
            selectedExercises={this.state.selectedExercises}
            change={this.changeExercise}
          />
        )}
        {this.state.selectedExercise && (
          <ExerciseResultsTable
            exercise={this.state.selectedExercise[0].LastWeight}
          />
        )}
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
