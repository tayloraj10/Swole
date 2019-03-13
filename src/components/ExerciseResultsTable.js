import React, { Component } from 'react';


class ExerciseResultsTable extends Component {
    render() {
        return (
            <table className={'exerciseTable'}>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th> 
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td> 
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td> 
                    <td>94</td>
                </tr>
            </table>
        )
    }
}


export default ExerciseResultsTable;