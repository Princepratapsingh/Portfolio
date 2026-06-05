"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const highlights = [
  {
    icon: "📊",
    title: "Business Analysis",
    description: "Translating messy operational realities into structured software requirements — from stakeholder interviews to system specs.",
    accent: "from-orange-500/15 to-red-500/5 border-orange-500/15",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: "🎯",
    title: "Product Thinking",
    description: "Building products around actual business outcomes, not just features. Every workflow starts with the problem it solves.",
    accent: "from-red-500/15 to-orange-500/5 border-red-500/15",
    iconBg: "bg-red-500/10",
  },
  {
    icon: "⚡",
    title: "AI-Assisted Development",
    description: "Using Claude, Cursor, and GitHub Copilot to prototype fast, iterate faster, and ship solutions at founder speed.",
    accent: "from-amber-500/15 to-orange-500/5 border-amber-500/15",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: "🍽",
    title: "Restaurant Technology",
    description: "Deep domain expertise in restaurant ops — digital signage, demand forecasting, inventory, and dispatch planning.",
    accent: "from-rose-500/15 to-red-500/5 border-rose-500/15",
    iconBg: "bg-rose-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0A0A0A]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimatedSection delay={0}>
              <span className="inline-block text-xs font-medium text-orange-400 tracking-widest uppercase mb-4">
                About Me
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                I work at the intersection of{" "}
                <span className="gradient-text">business, data & technology</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-4 text-slate-400 text-[15px] leading-relaxed">
                <p>
                  As an IT Business Analyst at{" "}
                  <span className="text-white font-medium">Alienkind</span>, I design systems that solve
                  operational challenges across forecasting, inventory management, production planning,
                  dispatch planning, and restaurant technology.
                </p>
                <p>
                  My background isn&apos;t traditional software engineering — it&apos;s{" "}
                  <span className="text-orange-300 font-medium">translating operational reality into digital systems</span>.
                  I sit between the business team and engineering, making sure what gets built actually solves the right problem.
                </p>
                <p>
                  Previously at <span className="text-white font-medium">DotPe</span>, I worked as an
                  Operations Intern and Associate — managing merchant technical accounts and driving
                  data analysis-led account growth.
                </p>
                <p>
                  I actively use AI tools like Claude, ChatGPT, Cursor, and GitHub Copilot to{" "}
                  <span className="text-white font-medium">rapidly prototype and ship products</span> — including{" "}
                  <a href="https://menuprt.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">
                    MenuCast
                  </a>
                  {" "}— a real-time digital signage platform built end-to-end.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-4 mt-8">
                <a href="https://www.linkedin.com/in/prince-pratap-singh-443480241/" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white font-medium transition-colors">
                  View LinkedIn →
                </a>
                <span className="text-white/20">·</span>
                <a href="https://github.com/Princepratapsingh" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white font-medium transition-colors">
                  View GitHub →
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.08 * i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${item.accent} border bg-[#111111] transition-all duration-300 card-glow`}
                >
                  <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center text-xl mb-3`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
