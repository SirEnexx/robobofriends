import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robobots} from './robobots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robobots: robobots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		const filteredRobobots = this.state.robobots.filter(robobot => {
			return robobots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log(event.target.value)
	}

	render() {
		return (
			<div className='tc'>
				<h1>RoboboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robobots={this.state.robobots} />
			</div>
		)
	}
}

export default App;