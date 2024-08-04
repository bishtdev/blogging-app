import React from 'react'
import {useSelector} from 'react-redux'
import BlogPost from './BlogPost'

const BlogList = () => {
    const posts = useSelector((state) => state.blogs.posts)
  return (
    <div>
        {posts.map((post)=>(
            <BlogPost key={post.id} post={post} />
        ))}
    </div>
  )
}

export default BlogList