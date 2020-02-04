import React from 'react'
import Card from './Card'

const CardList =({robots})=>{ // destructured, see card.js for details off how



	return (
	<div>
	{
		robots.map((user,i) => {
		return (<Card 
		key ={robots[i].id} // not recomended to use i as it can change, see here for generating unique keys  https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements/51428373
		id={robots[i].id} 
		name={robots[i].name} 
		email= {robots[i].email}
		/>
		)
	})
	}
</div>
);

}

export default CardList;