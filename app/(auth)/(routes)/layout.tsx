import React, { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}


const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='flex justify-center items-center h-full'>
      {children}
    </div>
  )
}

export default AuthLayout
