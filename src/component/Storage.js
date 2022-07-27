import React, { useState } from 'react'
 export const Storage = React.createContext()

export function Post(props) {
    const [title,setTitle]= useState('')
    const [category,setCategory]= useState('')
    const [content,setContent]= useState('')
    const [post,setPost]= useState([{user:'user1', title:'mybg',category:'just',content:'Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.' ,like:0, comment:[{user1:'comm1'},{user2:'comm2'}], showcomm:false,liked:{curruser:0}},{user:'user2', title:'myblog',category:'just',content:'Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.',like:0,comment:[{user1:'comm22'},{user2:'comm24'}],showcomm:false,liked:{}}])
    const [renderfeed,setRenderfeed] = useState(false)
    const [edit,setEdit] = useState(false)
    const [editIndex,setEditIndex] = useState('')
    const [modal,setModal] = useState(false)
    const [currcomment,setCurrComment] = useState('')
    // const [li,setLi] = useState(false)

    const addLike = (val)=>{
        let index = post.indexOf(val)
        let arr = [...post]
        if(arr[index].liked.curruser===1){
        arr[index].like -= 1
        arr[index].liked.curruser = 0
        }
        else if(arr[index].liked.curruser===0){
        arr[index].like += 1
        arr[index].liked.curruser = 1
        }
        setPost(arr)
    }

    const addComment = (val)=>{
        let index = post.indexOf(val)
        let arr = [...post]
        arr[index].comment = [{curruser:currcomment},...arr[index].comment]
        setPost(arr)
    }

    const newComment =(val,event)=>{
        setCurrComment(event.target.value)
    }

    const commentopener =(val)=>{
        let index = post.indexOf(val)
        let arr = [...post]
        if(arr[index].showcomm)
        arr[index].showcomm = false
        else
        arr[index].showcomm = true
        setPost(arr)
    }
    const closeModal = (event) =>{
        setModal(false)
    }
    const openModal = ()=>{
        setModal(true)
    }
    const addPost = (event)=>{
        event.preventDefault()
        // alert('post')
        var currentPost = {
            title:title,
            category:category,
            content:content,
            like:0,
            comment:[],
            showcomm:false,
            liked:{curruser:0}
        }
        // var arr = [...post,currentPost]
        if(edit){
            let arr = [...post]
            arr.splice(editIndex,1,currentPost) 
            setPost(arr)
        setTitle('')
        setCategory('')
        setContent('')
        setRenderfeed(true)
        setModal(false)
        }
        else{
        setPost(prePost => [currentPost,...prePost])
        setTitle('')
        setCategory('')
        setContent('')
        setRenderfeed(true)
        setModal(false)
        }
    }
    const delPost = (val)=>{
        // alert('del')
        let index = post.indexOf(val)
        let arr = [...post]
        arr.splice(index,1);
        setPost(arr)
    }
    const editPost = (val)=>{
        // alert('edit')
        setModal(true)
        setTitle(val.title)
        setCategory(val.category)
        setContent(val.content)
        let index = post.indexOf(val)
        setEdit(true)
        setEditIndex(index)
        // let arr = [...post]
    }
  return (
    <>
    <Storage.Provider value={{addPost:addPost,
        newtitle:(event)=>setTitle(event.target.value),
        newcategory:(event)=>setCategory(event.target.value),
        newcontent:(event)=>setContent(event.target.value), 
        title:title,
        category:category,
        content:content,
        renderfeed:renderfeed,
        post:post,
        modal:modal,
        closeModal:closeModal,
        openModal:openModal,
        editPost:editPost,
        delPost:delPost,
        commentopener:commentopener,
        newComment:newComment,
        addComment:addComment,
        addLike:addLike,}}>
        {props.children}
    </Storage.Provider>
    </>
  )
}