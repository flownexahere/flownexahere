import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FlowNexa" },
      { name: "description", content: "Selected AI projects and case studies delivered by FlowNexa." },
      { property: "og:title", content: "FlowNexa Portfolio" },
      { property: "og:description", content: "Case studies of chatbots, automation, and AI products we've shipped." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { 
    title: "AI Resume Screener & Job Matcher", 
    tag: "NLP / ML", 
    desc: "AI system that classifies resumes, extracts skills using NER, and matches candidates with relevant job roles.", 
    gradient: "from-primary/40 to-accent/40" 
  },
  { 
    title: "SalesMint", 
    tag: "AI POS System", 
    desc: "AI-powered POS and billing platform with inventory, sales tracking, and intelligent business insights.", 
    gradient: "from-accent/40 to-primary/40" 
  },
  { 
    title: "AIPHA", 
    tag: "AI Healthcare Assistant", 
    desc: "AI-based personal health assistant for tracking daily health activities, reminders, and intelligent recommendations.", 
    gradient: "from-primary/30 to-accent/50" 
  },
  { 
    title: "AI Virtual Fashion Stylist", 
    tag: "Computer Vision", 
    desc: "Fashion recommendation system analyzing clothing items using computer vision to suggest personalized outfits.", 
    gradient: "from-accent/50 to-primary/30" 
  },
  { 
    title: "Clinify", 
    tag: "Automation / n8n", 
    desc: "Workflow automation platform for clinics integrating appointment handling, notifications, and AI-driven assistance.", 
    gradient: "from-primary/40 to-accent/30" 
  },
  { 
    title: "Ticket Automation", 
    tag: "AI Automation", 
    desc: "AI-powered ticket routing and automation workflow using n8n to reduce manual support handling.", 
    gradient: "from-accent/30 to-primary/40" 
  },
  { 
    title: "MediTranscribe", 
    tag: "Speech-to-Text AI", 
    desc: "Doctor-patient conversation transcription system converting medical discussions into structured notes.", 
    gradient: "from-primary/40 to-accent/40" 
  },
  { 
    title: "AuditX", 
    tag: "Call Auditing AI", 
    desc: "AI call auditing system analyzing conversations for quality assurance, compliance, and insights.", 
    gradient: "from-accent/40 to-primary/40" 
  },
  { 
    title: "NeuroSymbolic VQA", 
    tag: "Neuro-Symbolic AI", 
    desc: "Visual question answering system combining deep learning perception with symbolic reasoning.", 
    gradient: "from-primary/30 to-accent/50" 
  }
];


function PortfolioPage() {
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
          Our <span className="text-gradient">Products</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A selection of AI products and automations we've crafted for ambitious teams.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong group cursor-pointer overflow-hidden rounded-2xl"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute right-4 top-4 rounded-full bg-background/30 p-2 backdrop-blur transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-accent">{p.tag}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
