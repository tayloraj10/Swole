import React, { Component } from 'react';


class PersonSelection extends Component {
    render() {
        return (
            <select onChange={this.props.change}>
                {this.props.uniquePersons.map((x,y) => <option key={y} value={x}>{x}</option>)}
            </select>
        )
    }
}


export default PersonSelection;