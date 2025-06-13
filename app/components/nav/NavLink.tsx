'use client'
import Link from 'next/link' // استيراد مكون Link من مكتبة Next.js لإنشاء روابط
import { usePathname } from 'next/navigation'
import React, { ReactElement, useEffect, useState } from 'react' // استيراد React و ReactElement من مكتبة React

// تعريف مكون NavLink الذي يستقبل خاصية nav_link
const NavLink = ({nav_link} : {nav_link: {url: string, label: string, icon: ReactElement}}) => {
    const { url, label, icon } = nav_link // تفكيك خاصية nav_link للحصول على url و label و icon
    const pathname = usePathname()
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        if (pathname === url) {
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }, [pathname])
  return (
    // إنشاء رابط باستخدام مكون Link  
    <Link href={url} className={`${isActive ? "text-rose-400" : "text-gray-50"} duration-150 transition-all ease-linear flex gap-2 items-center my-2 p-2 rounded-md`}>
       {React.cloneElement(icon, {className: "w-6 h-6"})} {/* // نسخ عنصر الأيقونة مع إضافة فئة CSS لتحديد الحجم */}
        {label} {/* // عرض النص الخاص بالرابط */}
    </Link>
  )
}
export default NavLink 
