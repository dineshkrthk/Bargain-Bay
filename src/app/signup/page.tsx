import React from 'react'
import Image from 'next/image'
import logo from './logo2.jpg'


const page = () => {
  return (
    <section className=' bg-white min-h-screen py-30 flex items-center justify-center'>
    <div className='bg-gradient-to-r from-orange-40 to-orange-90 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
     
      <div className='md:w-1/2 p-3'>
      
            <h2  className="text-4xl  text-center font-family: 'Poppins', sans-serif;">SignUp</h2>
            <p className=" text-center text-sm mt-1">
              create your account
            </p>
            <form action="#" className='flex flex-col gap-4 mt-6 p-2'>
              <div className='grid gap-4'>
                <input type="text" placeholder='FirstName' className='border border-gray-400 py-1 px-2 w-full rounded-xl' />
                <input type="text" placeholder='LastName' className='border border-gray-400 py-1 px-2 w-full rounded-xl' />
              </div>
              <div className='mt-2 relative'>
              <input type="password" placeholder='Password' className='border border-gray-400 py-1 px-2 w-full rounded-xl' />
              <svg className="icon absolute top-1/3 right-3" viewBox="0 0 32 32" stroke-linecap="round">
        <path d="M4,16 C9,28 23,28 28,16" stroke-width="3" />
        <path d="M4,16 C9,4 23,4 28,16" stroke-width="3" />
        <circle cx="16" cy="16" r="4.5" stroke-width="5" />
      </svg>
              </div>
              <div className='mt-2 relative'> 
              <input type="password" placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full rounded-xl' />
              <svg className="icon absolute top-1/3 right-3" viewBox="0 0 32 32" stroke-linecap="round">
        <path d="M4,16 C9,28 23,28 28,16" stroke-width="3" />
        <path d="M4,16 C9,4 23,4 28,16" stroke-width="3" />
        <circle cx="16" cy="16" r="4.5" stroke-width="5" />
      </svg>
              </div>             
              
              <div className='mt-2'>
                <input type="checkbox" className='border border-gray-400' />
                <span className='px-2'>
                  I accept the terms and conditions
                </span>
              </div>
              <div className='mt-3 mb-0'>
                <button className=' rounded-xl w-full bg-orange-500 py-3 text-center text-white text-xl hover:bg-#ffb800 hover:scale-100 duration-300'>SignUp</button>
              </div>
              </form>

              <div className='mt-5 grid grid-cols-3 items-center text-gray-500'>
               <hr className='border-gray-500'/>
               <p className='text-center'>OR</p>
               <hr className='border-gray-500'/>
              </div>
              <button className='bg-white border  py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-100 duration-300'>
              <svg viewBox="0 0 48 48" className='w-5 h-5 mr-3'>
              <title>Google Logo</title>
              <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
              </clipPath>
              <g className="colors" clip-path="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
              </g>
              </svg>Login with Google</button>
              {/* <p className='mt-2 text-sm border-b border-gray-400 py-2'>Forgot your password</p> */}
              <div className='mt-2 text-xs flex justify-between items-center'>
                <p >Already have an account?</p>
                <button className='py-2 px-5 bg-white border rounded-xl hover:scale-100 duration-300'>Login</button>
              </div>
              
        
       </div>

      <div className='md:block hidden w-1/2'>
      <Image src={logo} alt="logo for it" className='rounded 2xl'></Image>
      </div>
    </div>  
    </section>
  )
}
// orange: #ff710d
// kesari #FF7722
// white #ffffff
// yellow #ffb800
export default page