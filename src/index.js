// import React from 'react'
// import ReactDOM from 'react-dom'
//
// import App from './App';
// import Appa from './Appa';
//
// import { createStore, combineReducers, applyMiddleware,compose } from 'redux'
// import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history'
//
// import createHistory from 'history/createBrowserHistory'
// import { Route,Switch } from 'react-router'
//
// import { routerReducer, push } from 'react-router-redux'; //https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
// import { ConnectedRouter,connectRouter,routerMiddleware } from 'connected-react-router'; //https://github.com/supasate/connected-react-router
//
// import * as rootReducer from './reducers' // Or wherever you keep your reducers
//
//
//
// // Create a history of your choosing (we're using a browser history in this case)
// const history = createBrowserHistory();
//
// // Build the middleware for intercepting and dispatching navigation actions
//
//
// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// // const store = createStore(
// //   combineReducers({
// //     ...reducers,
// //     router: routerReducer
// //   }),
// //   applyMiddleware(middleware)
// // )
//
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(
//     connectRouter(history)(rootReducer),
//     composeEnhancer(
//         applyMiddleware(
//             routerMiddleware(history),
//         ),
//     ),
// )
//
// // Now you can dispatch navigation actions from anywhere!
// // store.dispatch(push('/foo'))
//
// ReactDOM.render(
//   <Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */ }
//     <ConnectedRouter history={history}>
//       <div>
//           <Switch>
//             <Route exact path="/" component={App}/>
//             <Route path="/App" component={App}/>
//             <Route path="/Appa" component={Appa}/>
//           </Switch>
//       </div>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )
import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import routes from './routes'


import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter,ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import rootReducer from './reduxs/reducers'

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
)


ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
        {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
