"use client";

import { useChat } from "ai/react";
import type { UseChatOptions } from "ai/react";

import { Chat } from "@/components/ui/chat";

type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"];
};

/**
 * ChatDemo Component
 * A wrapper around the `Chat` UI component using `useChat` hook.
 */
export function ChatDemo({ initialMessages }: ChatDemoProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
  } = useChat({
    api: "/api/chat", // Using the default chat API route
    initialMessages,
  });

  return (
    <div className="flex h-[500px] w-full">
      <Chat
        className="grow"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={[
          "Explain Dijkstra's algorithm with a simple example.",
          "What are the key differences between React and Vue?",
          "Explain object-oriented programming with real-life examples.",        ]}
      />
    </div>
  );
}
