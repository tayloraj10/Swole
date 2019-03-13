import React, { Component } from 'react';


class ExerciseSelection extends Component {
    render() {
        return (
            <select>
                {this.props.uniqueExercises.map((x,y) => <option key={y}>{x}</option>)}
            </select>
        )
    }
}


export default ExerciseSelection;