import React from 'react';
import { connect } from 'react-redux';
import { sortColumn, orderSortColumn} from 'store/actions/sortActions';
import {bindActionCreators} from 'redux';
import MSGlyphicon from 'MSGlyphicon/MSGlyphicon.js';

class MyHeader extends React.Component {

  constructor(props) {
    super(props);
    this.columnClick = this.columnClick.bind(this);
  }

  columnClick() {

    (this.props.order_ordinal_status === 'stop') ? 
      this.props.sortColumn(this.props.name)
      : this.props.orderSortColumn(this.props.name);


    // if (this.props.order_ordinal_status === 'stop') {
    //   this.props.sortColumn(this.props.name);
    // } else {
    // this.props.orderSortColumn(this.props.name);
    
  }

  render() {
    const {name, icon} = this.props;    
    return (
      <lable onClick={this.columnClick}>
        {name}        
        <MSGlyphicon glyph={icon} className="4x" style={{marginLeft: '10px'}} />
        { this.props.order_ordinal_status !== 'stop' && this.props.orderOrdinal > 0 && (
          <span style={{marginLeft: '10px', fontSize: '1em', color: 'red'}}>{this.props.orderOrdinal}</span>
        )}
      </lable>
    );
  }  
}

MyHeader.defaultProps = {
  name: '',
  icon: 'fa-sort',
  order_ordinal_status: 'stop',
  orderOrdinal: -1,
}

function mapStateToProps(state, ownProps) {
  const { sorts, order_ordinal_status } = state.data;
  const { name, style } = ownProps;

  let icon = 'sort';

  const idx = sorts.findIndex( x=> x.name === name);
  if (idx > -1) {    
    icon = `sort-${sorts[idx].order}`;
  }

  return {
    sorts,
    icon,
    order_ordinal_status,
    orderOrdinal: idx + 1
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({ sortColumn, orderSortColumn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);