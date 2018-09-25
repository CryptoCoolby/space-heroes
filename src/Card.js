import React from 'react'

const Card = ({name, email, id }) => (
	<div className='tc bg-light-blue grow br3 pa3 ma3 dib bw2 shadow-5'>
		<img src={id} alt='RoboPic'/>
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
)

export default Card
