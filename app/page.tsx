"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChatDemo } from "@/components/chat-demo";

export default function Home() {
  return (  
    <main className="flex flex-col items-center justify-center p-12 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Nexaris</CardTitle>
          <CardDescription>
            Engage in real-time conversations . Ask questions, get help, or generate ideas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChatDemo />
        </CardContent>
        <title>Nexaris</title>
      </Card>
    </main>
  );
}
