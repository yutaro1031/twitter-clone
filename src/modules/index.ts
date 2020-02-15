import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { timelineReducer } from './timeline';

export const createRootReducer = () =>
  combineReducers({
    timeline: timelineReducer
  });

const reducers = createRootReducer();

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
