'use client'
import React, { useState } from 'react'
import Link from 'next/link';

import { FcGoogle } from 'react-icons/fc'
import  { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    
    return (
        <main className='h-screen flex flex-col justify-center items-end bg-alice-blue bg-wallpaper-signup-desktop bg-no-repeat bg-left bg-cover'>
            <form className='flex flex-col pr-40'>
                <h1 className='font-emphasis text-5xl text-bondi-blue text-center mb-14'>Sign up</h1>

                <label htmlFor="username" className='font-primary font-bold text-bondi-blue mt-6 mb-1.5'>Username</label>
                <input type="text" name="username" id="username" className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-bondi-blue p-5' />

                <label htmlFor="email" className='font-primary font-bold text-bondi-blue mt-6 mb-1.5'>Email</label>
                <input type="email" name="email" id="email" className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-bondi-blue p-5' />

                <label htmlFor="password" className='font-primary font-bold text-bondi-blue mt-6 mb-1.5' >Password</label>

                <div className='relative'>
                    <input 
                        type={showPassword ? "text" : "password"}
                        name="password" 
                        id="password"
                        className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-bondi-blue p-5 pr-12' />
                        <button type="button" onClick={handleTogglePassword} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-bondi-blue'>
                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </button>
                </div>
                <button type="submit" className='w-[400px] h-[50px] rounded-[25px] bg-bondi-blue text-alice-blue font-emphasis text-2xl mt-5 hover:bg-cerulean hover:scale-105 duration-1000'>Sign up</button>
            </form>

            <div className='flex flex-row pr-40 items-center my-[15px]'>
                <div className='h-[2px] w-[135px] bg-bondi-blue mr-[15px]'></div>
                <p className='font-emphasis text-bondi-blue'>or login with</p>
                <div className='h-[2px] w-[135px] bg-bondi-blue ml-[15px]'></div>
            </div>
            <div className='flex flex-col justify-center w-[400px] mr-40 items-center'>
                <button type="button">
                    <FcGoogle className='w-[50px] h-[50px] p-[8px] shadow-google rounded-full hover:bg-[#E8F0F6] duration-300' />
                </button>
                <Link href='/' className='mt-[8px] font-emphasis text-bondi-blue hover:underline'>Already have an account? Log in.</Link>
            </div>

        </main>
    )
}