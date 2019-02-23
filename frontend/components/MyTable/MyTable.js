import React from 'react';
import * as Table from 'reactabular-table';
import { connect } from 'react-redux';
import MyHeader from 'MyTable/MyHeader.js';
import TestComponent from 'MyTable/TestComponent.js';
import MSGlyphicon from 'MSGlyphicon/MSGlyphicon.js';

const countries = {
  fi: 'Finland',
  dk: 'Denmark'
};

const columns = [
  {
    property: 'id',
    header: {
      label: 'ID'
    }
  },
  {
    property: 'name',
    header: {
      label: 'Name',
      transforms: [
        label => ({
          children: <MyHeader name='name' />
        }),
      ]
    }
  },
  {
    property: 'tools',
    header: {
      label: 'Active',
      transforms: [
        label => ({
          children: <MyHeader name='tools' />
        })
      ]
    },
    cell: {
      formatters: [
        tools => tools.hammer ? 'Hammertime' : 'nope'
      ]
    }
  },
  {
    property: 'country',
    header: {
      label: 'Country',
      transforms: [
        label => ({
          children: <MyHeader name='country' />          
        })
      ]
    },
    cell: {
      formatters: [
        country => countries[country]
      ]
    }
  }
];

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
        <MSGlyphicon glyph="sort" className="4x" />
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