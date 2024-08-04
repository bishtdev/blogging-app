import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPost } from '../features/blogs/blogSlice'

const EditPost = ({post}) => {
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(editPost({id: post.id, title, content}))
    }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit"> Save Changes </button>
    </form>
  )
}

export default EditPost