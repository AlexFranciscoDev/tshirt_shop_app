import React from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/tshirts'>Tshirts</NavLink></li>
            <li><NavLink to='/add-tshirt'>Add Tshirt</NavLink></li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
