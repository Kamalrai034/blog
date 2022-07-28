import React, { useContext } from 'react'
import classes from './Styles/CreateModal.module.css'
import { Storage } from './Storage'

function CreateModal(props) {
    const gotit = useContext(Storage)
  return (
    <>
    <div className={classes.overlay}></div>
    <div className={classes.modal}>
        <p>
            <span>Blog!</span>
            <span className={classes.close} onClick={gotit.closeModal}>&times;</span>
        </p>
        <form onSubmit={gotit.addPost}>
        <input placeholder='title' value={gotit.title} onChange={gotit.newtitle}/>
        <input placeholder='category' value={gotit.category} onChange={gotit.newcategory}/>
        <textarea value={gotit.content} onChange={gotit.newcontent}></textarea>
        <button type='submit'>Post</button>
        </form>
        <div></div>
    </div>
    </>
  )
}

export default CreateModal