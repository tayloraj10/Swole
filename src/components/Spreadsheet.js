import React, { Component } from 'react';
import { Grid, Input, Select } from 'react-spreadsheet-grid'
import '../styles/Spreadsheet.css';


const rows = [
    { id: 'user1', name: 'John Doe', positionId: 'Frontend developer' },
    { id: 'user2', name: 'John Doe', positionId: 'Frontend developer' },
    { id: 'user3', name: 'John Doe', positionId: 'Frontend developer' },
];

const positions = [{
    id: 1,
    name: 'Frontend developer'
}, {
    id: 2,
    name: 'Backend developer'
}];

class Spreadsheet extends Component {
    render() {
      return (
        <Grid 
            columns={[
            {
                title: () => 'Name', 
                value: (row, { focus }) => {
                    return (
                        <Input  
                        value={row.name}
                        focus={focus}
                        />
                    );
                }
            }, {
                title: () => 'Position',
                value: (row, { focus }) => {
                    return (
                        <Select  
                        value={row.positionId}
                        isOpen={focus}
                        items={positions}
                        />
                    );
                }
            }
            ]}

            rows = {rows}
            
            getRowKey={row => row.id}
        />
      );
    }
  }

export default Spreadsheet;