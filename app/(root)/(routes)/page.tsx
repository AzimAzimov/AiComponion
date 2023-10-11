import Categoryes from '@/components/Categoryes'
import SearchInput from '@/components/Search'
import prismadb from '@/lib/prismadb'
import { UserButton } from '@clerk/nextjs'
import React, { FC } from 'react'


const RootPage:FC = async () => {
  const categoryes = await prismadb.category.findMany()

  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput />
      <Categoryes data={categoryes} />
    </div>
  )
}

export default RootPage
