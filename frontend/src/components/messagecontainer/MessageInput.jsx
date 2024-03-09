import React from 'react'
import { BsSend } from "react-icons/bs";
const MessageInput = () => {

  return (

    <form className='px-4 my-2'>
      <div className='w-full  relative'>
        <input type="text" placeholder='Message' className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' />
        <button className='absolute z-20 flex items-center pe-3 inset-y-0 end-0'><BsSend className=''/></button>
      </div>
    </form>
  )
}



export default MessageInput