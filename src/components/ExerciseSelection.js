import React, { Component } from 'react';


class ExerciseSelection extends Component {
    render() {
        return (
            <select onChange={this.props.change}>
                <option>{''}</option>
                {this.props.uniqueExercises.map((x,y) => <option key={y} value={x}>{x}</option>)}
            </select>
        )
    }
}


export default ExerciseSelection;