import React from 'react';
import { connect } from 'react-redux';
import { sortColumn } from 'store/actions/sortActions';
import {bindActionCreators} from 'redux';
import MSGlyphicon from 'MSGlyphicon/MSGlyphicon.js';

class MyHeader extends React.Component {

  constructor(props) {
    super(props);
    this.columnClick = this.columnClick.bind(this);
  }

  columnClick() {
    this.props.sortColumn(this.props.name);
  }

  render() {
    const {name, icon} = this.props;    
    return (
      <lable onClick={this.columnClick}>
        {name}        
        <MSGlyphicon glyph={icon} className="4x" style={{marginLeft: '10px'}} />
      </lable>
    );
  }  
}

MyHeader.defaultProps = {
  name: '',
  icon: 'fa-sort', 
}

function mapStateToProps(state, ownProps) {
  console.log("myheader mapStateToProps",  state);
  const { sorts } = state.data;
  const { name, style } = ownProps;

  let icon = 'sort';

  const item = sorts.find( x=> x.name === name);

  if (item) {
    icon = `sort-${item.order}`;
  }
  return {
    sorts,
    icon
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({ sortColumn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);