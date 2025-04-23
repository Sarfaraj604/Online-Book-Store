import React from 'react'
import Footer from './Footer'
import { useAuth } from '../context/useAuth'

function Notification() {
  const { user } = useAuth()
  return (
    <div>
      <div className='flex flex-col gap-15 mt-25 items-center mb-100 justify-center'>
        <h1 className={`text-[#4B330B] font-bold text-5xl`}>Notifications for {user.email}</h1>
        <h3 className='font-light text-3xl'>No messages found.</h3>
        <img src="./Rectangle 48.png" alt="billy" className='w-84 h-60'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Notification
