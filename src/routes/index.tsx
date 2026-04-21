import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Hero } from "@/components/flownexa/Hero";
import { Stats } from "@/components/flownexa/Stats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowNexa — AI Automation & Intelligent Systems" },
      { name: "description", content: "FlowNexa builds AI automation, chatbots, and intelligent systems for modern businesses ready to scale." },
      { property: "og:title", content: "FlowNexa — AI Automation & Intelligent Systems" },
      { property: "og:description", content: "AI automation, chatbots, and intelligent systems engineered for modern businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
      </main>
      <footer className="border-t border-border/40 py-10 text-center text-sm text-muted-foreground">
        © 2025 FlowNexa. All rights reserved.
      </footer>
    </div>
  );
}
