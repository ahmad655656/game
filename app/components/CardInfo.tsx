import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import MotionItem from './defaults/MotionItem'
const CardInfo = ({description, title, image, textBtn, btnClasses} : {description: string, title: string, image: string, textBtn: string, btnClasses: string}) => {
  return (
      <MotionItem initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: {duration: 1} }} className="absolute flex flex-col gap-2 items-start left-20 top-20 max-w-md">
                  <div className="w-full h-40 relative">
                    <Image src={image} alt="" fill className="object-contain" />
                  </div>
                  <h1 className="text-white text-2xl font-semibold">{title}</h1>
                  <p className="text-base text-gray-300 text-muted-foreground ">
                    {description}
                  </p>
                  <Button className={`rounded-full text-gray-500 ${btnClasses || 'text-gray-50'}`}>{textBtn || 'Fing out more !'}</Button>
                </MotionItem>
  )
}

export default CardInfo