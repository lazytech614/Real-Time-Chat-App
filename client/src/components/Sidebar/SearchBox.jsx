import React from 'react'
// import 'remixicon/fonts/remixicon.css'
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div>
        <form action="" className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
            {/* <img src="search-line.svg" alt="" /> */}
            <button className='bg-blue-600 rounded-full flex items-center justify-center p-2'>
                <IoIosSearch className='h-6 w-6 outline-none'/>
            </button>
        </form>
    </div>
  )
}

export default SearchBox