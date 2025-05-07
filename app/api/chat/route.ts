// app/api/chat/route.ts
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import { NextRequest } from "next/server";

export const runtime = "edge";

const model = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
})("gemini-1.5-flash");

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const last = messages?.at(-1);

    if (!last || last.role !== "user") {
      return new Response(
        JSON.stringify({ error: "Invalid messages" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return streamText({
      model,
      system: "You are a helpful assistant.",
      prompt: last.content,
    }).toDataStreamResponse();
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
