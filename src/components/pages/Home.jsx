import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Welcome to the tshirt shop</h1>
      <p>Here you will find a plenty variaty of clothes</p>
      <Link to='/tshirts' className="button">Check it out!</Link>
    </div>
  )
}
