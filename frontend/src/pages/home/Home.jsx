import React from 'react'
import MessageContainer from '../../components/messagecontainer/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg backdrop-filter backdrop-blur-lg bg-clip-padding bg-opacity-0 bg-gray-400 overflow-hidden'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
