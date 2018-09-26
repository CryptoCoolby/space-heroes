import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value })
	}
	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users => {
				this.setState({ robots: users })
			})
	}
	render() {
		const {robots, searchfield} = this.state
		const filteredRobots = robots
			.filter(robot => robot.name.toLowerCase()
				.includes(searchfield.toLowerCase())
			)
		return filteredRobots.length === 0
		? (
			<div className='tc'>
				<div className='spaceHeroes'>Space Heroes</div>
				<SearchBox searchChange={this.onSearchChange}/>
				<div className='f4'><strong>There is no such Hero</strong></div>
			</div>
		) : (
			<div className='tc'>
				<div className='spaceHeroes'>Space Heroes</div>
				<SearchBox searchChange={this.onSearchChange}/>
				{/* <Scroll> */}
					<CardList robots={filteredRobots} />
				{/* </Scroll> */}
			</div>
		)
	}
}

export default App
