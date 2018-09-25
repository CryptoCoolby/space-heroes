import React from 'react'

const SearchBox = ({ searchChange }) => (
	<div className=''>
		<input
			className='pa3 ba b--green bg-lightest-blue shadow-5'
			type='search'
			placeholder='Search robots..'
			onChange={searchChange}
		/>
	</div>
)

export default SearchBox
