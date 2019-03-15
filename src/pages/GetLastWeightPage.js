import React, { Component } from "react";

import "../styles/GetLastWeightPage.css";

import ExerciseSelection from "../components/ExerciseSelection";
import PersonSelection from "../components/PersonSelection";
import ExerciseResultsTable from "../components/ExerciseResultsTable";

const data = [
  {
    Name: "Bench Press",
    Equipment: "Barbell",
    Person: "Rob",
    LastWeight: [
      { Reps: 10, Weight: 135 },
      { Reps: 8, Weight: 155 },
      { Reps: 5, Weight: 175 },
      { Reps: 3, Weight: 185 },
      { Reps: 5, Weight: 155 }
    ]
  },
  {
    Name: "Deadlift",
    Equipment: "Barbell",
    Person: "Taylor",
    LastWeight: [
      { Reps: 10, Weight: 135 },
      { Reps: 7, Weight: 185 },
      { Reps: 7, Weight: 185 }
    ]
  },
  {
    Name: "Squat",
    Equipment: "Barbell",
    Person: "Taylor",
    LastWeight: [
      { Reps: 10, Weight: 135 },
      { Reps: 7, Weight: 185 },
      { Reps: 5, Weight: 225 },
      { Reps: 4, Weight: 225 }
    ]
  }
];

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
        tempObject[this.state.data[index]["Name"]] = this.state.data[index][
          "LastWeight"
        ];
      }
    });
    this.setState({
      exercisesByPerson: tempObject,
      exercisesByPersonUnique: Object.keys(tempObject)
    });
  }

  changeExercise(event) {
    //console.log(this.state.exercisesByPerson);
    this.setState({
      currentExercise: this.state.exercisesByPerson[event.target.value]
    });
  }

  componentDidMount() {
    this.setState({
      uniqueExercises: this.getUniqueExercises(data),
      uniquePersons: this.getUniquePersons(data)
    });
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

export default GetLastWeightPage;
