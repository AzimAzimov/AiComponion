import SearchInput from '@/components/Search'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const RootPage = () => {
  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput />
    </div>
  )
}

export default RootPage
