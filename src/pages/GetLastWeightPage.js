import React, { Component } from "react";
import { connect } from "react-redux";
import ExerciseSelection from "../components/ExerciseSelection";
import PersonSelection from "../components/PersonSelection";
import ExerciseResultsTable from "../components/ExerciseResultsTable";
import { initializeFirebase, fetchFirebase } from "../actions/firebase.action";

import "../styles/GetLastWeightPage.css";

class GetLastWeightPage extends Component {
  constructor(props) {
    super(props);

    this.changeExercise = this.changeExercise.bind(this);

    this.state = {
      selectedPerson: null,
      exercises: [],
      uniquePersons: [],
      selectedExercise: null,
      selectedExercises: null,
      updated: false
    };
  }

  getUniquePersons = () => [
    ...new Set(this.props.firebase.db.map(item => item.Person))
  ];

  getExercises = () =>
    this.setState({
      selectedExercises: [
        { Exercise: "Pick an Exercise" },
        ...this.props.firebase.db.filter(
          item => item.Person === this.state.selectedPerson
        )
      ]
    });

  changeExercise(event) {
    if (event.target.value === "Pick an Exercise")
      this.setState({
        selectedExercise: null
      });
    else
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
    if (event.target.value === "default")
      this.setState({ selectedPerson: null, selectedExercise: null });
    else
      this.setState(
        {
          selectedPerson: event.target.value,
          selectedExercise: null
        },
        this.getExercises
      );
  };

  render() {
    return (
      <div>
        <div className="item">
          {this.props.firebase && this.props.firebase.db && (
            <PersonSelection
              uniquePersons={this.getUniquePersons()}
              change={this.handlePersonChange}
            />
          )}
        </div>
        <div className="item">
          {this.state.selectedPerson && (
            <ExerciseSelection
              selectedExercises={this.state.selectedExercises}
              change={this.changeExercise}
            />
          )}
        </div>
        <div className="item">
          {this.state.selectedPerson && this.state.selectedExercise && (
            <ExerciseResultsTable
              exercise={this.state.selectedExercise[0].LastWeight}
              person={this.state.selectedPerson}
            />
          )}
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
