"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const achievements = [
  {
    icon: "🚀",
    title: "Shipped a Live SaaS Product",
    description: "Built and deployed MenuCast — a real-time digital signage platform — end-to-end as a solo builder using AI-assisted development.",
    metric: "Live",
    metricLabel: "in Production",
    link: { label: "menuprt.vercel.app", href: "https://menuprt.vercel.app" },
    accent: "text-orange-300 bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: "📐",
    title: "Designed 6 Operational Modules",
    description: "Led end-to-end design of enterprise operations platform covering forecasting, inventory, ingredients, kitchen, dispatch, and reporting.",
    metric: "6",
    metricLabel: "Core Modules",
    accent: "text-red-300 bg-red-500/10 border-red-500/20",
  },
  {
    icon: "📊",
    title: "Defined 25+ Operational KPIs",
    description: "Designed KPI framework covering revenue, waste, efficiency, and operational performance metrics across a multi-branch restaurant chain.",
    metric: "25+",
    metricLabel: "KPIs Designed",
    accent: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: "🗺",
    title: "40+ Process Maps Documented",
    description: "Mapped all order-to-dispatch workflows, stakeholder journeys, and system interaction flows to drive alignment across ops and engineering.",
    metric: "40+",
    metricLabel: "Process Maps",
    accent: "text-orange-300 bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: "🤖",
    title: "AI-First Development Workflow",
    description: "Pioneered AI-assisted development using Claude, Cursor, and GitHub Copilot to prototype, document, and ship at startup speed.",
    metric: "10x",
    metricLabel: "Speed Multiplier",
    accent: "text-rose-300 bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: "📡",
    title: "Real-time WebSocket Platform",
    description: "Architected and shipped a real-time content delivery system with sub-500ms latency and offline-first resilience for restaurant displays.",
    metric: "<500ms",
    metricLabel: "Sync Latency",
    accent: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
];

const certifications = [
  { title: "Python (Basic)", issuer: "HackerRank", href: "https://www.hackerrank.com/certificates/b82759ff580c" },
  { title: "SQL (Basic)", issuer: "HackerRank", href: "https://www.hackerrank.com/certificates/7b428bf3e336" },
  { title: "SQL (Intermediate)", issuer: "HackerRank", href: "https://www.hackerrank.com/certificates/56092676d98a" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <AnimatedSection>
            <span className="inline-block text-xs font-medium text-orange-400 tracking-widest uppercase mb-4">
              Achievements
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Impact & milestones</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Products shipped, systems designed, and operational problems solved.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="group h-full p-6 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-orange-500/15 transition-all duration-300 card-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="text-right">
                    <div className={`text-xl font-bold px-2.5 py-0.5 rounded-lg border ${item.accent}`}>
                      {item.metric}
                    </div>
                    <div className="text-[10px] text-slate-600 mt-1">{item.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.description}</p>
                {item.link && (
                  <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-orange-400 hover:text-orange-300 transition-colors">
                    {item.link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl bg-[#111111] border border-white/[0.07] p-7">
            <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <span className="text-orange-400">📜</span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.title}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -1 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/20 transition-all duration-200"
                >
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-orange-300 transition-colors">{cert.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{cert.issuer}</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
