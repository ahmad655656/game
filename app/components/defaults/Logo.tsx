import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className='text-xl my-2 lg:text-2xl flex gap-2'>
        <h1 className=' text-rose-500 '>Gaming</h1>
        <span className='text-white'>Boi</span>
    </Link>
  )
}

export default Logo