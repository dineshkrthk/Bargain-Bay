import React from 'react'
import Header from './Header'
import Footer from './Footer'

const index = ({children}:any) => {
  return (
    <div className='max-w-[2200px] mx-auto'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default index