import React from 'react';
import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const FunctionalThings = (props) => {
  return (
    <>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
      <h3>hello team toppers</h3>
    </>
  )
}
 
export default FunctionalThings