import React, { Component } from 'react';


const data = [ { "Name": "Bench Press", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 8, "Weight": 155 }, "Set3": { "Reps": 5, "Weight": 175 }, "Set4": { "Reps": 3, "Weight": 185 }, "Set5": { "Reps": 5, "Weight": 155 } } }, { "Name": "Deadlift", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 7, "Weight": 185 } } }, { "Name": "Squat", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 5, "Weight": 225 }, "Set4": { "Reps": 4, "Weight": 225 } } } ]

//let uniqueExercises = []


class GetLastWeight extends Component {
    constructor(props) {
        super(props);
        this.getUniqueExercises = this.getUniqueExercises.bind(this);
        this.state = {uniqueExercises: []}
    }

    getUniqueExercises(dataObject) {
        let tempList = []
        dataObject.forEach( (item, index)  => {
            tempList.push(dataObject[index]['Name']);
        });
        this.setState({uniqueExercises: tempList});
    }

    componentDidMount() {
        this.getUniqueExercises(data)
    }

    render() {
        console.log(this.state.uniqueExercises[0]);
        return (
            <select>
                {this.state.uniqueExercises.map((x,y) => <option key={y}>{x}</option>)}
            </select>
        )
    }
}


export default GetLastWeight;