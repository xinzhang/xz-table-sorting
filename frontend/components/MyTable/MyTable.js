import React from 'react';
import * as Table from 'reactabular-table';
import { connect } from 'react-redux';
import MyHeader from 'MyTable/MyHeader.js';

const rows = [
  {id: 100, name: 'John', tools: {hammer: true}, country: 'fi'},
  {id: 101, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 102, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 103, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 104, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 105, name: 'Jack', tools: {hammer: false}, country: 'dk'}
];
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

  componentWillReceiveProps(props, nextProps) {
    console.log(props, nextProps);
  }

  render() {
    return (
      <Table.Provider
         className="table table-striped table-bordered"
         columns={columns} >
        <Table.Header />
        <Table.Body rows={this.props.rows} rowKey="id" />
      </Table.Provider>
    );
  }

}

function mapStateToProps(state) {
  console.log('mapstate to props', state.rows);
  return {
    rows: state.rows,
  };
}

export default connect(mapStateToProps)(MyTable);