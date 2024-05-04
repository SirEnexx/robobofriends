import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import {robobots} from './robobots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			// robobots: robobots,
			robobots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robobots:users}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredRobobots = this.state.robobots.filter(robobot => {
			return robobot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.robobots.length === 0) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1>RoboboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robobots={filteredRobobots} />
				</div>
			)
		}
	}
}

export default App;