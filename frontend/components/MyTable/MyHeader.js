import React from 'react';
import { connect } from 'react-redux';
import { sortColumn } from 'store/actions/sortActions';
import {bindActionCreators} from 'redux';

class MyHeader extends React.Component {

  constructor(props) {
    super(props);
    this.columnClick = this.columnClick.bind(this);
  }

  columnClick() {
    console.log('column clicked;');
    console.log(this.props.name);
    this.props.sortColumn('name');
  }

  render() {
    return <lable onClick={this.columnClick}>{this.props.name}</lable>
  }  
}

function mapStateToProps(state) {
  console.log(state);  
  return {
    rows: state.rows,
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({ sortColumn }, dispatch);

  // return({
  //   //actions: bindActionCreators(tableActions, dispatch)
  //   sortColumn: function(columnName) {
  //     return dispatch({
  //       type: 'SORT_COLUMN',
  //       columnSortInfo: columnName
  //     });
  //   }
  // })
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);