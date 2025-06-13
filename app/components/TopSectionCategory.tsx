import Image from 'next/image'
import React from 'react'

const TopSectionCategory = ({image, name, gamesCount} : {image: string, name: string, gamesCount: number}) => {
  return (
    <div className="container px-0 py-16 mx-auto">
        <div className="items-center gap-3 lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-rose-500 dark:text-white lg:text-4xl">{name}</h1>
                    
                    <p className="mt-3 text-white/50 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    <h3 className='text-white text-2xl font-semibold'>Games Count : {gamesCount}</h3>
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-rose-500 rounded-lg lg:w-auto hover:bg-rose-400 focus:outline-none focus:bg-rose-400">Shop Now</button>
                </div>
            </div>

            <div className="flex items-center relative justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image width={450} height={400} className=" rounded-lg shadow-lg lg:max-w-3xl" src={image} alt="Catalogue-pana.svg" />
            </div>
        </div>
    </div>
  )
}

export default TopSectionCategory