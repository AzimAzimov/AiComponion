import { Menu } from 'lucide-react'
import React, { FC } from 'react'
import Sidebar from '../Sidebar'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"


const MobileSidebar:FC = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className='p-0 bg-secondary pt-10 w-32'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
