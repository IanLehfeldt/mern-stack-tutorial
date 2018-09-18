//Second index.js
//For Reducers
import { combineReducers } from 'redux';
import authReducer from './authReducers';

export default combineReducers({
	auth: authReducer
});
            