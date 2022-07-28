import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Styles/Navbar.module.css'

function Navbar() {

  return (
    <nav className={classes.nav}>
        <Link to='/'>BlogPost!</Link >
        <ul>
            <li>
                <Link to='/login' activeClassName="active">LogIn</Link>
            </li>
            <li>
                <Link to='/feeds' activeClassName="active">Feeds</Link>
            </li>
            <li>
                <Link to='/login' activeClassName="active">Logout</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar