import React from 'react'
import Search from '../Search'
import { cn } from '../../../lib/utils';
import ButtonGame from '../defaults/ButtonGame';

const NavBar = () => {
  return (
    <nav>
      <header className='flex flex-row items-center justify-between'>
         <Search />
         <div className='lg:flex hidden'>
          <ButtonGame link={'/login'} text={'LogIn'} />
          <ButtonGame link={'/signup'} text={'SignUp'} />
         </div>
      </header>
    </nav>
  )
}

export default NavBar 