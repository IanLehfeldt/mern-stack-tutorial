import React, { Component } from 'react';
//Router Handlers
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
//Redux and action handlers
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;

const SurveyNew = () => <h2>SurveyNew</h2>;

//Changed App from an active Component to a 
//Class to handle user data
class App extends Component {
	//Component loads
	componentDidMount () {
		this.props.fetchUser();
	}
	//Component renders this:
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
