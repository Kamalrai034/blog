import React,{ useContext } from 'react'
import classes from './Styles/LogIn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {Storage} from './Storage'
function LogIn() {

  const detail = useContext(Storage)
  return (
    <div className={classes.login}>
      <div>
        <img className={classes.image} src='https://media.istockphoto.com/photos/human-figure-icon-graphic-as-user-login-button-on-white-keyboard-picture-id1226883131?b=1&k=20&m=1226883131&s=170667a&w=0&h=FMYb1DFOYbcb2vmbzZhq71k-4cuarJ1U4xCBWjGnze8=' alt=''/>
      </div>
      <div className={classes.content}>
        <div className={classes.loginlogo}>
        <span>SIGN In</span>
        <FontAwesomeIcon icon={faLock} className={classes.lock} />
        </div>
        <form className={classes.form} onSubmit={detail.aboutUser}>
            <label>Email:</label>
            <input onChange={detail.inputUser}/>
            <label type='password'>Password:</label>
            <input />
            <button type='submit'>SIGN IN</button>
        </form>
      </div>  
    </div>
  )
}

export default LogIn