//Action creator
//We use axios to make ajax requests
import axios from 'axios';
import { FETCH_USER } from './types';

//fetchUser is now an arrow function that uses an async function with dispatch as the argument
//we set res to an await api request
//and send it to the dispatch as FETCH_USER payload
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    
	dispatch({ type: FETCH_USER, payload: res.data });
};

//Refactored from:
// export const fetchUser = () => {
// 	return function(dispatch) {
// 		axios
// 			.get('/api/current_user')
// 			.then((res) => dispatch({ type: FETCH_USER, payload: res }));
// 	};
// };
