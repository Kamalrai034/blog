import React, { useState } from 'react'
import classes from './Styles/Navbar.module.css'

function Navbar() {
    const [activeclass,setActiveclass] = useState('Login')

  return (
    <nav className={classes.nav}>
        <a>BlogPost!</a>
        <ul>
            <li>
                <a activeClassName="active">LogIn</a>
            </li>
            <li>
                <a activeClassName="active">Feeds</a>
            </li>
            <li>
                <a activeClassName="active">Logout</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar