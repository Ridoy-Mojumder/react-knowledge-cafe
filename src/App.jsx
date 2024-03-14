
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  const[bookmarks,setBookmarks]=useState([]);

  const[spentTime,setSpentTime]=useState(0);

  const handleBookmarks = blog =>{
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark);
  }


  const handleSendTime = time =>{
    const newSpentTime = spentTime + time;
    setSpentTime(newSpentTime);
  }

  return (
    <>
     <Header></Header>
     <div className='flex mx-8'>
        <div className='w-2/3 '>
          <Blogs handleBookmarks={handleBookmarks} handleSendTime={handleSendTime}></Blogs>
        </div>
        <div className='w-1/3 0'>
          <Bookmarks bookmarks={bookmarks} spentTime={spentTime} ></Bookmarks>
        </div>
     </div>
    </>
  )
}

export default App
