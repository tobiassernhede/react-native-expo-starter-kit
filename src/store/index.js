'use strict'

/**--- Node Modules ---**/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**--- Reducers ---**/
import appLoading from './reducers/appLoadingReducer';
import appState from './reducers/appStateReducer';
import persistantAppstate from './reducers/persistantAppStateReducer';
import nav from './reducers/navigationReducer';

export default createStore(
  combineReducers({
    appLoading,
    appState,
    persistantAppstate,
    nav
  }),
  applyMiddleware(
    thunk
  )
);