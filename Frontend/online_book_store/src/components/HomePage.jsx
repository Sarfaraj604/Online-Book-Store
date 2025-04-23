import React from 'react'
import Middle from './Middle';
import Lower from './Lower';
import Footer from './Footer';
import BookSection from './BookSection';

function HomePage() {
  return (
    <div className='flex flex-col gap-0'>
      <Middle/>
      <BookSection/>
      <Lower/>
      <Footer/>
    </div>
  )
}

export default HomePage
