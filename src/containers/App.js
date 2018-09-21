import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardLists from '../components/CardLists';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor(){
		super()
		this.state = {
		robot: []
	}
}

componentDidMount (){
	fetch('').then(response => response.json())
	.then(users => this.setState({robot:users}))
	
}

	render () {
		const {robot} = this.state;
		const { searchField, onSearchChange} = this.props;
		const filteredRobots = robot.filter(robot =>robot.name.toLowerCase().includes(searchField.toLowerCase()))
		return (
			<div className='tc'>
				<h1 className='f2'> Team Tourist Exchange </h1>
				<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardLists robot={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);