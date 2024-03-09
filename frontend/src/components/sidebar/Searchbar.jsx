import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
const Searchbar = () => {
  return (
    <form className='flex items-center gap-2 justify-center'>
      <input type="text" placeholder='Search..' className="input input-bordered rounded-full" />
      <button className="btn btn-circle bg-sky-500 text-white">
      <FaMagnifyingGlass />
      </button>
    </form>
  )
}

export default Searchbar
