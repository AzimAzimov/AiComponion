import React, { ChangeEvent, FC, FormEvent } from 'react'
import { ChatRequestOptions } from "ai";
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SendHorizontal } from 'lucide-react';

interface ChatFormProps {
    isLoading: boolean
    input: string
    handleInputChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
    onSubmit: (event: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void
}

const ChatForm:FC<ChatFormProps> = ({input, onSubmit, handleInputChange, isLoading}) => {
  return (
    <form 
        onSubmit={onSubmit} 
        className="flex items-center gap-x-2 border-t border-primary/10 py-4"
    >
        <Input
          disabled={isLoading}
          value={input}
          onChange={handleInputChange}
          placeholder='Type a message'
          className='rounded-lg bg-primary/10'
        />
        <Button disabled={isLoading} variant='ghost'>
          <SendHorizontal className='h-6 w-6'/>
        </Button>
    </form>
  )
}

export default ChatForm