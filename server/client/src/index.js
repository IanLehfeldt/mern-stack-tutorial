//Materialize CSS
//Dont need variable from statement
import 'materialize-css/dist/css/materialize.min.css'

//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//App
import App from './components/App';
import reducers from './reducers';

//Redux Store / Reducer
const store = createStore(reducers, {}, applyMiddleware());

//We wrap the App.js in Redux's Provider to handle our
//Data Store from Redux
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
