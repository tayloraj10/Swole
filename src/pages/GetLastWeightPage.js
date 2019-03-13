import React, { Component } from 'react';

import ExerciseSelection from '../components/ExerciseSelection';
import PersonSelection from '../components/PersonSelection';


const data = [ { "Name": "Bench Press", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 8, "Weight": 155 }, "Set3": { "Reps": 5, "Weight": 175 }, "Set4": { "Reps": 3, "Weight": 185 }, "Set5": { "Reps": 5, "Weight": 155 } } }, { "Name": "Deadlift", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 7, "Weight": 185 } } }, { "Name": "Squat", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 5, "Weight": 225 }, "Set4": { "Reps": 4, "Weight": 225 } } } ]


class GetLastWeightPage extends Component {
    constructor(props) {
        super(props);
        this.getUniqueExercises = this.getUniqueExercises.bind(this);
        this.getUniquePersons = this.getUniquePersons.bind(this);
        this.state = {uniqueExercises: [], uniquePersons: []}
    }

    getUniqueExercises(dataObject) {
        let tempList = []
        dataObject.forEach( (item, index)  => {
            tempList.push(dataObject[index]['Name']);
        });
        this.setState({uniqueExercises: tempList.sort()});
    }

    getUniquePersons(dataObject) {
        let tempList = []
        dataObject.forEach( (item, index)  => {
            if ( !tempList.includes(dataObject[index]['Person']) ) {
                tempList.push(dataObject[index]['Person']);
            }
        });
        this.setState({uniquePersons: tempList});
        console.log(this.state.uniquePersons)
    }

    componentDidMount() {
        this.getUniqueExercises(data);
        this.getUniquePersons(data);
    }

    render() {
        return (
            <div>
                <div className={"persons selector"}>
                    <PersonSelection uniquePersons={this.state.uniquePersons} />
                </div>
                <div className={"exercises selector"}>
                    <ExerciseSelection uniqueExercises={this.state.uniqueExercises} />
                </div>
            </div>
        )
    }
}


export default GetLastWeightPage;