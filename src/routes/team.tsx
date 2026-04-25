import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { TeamsSlider } from "@/components/flownexa/TeamsSlider";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — FlowNexa" },
      { name: "description", content: "Meet the talented team behind FlowNexa AI solutions." },
      { property: "og:title", content: "FlowNexa Team" },
      { property: "og:description", content: "Meet our passionate AI engineers and designers." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl font-bold md:text-6xl"
        >
          Meet Our <span className="text-gradient">Team</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A group of passionate engineers, designers, and AI researchers dedicated to building the future of intelligent automation.
        </p>

        <div className="mt-16">
          <TeamsSlider />
        </div>
      </main>
    </div>
  );
}
