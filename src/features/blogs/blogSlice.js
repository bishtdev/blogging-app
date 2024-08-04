import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    posts:[],
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers:{
        addpost: (state, action)=>{
            state.posts.push(action.payload)
        },
        
        editPost:(state, action) =>{
            const {id, title, content} = action.payload;
            const existingPost = state.posts.find(post => post.id === id)
            if (existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        },

        deletPost: (state, action) =>{
            const id = action.payload
            state.posts = state.posts.filter(post => post.id !== id)
        },

    }
})

export const {addpost, editPost, deletPost} = blogsSlice.actions
export default blogsSlice.reducer