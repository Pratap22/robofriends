import React, {Component} from 'react';
import CardLists from '../components/CardLists';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends Component {
	constructor(){
		super()
		this.state = {
		robot: [],
		searchfield: ''
	}
}

componentDidMount (){
	fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
	.then(users => this.setState({robot:users}))
	
}

onSearchChange = (event) => {
	this.setState({searchfield: event.target.value})
}
	render () {
		const {robot, searchfield} =this.state;
		const filteredRobots = robot.filter(robot =>robot.name.toLowerCase().includes(searchfield.toLowerCase()))
		return (
			<div className='tc'>
				<h1 className='f2'> Pratap's Robo Friends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
				<ErrorBoundary>
					<CardLists robot={filteredRobots} />
				</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default App;