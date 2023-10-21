"use client"
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { FC, ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout:FC<RootLayoutProps> = ({children}) => {
  return (
    <div className='h-full'>
      <Navbar />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className='md:pl-20 pt-16 h-full'>
        {children}
      </main>
    </div>
  )
}

export default RootLayout
