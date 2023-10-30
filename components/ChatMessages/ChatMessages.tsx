'use client'
import { Companion } from '@prisma/client'
import React, { ElementRef, FC, useEffect, useRef, useState } from 'react'
import ChatMessage, { ChatMessageProps } from './ChatMessage'

interface ChatMessagesProps {
  isLoading: boolean
  companion: Companion
  messages: ChatMessageProps[]
}

const ChatMessages:FC<ChatMessagesProps> = ({isLoading, companion, messages=[]}) => {
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false)
  const scriollRef = useRef<ElementRef<"div">>(null)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFakeLoading(false)
    }, 1000)
  }, [])


  useEffect(() => {
    scriollRef?.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages.length])


  return (
    <div className="flex-1 overflow-y-auto pr-4 h-[100vh]">
      <ChatMessage
        isLoading={fakeLoading}
        role={'system'}
        src={companion.src}
        content={`Hello, I am ${companion.name} ${companion.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          
          key={message.content}
          role={message.role}
          content={message.content}
          src={message.src}
        />
      ))}
      {isLoading && (
        <ChatMessage
          role='system'
          src={companion.src}
          isLoading
        />
      )}
      <div ref={scriollRef}/>
      {/* <ChatMessage
        role={'user'}
        src={companion.src}
        content={`Hello, I am ${companion.name} ${companion.description}`}
      /> */}
    </div>
  )
}

export default ChatMessages