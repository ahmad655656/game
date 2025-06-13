'use client'
import React from 'react'
import { motion } from 'framer-motion'
const MotionItem = ({children, className, initial, animate} : {children: React.ReactNode, className?: string, initial?: any, animate?: any}) => {
  return (
    <motion.div initial={initial} whileInView={animate} className={`${className}`}>
        {children}
    </motion.div>
  )
}

export default MotionItem