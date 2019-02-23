import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  ButtonGroup
} from 'react-bootstrap';

import {
  getRoutePath
} from 'CommonUtil/CommonUtil.js';

import MyTable from 'MyTable/MyTable.js';

export class Dashboard extends React.Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p style={{marginTop:32}}>Place your sample below this line (Dashboard/Dashboard.js):</p>
        <hr style={{border: '1px solid black'}} />
        <h2>Table:</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <MyTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// latest way to dispatch
Dashboard.contextTypes = {
  // @see https://github.com/grommet/grommet/issues/441
  router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
    };
  }
)(Dashboard);