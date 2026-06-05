"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

function MetricCard({ value, label, description }: { value: string; label: string; description?: string }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/15 transition-colors">
      <div className="text-2xl font-bold text-white mb-0.5">{value}</div>
      <div className="text-xs font-medium text-orange-400 mb-1">{label}</div>
      {description && <div className="text-[11px] text-slate-600 leading-tight">{description}</div>}
    </div>
  );
}

function PersonalProject() {
  const project = projects.find((p) => p.id === "menucast")!;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-[#111111] border border-white/[0.08] overflow-hidden mb-5 hover:border-orange-500/20 transition-all duration-300 card-glow"
    >
      {/* Hero gradient header */}
      <div className="relative p-8 bg-gradient-to-br from-orange-600/20 via-red-900/10 to-transparent border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="success" size="sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </Badge>
                <Badge variant="orange" size="sm">Personal Project</Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-orange-300 font-medium text-sm">{project.tagline}</p>
            </div>
            <div className="flex items-center gap-2">
              <motion.a
                href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-sm font-medium transition-all shadow-lg shadow-orange-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] text-white text-sm font-medium transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">The Problem</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">The Solution</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Key Metrics</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => <MetricCard key={m.label} {...m} />)}
          </div>
        </div>

        {/* Dashboard screenshot in browser frame */}
        <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d0d0d]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex-1 mx-3">
              <div className="bg-[#111] border border-white/[0.08] rounded-md px-3 py-1 flex items-center gap-2">
                <svg className="w-3 h-3 text-slate-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-slate-500 font-mono">menuprt.vercel.app</span>
              </div>
            </div>
          </div>

          {/* Real screenshot */}
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block group relative">
            <img
              src="/menucast-dashboard.png"
              alt="MenuCast Dashboard"
              className="w-full object-cover object-top max-h-80 transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/90 text-white text-sm font-medium backdrop-blur-sm">
                Open live app →
              </span>
            </div>
          </a>
        </div>

        <div className="mb-5">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => <Badge key={t} variant="default">{t}</Badge>)}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          {expanded ? "Hide" : "Show"} all features & architecture
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">▸</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.architecture && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Architecture</h4>
                    <ul className="space-y-2">
                      {project.architecture.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">◆</span>{a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function CaseStudyProject() {
  const project = projects.find((p) => p.id === "demand-planning")!;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-[#111111] border border-white/[0.08] overflow-hidden hover:border-red-500/15 transition-all duration-300 card-glow"
    >
      <div className="relative p-8 bg-gradient-to-br from-red-600/15 via-rose-900/8 to-transparent border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10">
          <div className="flex items-start gap-3 mb-3">
            <Badge variant="outline" size="sm">Enterprise Case Study</Badge>
            <Badge variant="red" size="sm">Operations</Badge>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm">{project.tagline}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10 mb-7">
          <div className="text-red-400 text-lg mt-0.5">ℹ</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Enterprise case study — analytical and product contributions at Alienkind. Implementation details withheld to respect company confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Business Problem</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">My Contribution</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Project Scale</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => <MetricCard key={m.label} {...m} />)}
          </div>
        </div>

        {project.modules && (
          <div className="mb-7">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Modules Designed</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.modules.map((module, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-red-400 text-sm flex-shrink-0">◆</span>
                  <span className="text-xs text-slate-300">{module}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.map((t) => <Badge key={t} variant="subtle">{t}</Badge>)}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          {expanded ? "Hide" : "Show"} detailed role breakdown
        </button>

        <AnimatePresence>
          {expanded && project.myRole && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">My Detailed Role</h4>
                <ul className="space-y-2.5">
                  {project.myRole.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className="text-red-400 mt-1 flex-shrink-0">▸</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <AnimatedSection>
            <span className="inline-block text-xs font-medium text-orange-400 tracking-widest uppercase mb-4">
              Projects & Case Studies
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Products shipped & systems designed
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Personal products built end-to-end and enterprise systems designed from requirements to deployment.
            </p>
          </AnimatedSection>
        </div>
        <PersonalProject />
        <CaseStudyProject />
      </div>
    </section>
  );
}
