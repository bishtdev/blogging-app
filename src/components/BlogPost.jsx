import React from 'react'
import { useDispatch } from 'react-redux'
import { deletPost } from '../features/blogs/blogSlice'
import EditPost from './EditPost'

const BlogPost = ({post}) => {

    const dispatch = useDispatch()

    const handleDelete = () =>{
        dispatch(deletPost(post.id))
    }

  return (
    <div>
        <h2> {post.title}</h2>
        <p> {post.content}</p>
        <button onClick={handleDelete}> Delete</button>
        <EditPost post={post}/>
    </div>
  )
}

export default BlogPost