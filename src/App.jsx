import './App.css'
import BlogList from './components/BlogList'
import CreatePost from './components/CreatePost'

function App() {
  

  return (
   <div className='flex flex-col items-center'>
    <h1 className='font-bold text-5xl text-[#cab682]'> Blog Platform</h1>
    <CreatePost/>
    <BlogList/>
   </div>
  )
}

export default App
