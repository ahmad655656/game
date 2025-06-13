// استيراد دالة cn من مكتبة utils الموجودة في المسار المحدد
import { cn } from '@/lib/utils'

// استيراد مكتبة React
import React from 'react'

// تعريف مكون MaxWidthWrapper الذي يستقبل children و className كخصائص
const MaxWidthWrapper = ({children, className, noPadding, customPadding} : {children: React.ReactNode, className?: string, noPadding?: boolean, customPadding?: string}) => {
  // إرجاع عنصر div مع بعض الخصائص
  return (
    // استخدام دالة cn لدمج الفئات CSS، مع تعيين max-width و margin
    <section className={cn('max-w-[1375px] w-full px-5 lg:px-20 md:px-10 py-5 ', className || '', {'py-0': noPadding && !customPadding} , {'py-4': !noPadding && !customPadding}, {customPadding})}>
      {/* عرض المحتوى المرسل إلى المكون */}
      {children}
    </section>
  )
}

// تصدير المكون ليكون متاحًا للاستخدام في أماكن أخرى
export default MaxWidthWrapper
