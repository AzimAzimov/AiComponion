import React, { FC, ReactNode } from "react";

interface ChatLayoutProps {
  children: ReactNode;
}

const ChatLayout:FC<ChatLayoutProps> = ({ children }) => {
  return <div className="mx-auto max-w-4xl h-full w-full">{children}</div>;
};
export default ChatLayout;
