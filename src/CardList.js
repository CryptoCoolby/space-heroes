import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => (
	<Card id={`https://robohash.org/${robots[0].name}?bgset=bg1&set=set2&size=200x200`} name={robots[0].name} email={robots[0].email}/>
	<Card id={`https://robohash.org/${robots[1].name}?bgset=bg1&set=set2&size=200x200`} name={robots[1].name} email={robots[1].email}/>
	<Card id={`https://robohash.org/${robots[2].name}?bgset=bg1&set=set2&size=200x200`} name={robots[2].name} email={robots[2].email}/>
)

export default CardList
