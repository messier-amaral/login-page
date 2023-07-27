'use client'

import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import React, { useState } from 'react';

import  { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <main className="h-screen flex flex-col justify-center items-end bg-alice-blue bg-wallpaper-login-desktop bg-no-repeat bg-left bg-cover">
      
      <form className='flex flex-col pr-40'>
        <h1 className='font-emphasis text-5xl text-midnight-green text-center mb-14 '>Login</h1>

        <label htmlFor="email" className='font-primary font-bold text-midnight-green mt-6 mb-1.5'>Email</label>
        <input type="email" name="email" id="email" className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-midnight-green p-5' />

        <label htmlFor="password" className='font-primary font-bold text-midnight-green mt-6 mb-1.5'>Password</label>

        <div className='relative'>
          <input 
            type={showPassword ? "text" : "password"}
            name="password" 
            id="password" 
            className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-midnight-green p-5 pr-12' />
            
          <button type="button" onClick={handleTogglePassword} className='absolute right-3 top-1/2 transform -translate-y-1/2 font-primary font-bold text-midnight-green'>
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>

        <Link href='#' className='font-emphasis text-keppel hover:underline'>Forgot login or password?</Link>

        <button type="submit" className='w-[400px] h-[50px] rounded-[25px] bg-midnight-green text-alice-blue font-emphasis text-2xl mt-5 hover:bg-rich-black hover:scale-105 duration-1000'>Login</button>
      </form>

      <div className='flex flex-row pr-40 items-center my-[15px]'>
        <div className='h-[2px] w-[135px] bg-keppel mr-[15px]'></div>
        <p className='font-emphasis text-keppel'>or login with</p>
        <div className='h-[2px] w-[135px] bg-keppel ml-[15px]'></div>
      </div>
      <div className='flex flex-col justify-center w-[400px] mr-40 items-center'>
        <button type="button" className=''>
          <FcGoogle className='w-[50px] h-[50px] p-[8px] shadow-google rounded-full hover:bg-[#E8F0F6] duration-300' />
        </button>
        <Link href='/sign-up' className='mt-[8px] font-emphasis text-pigment-green hover:underline'>Don&apos;t have account? Sign up</Link>
      </div>
    </main>
  )
}
