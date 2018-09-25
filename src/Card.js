import React from 'react'

const Card = ({name, email, id }) => (
	<div className='tc bg-light-blue grow br3 pa3 ma3 dib bw2 shadow-5'>
		<img src={`https://robohash.org/${id}?bgset=bg1&set=set2&size=200x200`} alt='RoboPic'/>
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
)

export default Card
