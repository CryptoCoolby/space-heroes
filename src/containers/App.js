import React, {Component} from 'react'
import { connect } from 'react-redux'
import ErrorBoundry from '../components/ErrorBoundry'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
// import Scroll from '../components/Scroll'
import robots from './robots'
import { setSearchfield } from '../actions'

const mapStateToProps = state => ({
	searchfield: state.searchfield
})

const mapDispatchToProps = dispatch => ({
	onSearchChange: event => dispatch(setSearchfield(event.target.value))
})

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots
		}
	}
	componentDidMount () {
		// console.log(this.props.store.getState())
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(res => res.json())
		// 	.then(users => {
		// 		this.setState({ robots: users })
		// 	})
	}
	render() {
		const { robots } = this.state
		const { searchfield, onSearchChange } = this.props
		const filteredRobots = robots
			.filter(robot => robot.name.toLowerCase()
				.includes(searchfield.toLowerCase())
			)
		return (
			<div className='tc'>
				<div className='spaceHeroes'>Space Heroes</div>
				<SearchBox searchChange={onSearchChange}/>
				<ErrorBoundry>
					{/* <Scroll> */}
						<CardList robots={filteredRobots} />
					{/* </Scroll> */}
				</ErrorBoundry>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
