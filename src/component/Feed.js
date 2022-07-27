import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import classes from './Styles/Feed.module.css'
import { Storage } from './Storage'
import CreateModal from './CreateModal'

function Feed() {
  const detail = useContext(Storage)
  const modalHandler = (val)=>{
    detail.editPost(val)
  }
  return (
    <div>
      {detail.modal &&  <CreateModal />}
      {detail.post.map((item)=>
       <div className={classes.feedItem}>
       <h2>Title:{item.title}</h2>
       <div className={classes.delEdit}> 
       <h4>category:{item.category}</h4>
       <span>
        <button onClick={()=>modalHandler(item)}>Edit</button> 
        <button onClick={()=>detail.delPost(item)}>delete</button>
        </span>
        </div>
       <hr />
       <p>{item.content}</p>
       <hr />
       <div className={classes.like_comment}>
           <p><FontAwesomeIcon icon={faHeart} className={`${classes.icons}  ${item.liked.curruser && classes.active}`}  onClick={()=>detail.addLike(item)}/><span>{item.like}</span></p>
           <p><FontAwesomeIcon icon={faComment} className={classes.icons}
           onClick={()=>detail.commentopener(item)} /><span>{item.comment.length}</span></p>
       </div>
       {item.showcomm && <div className={classes.showcomments}>
       <div className={classes.comment}>
        <textarea onChange={(event)=>detail.newComment(item,event)}></textarea>
        <button onClick={()=>detail.addComment(item)}>Reply</button>
       </div>
       <div className={classes.parentcomment}>

       {item.comment.map((item1,key)=>
       <div className={classes.allcommentItem}>
        {Object.keys(item1).map((it)=><><span>{it}</span><span>{item1[it]}</span></>)}
        <button>delete</button>
        </div>)}

       </div>

    </div>}

       </div>

      )}
      {/* {console.log(detail.post)} */}
    </div>
  )
}

export default Feed