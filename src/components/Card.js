import React from 'react';

const Card = (props) => {
	const {name,username,email, id} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
			<img alt='profile' src={'https://robohash.org/'+id+'?150*150'} height="200" width="230" />
			<div> 
				<h2> {name} </h2>
				<p> {username} </p>
				<p> {email} </p>
				<p> </p>
			</div>
		</div>
	)
}

export default Card;