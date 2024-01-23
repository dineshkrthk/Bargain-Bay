import React from 'react'
import Image from 'next/image'
import logo from './logo.jpg'

const page = () => {
  return (
    <div className='grid h-screen grid-cols-2'>
      <div className='container mx-auto flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row w-10/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden items-center justify-center'>
          
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-4xl mb-4">Login</h2>
            <p className="mb-4">
              Login to your account
            </p>
            <form action="#">
              <div className='grid gap-5'>
                <input type="text" placeholder='FirstName' className='border border-gray-400 py-1 px-2 w-full' />
                <input type="text" placeholder='LastName' className='border border-gray-400 py-1 px-2 w-full' />
              </div>
              <div className='mt-5'>
              <input type="password" placeholder='Password' className='border border-gray-400 py-1 px-2 w-full' />
              </div>
              
              <div className='mt-5'>
                <input type="checkbox" className='border border-gray-400' />
                <span>
                  I accept the terms and conditions
                </span>
              </div>
              <div className='mt-5'>
                <button className='w-full bg-orange-500 py-3 text-center text-white text-xl hover:bg-#ffb800'>Submit</button>
              </div>

              </form>
          </div>
        </div>
      </div>
      <div className='mx-auto my-auto grid place-items-center'  >
        <Image src={logo} alt="logo for it" ></Image>
      </div>
    </div>    
    
  )
}
// orange: #ff710d
// kesari #FF7722
// white #ffffff
// yellow #ffb800
export default page
