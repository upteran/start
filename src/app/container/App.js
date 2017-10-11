import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as pageActions from '../actions/pageActions.js'
import { Route, withRouter  } from 'react-router-dom';

class App extends Component {
	state = {
	}

	render(){
		return (
			<div>
				Hi, man
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))