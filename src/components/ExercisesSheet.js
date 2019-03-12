import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const rows = [ { "Name": "Bench Press", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 8, "Weight": 155 }, "Set3": { "Reps": 5, "Weight": 175 }, "Set4": { "Reps": 3, "Weight": 185 }, "Set5": { "Reps": 5, "Weight": 155 } } }, { "Name": "Deadlift", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 7, "Weight": 185 } } }, { "Name": "Squat", "Equipment" : "Barbell", "Person": "Taylor", "LastWeight" : { "Set1": { "Reps": 10, "Weight": 135 }, "Set2": { "Reps": 7, "Weight": 185 }, "Set3": { "Reps": 5, "Weight": 225 }, "Set4": { "Reps": 4, "Weight": 225 } } } ]

const columns = [
    { key: 'Name', name: 'Name' },
    { key: 'Person', name: 'Person' },
    { key: 'Equipment', name: 'Equipment' },
    { key: 'Set1', name: 'Set 1' }];


const rowGet = (i) => {
    console.log(rows[i])
    // console.log(Object.keys(rows[i]['LastWeight']))
    return rows[i];
}


class ExercisesSheet extends Component {
    render() {
        return (<ReactDataGrid
            columns={columns}
            rowGetter={rowGet}
            rowsCount={rows.length}
            minHeight={150} />)
    }
}


export default ExercisesSheet;