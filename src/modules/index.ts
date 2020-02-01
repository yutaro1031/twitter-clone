import { combineReducers, createStore } from 'redux';
import { timelineReducer } from './timeline';

export const createRootReducer = () =>
  combineReducers({
    timeline: timelineReducer
  });

const reducers = createRootReducer();

export const store = createStore(reducers);

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
