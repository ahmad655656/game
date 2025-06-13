import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { MdDashboard, MdGames } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import NavLink from './NavLink'
import Logo from '../defaults/Logo'
import { MenuSquare } from 'lucide-react'
import ButtonGame from '../defaults/ButtonGame'
const Nav_Links = [
    {
        label: 'Home',
        url: '/',
        icon: <GoHomeFill />
    },
    {
        label: 'Category',
        url: '/category',
        icon: <MdDashboard />
    },
     {
        label: 'Games',
        url: '/games',
        icon: <MdGames />
    },
    {
        label: 'WishList',
        url: '/wishList',
        icon: <FaHeart />
    },
    {
        label: 'Friends',
        url: '/friends',
        icon: <BsFillPeopleFill />
    },
]
const SidBar = () => {
  return (
    <div className='h-screen sticky top-0 col-span-2'>
       <div className='py-5 inset-0 px-10 gap-3 h-screen flex flex-col items-start text-gray-50 bg-black/30   '>
         <Logo />
        { Nav_Links.map((link, index) => {
            return <nav key={index}><NavLink nav_link={link} /></nav>
        }) }
        <div className='lg:hidden sm:flex flex-col gap-4 items-start'>
          <ButtonGame className={"bg-black/80 rounded-sm"} link={'/login'} text={'LogIn'} />
          <ButtonGame className={"bg-black/80 rounded-sm"} link={'/signup'} text={'SignUp'} />
         </div>
       </div>
    </div>
  )
}

export default SidBar