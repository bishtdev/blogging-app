import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addpost } from "../features/blogs/blogSlice";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addpost({id: uuidv4(), title, content}))
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 h-48 bg-[#b29861] p-3 rounded-sm">
      <input
        className="p-1 rounded-md bg-[#b29861] placeholder:text-black border border-black outline-none"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <textarea
        className="p-1 rounded-md h-28 bg-[#b29861] placeholder:text-black border border-black outline-none resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
      ></textarea>
      <button type="submit" className="py-1 bg-[#e1d4a2] rounded-sm hover:bg-[#e1d4a2]"> Add Post</button>
    </form>
  );
};

export default CreatePost;
