import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
		const {robobots, searchfield} = this.state;
		const filteredRobobots = robobots.filter(robobot => {
			return robobot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if (!robobots.length) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1>RoboboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robobots={filteredRobobots} />
					</Scroll>
				</div>
			)
		}
	}
}

export default App;