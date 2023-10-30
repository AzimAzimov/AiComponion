"use client";
import React, { FC, FormEvent, useState } from "react";
import { Companion, Message } from "@prisma/client";
import ChatHeader from "@/components/ChatHeader/ChatHeader";
import { useRouter } from "next/navigation";
import { useCompletion } from 'ai/react'
import ChatForm from "@/components/ChatForm/ChatForm";
import ChatMessage from "@/components/ChatMessages/ChatMessages";
import ChatMessages from "@/components/ChatMessages/ChatMessages";
import { ChatMessageProps } from "@/components/ChatMessages/ChatMessage";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient: FC<ChatClientProps> = ({ companion }) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>(companion.messages);
  
  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish(_prompt, completion) {
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
    <div className="flex flex-col h-[100vh] p-4 space-y-2 justify-between">
      <ChatHeader companion={companion} />
      <ChatMessages 
        companion={companion}
        isLoading={isLoading}
        messages={messages}
      />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};
export default ChatClient;
