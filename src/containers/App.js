import React, {Component} from 'react'
import { connect } from 'react-redux'
import ErrorBoundry from '../components/ErrorBoundry'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
// import Scroll from '../components/Scroll'
// import robots from './robots'
import { setSearchfield, requestRobots } from '../actions'

const mapStateToProps = ({ searchRobots, requestRobots }) => ({
	searchfield: searchRobots.searchfield,
	robots: requestRobots.robots,
	isPending: requestRobots.isPending,
	error: requestRobots.error
})

const mapDispatchToProps = dispatch => ({
	onSearchChange: event => dispatch(setSearchfield(event.target.value)),
	onRequestRobots: (	) => dispatch(requestRobots())
})

class App extends Component {

	componentDidMount () {
		this.props.onRequestRobots()
		// console.log(this.props.store.getState())
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(res => res.json())
		// 	.then(users => {
		// 		this.setState({ robots: users })
		// 	})
	}
	render() {
		const { searchfield, onSearchChange, robots, isPending, error } = this.props
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
						{isPending ?
						<h1>Loading</h1> :
						(error ? <h1>Ooops. Something went wrong!</h1> : <CardList robots={filteredRobots} />)
						}
					{/* </Scroll> */}
				</ErrorBoundry>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
