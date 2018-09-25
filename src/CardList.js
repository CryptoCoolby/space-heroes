import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => (
	<div className='tc'>
		{
			robots.map(({id, email, name}) => {
				return (
					<Card
						key={id}
						id={id}
						name={name}
						email={email}
					/>
				)
			})
		}
	</div>
)

export default CardList
