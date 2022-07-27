import React, { useContext } from 'react'
import CreateModal from './CreateModal'
import classes from './Styles/Create.module.css'
import { Storage } from './Storage'

function Create() {
  const detail = useContext(Storage)
  return (
    <div className={classes.create}>
        {detail.modal &&  <CreateModal />}
        {!detail.modal &&  <button onClick={detail.openModal}>Create Your Blog</button>}
    </div>
  )
}

export default Create