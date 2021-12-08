/*
The Store is an object to hold the state of the application. The recommended middleware Redux Thunk will be used to write async logic that interacts with the store.
*/

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;