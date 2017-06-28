import rootReducer from "reducers";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {routerMiddleware} from "react-router-redux";
import {hashHistory} from "react-router";
import fetchMiddleware from "./middleware/fetchMiddleware";
import {composeWithDevTools} from "redux-devtools-extension";
const routersMiddleware = routerMiddleware(hashHistory);
/**
 * 中间件
 */
const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        routersMiddleware,
        fetchMiddleware
    )
)(createStore)
function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if(module.hot) { //模块热替换(HMR)交换, 添加, 或者删除模块, 同时应用持续运行, 不需要页面刷新.
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}

export default configureStore()