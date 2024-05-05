import React from 'react';
import Card from './Card';

const CardList = ({robobots}) => {
	return (
		<div>
			{
				robobots.map((user, i) => {
					return (
						<Card key={i} id={robobots[i].id} name={robobots[i].name} email={robobots[i].email} />
					)
				})
			}
		</div>
	)
}

export default CardList;