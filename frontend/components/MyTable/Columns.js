import React from 'react';
import MyHeader from 'MyTable/MyHeader.js';

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
    property: 'family',
    header: {
      label: 'Family',
      transforms: [
        label => ({
          children: <MyHeader name='family' />
        })
      ]
    },
  },
  {
    property: 'city',
    header: {
      label: 'City',
      transforms: [
        label => ({
          children: <MyHeader name='city' />
        })
      ]
    },
  },
  {
    property: 'score',
    header: {
      label: 'Score',
      transforms: [
        label => ({
          children: <MyHeader name='score' />          
        })
      ]
    }
  }
];

export default columns;