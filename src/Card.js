import React,{Component} from 'react'
const Card =({name,email,id} )=>{ // could even destructre at a props  level. so replace props with {name,email,id} 
//meaning we don't have to declare the =props as they are automatciall declared ass props
	//const {name,email,id} = props;// destructuring - props doesn't ahve to be wrtten each time then below
  return (
  	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  	<img  alt='photo' src={`https://robohash.org/${id}?200x200`}/> 
  	  <div>
  	   <h2>{name}</h2>
  	   <p>{email}</p>
  	  </div>
  	</div>
   )
}

export default Card