import React from 'react'

const SearchBox = ({ searchChange }) => (
	<div className='pt4 pb4 searchBox'>
		<input
			className='pa3 ba b--green bg-lightest-blue shadow-5'
			type='search'
			placeholder='Find Hero..'
			onChange={searchChange}
		/>
	</div>
)

export default SearchBox
