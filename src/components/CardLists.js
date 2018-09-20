import React from 'react';
import Card from './Card.js'


const CardLists = ({robot}) => {
	return (
		<div> 
			 {
			 	robot.map((user, i) => {
					return (<Card 
					key={i} 
					id={robot[i].id} 
					name={robot[i].name} 
					username={robot[i].username} 
					email={robot[i].email} 
				/>)
				})
			 }
	 	</div>
	)
}
export default CardLists;