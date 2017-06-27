import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';
import Appa from './Appa';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route,Switch } from 'react-router'

import { routerReducer, routerMiddleware, push } from 'react-router-redux'; //https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
import { ConnectedRouter } from 'connected-react-router'; //https://github.com/supasate/connected-react-router

import * as reducers from './reducers' // Or wherever you keep your reducers

console.log("reducers",reducers)

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/App" component={App}/>
            <Route path="/Appa" component={Appa}/>
          </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
