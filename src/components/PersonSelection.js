import React, { Component } from 'react';


class PersonSelection extends Component {
    render() {
        return (
            <select>
                {this.props.uniquePersons.map((x,y) => <option key={y}>{x}</option>)}
            </select>
        )
    }
}


export default PersonSelection;