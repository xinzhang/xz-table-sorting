import React from 'react';
import * as Table from 'reactabular-table';
import { connect } from 'react-redux';

import TestComponent from 'MyTable/TestComponent.js';
import MSGlyphicon from 'MSGlyphicon/MSGlyphicon.js';
import columns from './Columns.js';


export class MyTable extends React.Component {

  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const c = this.props.column;
    const {column, rows} = this.props;
    return (
      <div>      
      <TestComponent column={column} /> 
      <Table.Provider
         className="table table-striped table-bordered"
         columns={columns} >
        <Table.Header />
        <Table.Body rows={rows} rowKey="id" />
      </Table.Provider>
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log('mapstate to props', state.data);  
  return {
    rows: [...state.data.rows],
    column: state.data.sorts || ''
  };
}

MyTable.defaultProps = {
  rows: [],
  column: ''
}

export default connect(mapStateToProps)(MyTable);