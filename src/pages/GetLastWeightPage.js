import React, { Component } from 'react';

import '../styles/GetLastWeightPage.css';

import ExerciseSelection from '../components/ExerciseSelection';
import PersonSelection from '../components/PersonSelection';
import ExerciseResultsTable from '../components/ExerciseResultsTable';


const data = [ { "Name": "Bench Press", "Equipment" : "Barbell", "Person": "Rob", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 8, "Weight": 155 }, "Set3": { "Reps": 5, "Weight": 175 }, "Set4": { "Reps": 3, "Weight": 185 }, "Set5": { "Reps": 5, "Weight": 155 } } }, { "Name": "Deadlift", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 7, "Weight": 185 } } }, { "Name": "Squat", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 5, "Weight": 225 }, "Set4": { "Reps": 4, "Weight": 225 } } } ]


class GetLastWeightPage extends Component {
    constructor(props) {
        super(props);
        this.getUniqueExercises = this.getUniqueExercises.bind(this);
        this.getUniquePersons = this.getUniquePersons.bind(this);
        this.getExercisesByPerson = this.getExercisesByPerson.bind(this);
        this.changeExercise = this.changeExercise.bind(this);
        this.state = {uniqueExercises: [], uniquePersons: [], exercisesByPerson: {}, exercisesByPersonUnique: [],  data: data, currentExercise: {}}
    }

    getUniquePersons(dataObject) {
        let tempList = ['']
        dataObject.forEach( (item, index)  => {
            if ( !tempList.includes(dataObject[index]['Person']) ) {
                tempList.push(dataObject[index]['Person']);
            }
        });
        this.setState({uniquePersons: tempList});
        //console.log(this.state.uniquePersons)
    }

    getUniqueExercises(dataObject) {
        let tempList = []
        dataObject.forEach( (item, index)  => {
            tempList.push(dataObject[index]['Name']);
        });
        this.setState({uniqueExercises: tempList.sort()});
    }

    getExercisesByPerson(event) {
        const person = event.target.value;
        let tempObject = {};
        this.state.data.forEach( (item, index)  => {
            if (this.state.data[index]['Person'] === person) {
                tempObject[this.state.data[index]['Name']] = this.state.data[index]['LastWeight']
            }
        });
        this.setState({exercisesByPerson: tempObject});
        this.setState({exercisesByPersonUnique: Object.keys(tempObject)});
        console.log("Getting Exercises for Person");
    }

    changeExercise(event) {
        //console.log(this.state.exercisesByPerson);
        const exercise = event.target.value;
        this.setState({currentExercise: this.state.exercisesByPerson[exercise]});
        console.log("Changing Exercise");
    }

    componentDidMount() {
        this.getUniqueExercises(data);
        this.getUniquePersons(data);
    }

    render() {
        return (
            <div className={"weightviewer"}>
                <div className={"persons selector"}>
                    <PersonSelection uniquePersons={this.state.uniquePersons} change={this.getExercisesByPerson} />
                </div>
                <div className={"exercises selector"}>
                    <ExerciseSelection uniqueExercises={this.state.exercisesByPersonUnique} change={this.changeExercise} />
                </div>
                <div>
                    <ExerciseResultsTable exercise={this.state.currentExercise}/>
                </div>
            </div>
        )
    }
}


export default GetLastWeightPage;