// Directory layout:
//   - frontend/index.js
//   - frontend/index.template.ejs (used by HtmlWebpackPlugin, @see html5-webpack.yasnippet)
//   - frontend/components/Sample/Sample.js
//   - frontend/components/Dashboard/Dashboard.js
//   - frontend/styles/ (storing global css files)
//   - frontend-dist/
//   - node_modules/
//   - package.json (@see package-reactjs.yasnippet)
//   - webpack.config.js (@see main-webpack.yasnippet)
//   - .babelrc (file contents: {"presets": ["react", "es2015"], "plugins": ["transform-object-rest-spread"]})

require('es5-shim'); //ie 9

// Client entry point
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'; // route saved into store
import {
  getRoutePath
} from 'CommonUtil/CommonUtil.js';

import rootReducer from 'store/reducers/rootReducer.js';
// Initialize store

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    routing: routerReducer,
    data: rootReducer,
  }),
  {},
);
/* eslint-enable */

// master page stylesheet
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // "a full width container, spanning the entire width of your viewport', quoted from bootstrap docuemntation
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

// the path is relative to the root directory which defined in webpack.config.js
//
// resolve: {
//   extensions: ['', '.js', '.jsx'],
//   modules: [
//     'frontend',
//     'node_modules'
//   ],
//   // root for es2015 import
//   // @see http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/
//   root: [
//     path.resolve('./frontend/components')
//   ]
// }
const rootRoute = {
  // We use dynamic routes which can be changed programmically
  // @see https://github.com/ReactTraining/react-router/blob/master/docs/API.md
  path: getRoutePath(), // the reason we use dynamic route
  component: App,
  indexRoute: {
    getComponent: (nextState, cb) => {
      require.ensure([], require => {
        // use [yas] elisp error: Symbol's value as variable is void: \./Home/Home\.js if you prefer relative index.js
        cb(null, require('Dashboard/Dashboard.js').default);
      });
    }
  },
  childRoutes: [
  ]
};
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {rootRoute}
    </Router>
  </Provider>,
  document.getElementById('app')
);
