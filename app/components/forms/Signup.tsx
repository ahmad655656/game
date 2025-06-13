'use client' // يشير إلى أن هذا المكون يستخدم في جانب العميل (Client-side)

import React from 'react' // استيراد مكتبة React
import { Button } from '@/components/ui/button' // استيراد مكون Button من مكتبة الواجهة
import MotionItem from '../defaults/MotionItem' // استيراد مكون MotionItem
import MaxWidthWrapper from '../defaults/MaxWidthWrapper' // استيراد مكون MaxWidthWrapper
import Logo from '../defaults/Logo' // استيراد مكون Logo
import Link from 'next/link' // استيراد مكون Link من مكتبة Next.js
import { FileUploadDemo } from '../FileUpload'
import InputForm from '../InputForm'
const Signup = () => {
  return (
    <MotionItem initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}> {/* تأثير الحركة عند التحميل */}
      <MaxWidthWrapper noPadding={true} className='flex flex-col items-center gap-4 bg-black/60 rounded-2xl border border-input '>
           <div className="w-full max-w-lg p-4 m-auto mx-auto rounded-lg shadow-md">
    <div className="flex justify-center mx-auto">
        <Logo />
    </div>

    <form className="mt-4">
        <div>
            <InputForm labelInput={'User_Name'} name={'UserName'} type={'text'} />
        </div>
         <div className="mt-3">
            <InputForm labelInput={'Email'} name={'Email'} type={'text'} />
        </div>
        <div className="mt-3">
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-white/70 dark:text-gray-200">Password</label>
                <a href="#" className="text-xs text-white/70 dark:text-gray-400 hover:underline">Forget Password?</a>
            </div>

            <input type="password" placeholder='Password' className="block w-full border-b-white/70 border-b-[1px] px-4 py-2 mt-2 text-white bg-transparent rounded-sm focus:outline-none" />
        </div>
        <div className="mt-3">
            <InputForm labelInput={'Confirm_Password'} name={'ConfirmPassword'} type={'password'} />
        </div>
        <div className="mt-4">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white/70 capitalize transition-colors duration-300 transform bg-rose-500 rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Create Account
            </button>
        </div>
    </form>

    <div className="flex items-center justify-between mt-3">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5" />

        <a href="#" className="text-xs text-center text-white/70 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5" />
    </div>

    <div className="flex items-center mt-4 -mx-2">
        <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign up with Google</span>
        </button>

        <a href="#" className="p-2 mx-2 text-sm font-medium text-white/70 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                </path>
            </svg>
        </a>
    </div>

    <p className="mt-8 text-xs font-light text-center text-white/70"> Are you have an account? <a href="/login" className="font-medium text-rose-500 dark:text-gray-200 hover:underline">Log In</a></p>
</div>
      </MaxWidthWrapper>
    </MotionItem>
  )
}

export default Signup // تصدير مكون Login
