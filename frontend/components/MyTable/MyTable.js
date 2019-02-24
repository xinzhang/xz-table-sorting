import React from 'react';
import * as Table from 'reactabular-table';
import { connect } from 'react-redux';
import { startOrderOrdinal,  stopOrderOrdinal} from 'store/actions/sortActions';
import {bindActionCreators} from 'redux';
import TestComponent from 'MyTable/TestComponent.js';
import columns from './Columns.js';

export class MyTable extends React.Component {

  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyDown(event) {
    event.stopPropagation(); 
    
    if (event.ctrlKey || event.altKey) {      
      this.props.startOrderOrdinal();
    }
  }

  handleKeyUp(event) {
    if (!event.ctrlKey && !event.altKey) {
      this.props.stopOrderOrdinal();
    }
  }

  componentDidMount() {  
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("keydown", this.handleKeyDown);

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
  return {
    rows: [...state.data.rows],
    column: state.data.sorts || ''
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({ startOrderOrdinal, stopOrderOrdinal }, dispatch);
}

MyTable.defaultProps = {
  rows: [],
  column: ''
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTable);