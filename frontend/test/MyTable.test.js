import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import rootReducer from 'store/reducers/rootReducer.js';
import MyTable from 'MyTable/MyTable.js';
import MyHeader from 'MyTable/MyHeader.js';

const store = createStore(
  combineReducers({
    data:rootReducer,
    routing: routerReducer
  }),
  {}, // initial state
);

describe('Test Tables', function() {
  before(function() {
  });

  it('MyTable is rendered properly', function() {
    const table = mount(
      <Provider store={store}>
          <MyTable />
      </Provider>
    );
  });

  it('MyTableHeader is rendered properly', function() {
    const table = mount(
      <Provider store={store}>
          <MyHeader name="id" />
      </Provider>
    );
  });
});
