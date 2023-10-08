'use client'
import React, { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'
import qs from "query-string"
import { log } from 'console'

const SearchInput:FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name")

  const [value, setValue] = useState(name || "")
  const debouncedValue = useDebounce<string>(value, 500)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipEmptyString: true, skipNull: true })

    router.push(url)
  }, [debouncedValue, router, categoryId])


  return (
    <div className='relative'>
      <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground' />
      <Input
        placeholder='Search...'
        className='pl-10 bg-primary/10'
        value={value}
        onChange={onChange}
      />
      {value && <X onClick={() => setValue('')} className='cursor-pointer absolute h-4 w-4 top-3 right-4 text-muted-foreground'/>}
    </div>
  )
}

export default SearchInput
