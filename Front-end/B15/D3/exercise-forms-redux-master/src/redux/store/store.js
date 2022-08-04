import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myReducer from '../reducers/reducer';

const store = createStore(myReducer, composeWithDevTools());

export default store;
