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
    <main className="h-screen flex flex-col justify-center items-center bg-alice-blue dark:bg-rich-black-dark bg-wallpaper-login-mobile bg-no-repeat bg-left bg-cover xl:bg-wallpaper-login-desktop xl:bg-left xl:items-end">
      
      <form className='flex flex-col xl:pr-40'>
        <h1 className='font-emphasis text-5xl text-midnight-green dark:text-alice-blue text-center mb-14 '>Login</h1>

        <label htmlFor="email" className='font-primary font-bold text-midnight-green dark:text-alice-blue mt-6 mb-1.5'>Email</label>
        <input type="email" name="email" id="email" className='w-[350px] xl:w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-midnight-green dark:border-alice-blue p-5' />

        <label htmlFor="password" className='font-primary font-bold text-midnight-green dark:text-alice-blue mt-6 mb-1.5'>Password</label>

        <div className='relative'>
          <input 
            type={showPassword ? "text" : "password"}
            name="password" 
            id="password" 
            className='w-[350px] xl:w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-midnight-green dark:border-alice-blue p-5 pr-12' />
            
          <button type="button" onClick={handleTogglePassword} className='absolute right-3 top-1/2 transform -translate-y-1/2 font-primary font-bold text-alice-blue xl:text-midnight-green xl:dark:text-alice-blue'>
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>

        <Link href='/forgot-password' className='font-emphasis text-keppel hover:underline'>Forgot login or password?</Link>

        <button type="submit" className='w-[350px] xl:w-[400px] h-[50px] rounded-[25px] bg-midnight-green dark:bg-alice-blue text-alice-blue dark:text-midnight-green font-emphasis text-2xl mt-5 hover:bg-rich-black-light dark:hover:text-alice-blue hover:scale-105 duration-1000'>Login</button>
      </form>

      <div className='flex flex-row xl:pr-40 items-center my-[15px]'>
        <div className='h-[2px] w-[110px] xl:w-[135px] bg-keppel mr-[15px]'></div>
        <p className='font-emphasis text-keppel'>or login with</p>
        <div className='h-[2px] w-[110px] xl:w-[135px] bg-keppel ml-[15px]'></div>
      </div>
      <div className='flex flex-col justify-center w-[400px] xl:mr-40 items-center'>
        <button type="button" className=''>
          <FcGoogle className='w-[50px] h-[50px] p-[8px] shadow-google rounded-full bg-alice-blue hover:bg-[#E8F0F6] duration-300' />
        </button>
        <Link href='/sign-up' className='mt-[8px] font-emphasis text-midnight-green xl:text-pigment-green hover:underline'>Don&apos;t have account? Sign up</Link>
      </div>
    </main>
  )
}
