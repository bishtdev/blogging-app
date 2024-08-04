import './App.css'
import BlogList from './components/BlogList'
import CreatePost from './components/CreatePost'

function App() {
  

  return (
   <div className='App'>
    <h1> Blog Platform</h1>
    <CreatePost/>
    <BlogList/>
   </div>
  )
}

export default App
