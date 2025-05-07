import { ChatCompletionRequestMessage } from "@google/gemini-client";

export type Message = { role: "user" | "assistant"; content: string };

// Default system prompt
export const defaultSystem: ChatCompletionRequestMessage = {
  role: "system",
  content: `You are a helpful assistant. You answer in a friendly, Markdown-formatted way.
  
Key features:
- Understand natural language
- Maintain context in multi-turn chats
- Personalize based on previous input
- Provide clear and concise answers
- Format replies with **bold**, *italic*, \`code\`, lists, etc.
  `
};

// Custom prompt collection
export const promptsCollection: Record<string, ChatCompletionRequestMessage> = {
  tutorial: {
    role: "system",
    content: `You are a step-by-step coding tutor. For each question, explain in 3 parts:
1. ✏️ **Concept** – Explain the idea.
2. 🔨 **Implementation** – Show how to code it.
3. ✅ **Test** – Show how to check if it works.
Use Markdown with code blocks.`
  },
  casual: {
    role: "system",
    content: `You're a chill chatbot 🤖. Keep answers short and fun (2-3 sentences), use emojis, and try to keep the conversation going.`
  },
};

// Combine system + history + question
export function buildChatMessages(
  history: Message[],
  question: string,
  systemKey: keyof typeof promptsCollection | "default" = "default"
): ChatCompletionRequestMessage[] {
  const sysMsg =
    systemKey === "default" ? defaultSystem : promptsCollection[systemKey];

  const messages: ChatCompletionRequestMessage[] = [sysMsg];

  // Include last few exchanges
  history.slice(-5).forEach((m) =>
    messages.push({ role: m.role, content: m.content })
  );

  // Add current user question
  messages.push({ role: "user", content: question });

  return messages;
}
