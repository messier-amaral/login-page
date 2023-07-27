'use client'
import React, { useState } from 'react'

// Icons
import  { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import  { BiSolidSend } from 'react-icons/bi'

export default function ForgotPassword() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <main className='h-screen flex flex-col justify-center items-end bg-alice-blue bg-wallpaper-forgotpassword-desktop bg-no-repeat bg-left bg-cover'>
            <form className='flex flex-col pr-40'>
                <h1 className='font-emphasis text-5xl text-bondi-blue text-center mb-14'>Recover Password</h1>
                
                <label htmlFor="email" className='font-primary font-bold text-bondi-blue mt-6 mb-1.5'>Email</label>
                <input type="email" name="email" id="email" className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-bondi-blue p-5' />

                <label htmlFor="code" className='font-primary font-bold text-bondi-blue mt-6 mb-1.5'>Email Code</label>
                <div className='relative'>
                    <input type="text" name="code" id="code" className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-bondi-blue p-5' />
                    <button type="button" className='absolute right-3 top-1/2 transform -translate-y-1/2 text-bondi-blue'>
                        <BiSolidSend />
                    </button>
                </div>

                <label htmlFor="newpassword" className='font-primary font-bold text-bondi-blue mt-6 mb-1.5'>New Password</label>
                <div className='relative'>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="newpassword"
                        id="newpassword" className='w-[400px] h-[50px] rounded-[20px] bg-transparent border-2 border-bondi-blue p-5' />
                    <button type="button"  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-bondi-blue'>
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                </div>

                <button type="submit" className='w-[400px] h-[50px] rounded-[25px] bg-bondi-blue text-alice-blue font-emphasis text-2xl mt-5 hover:bg-cerulean hover:scale-105 duration-1000'>Set new password</button>
            </form>
        </main>
    )
}