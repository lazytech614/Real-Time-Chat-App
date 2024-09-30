import React from 'react'
import SearchBox from './SearchBox'
import Footer from './Footer'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchBox />
      <Conversations />
      <Footer />
    </div>
  )
}

export default Sidebar