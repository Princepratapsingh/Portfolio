"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";

const experiences = [
  {
    company: "Alienkind",
    logo: "A",
    logoGradient: "from-orange-500/30 to-red-600/20 border-orange-500/25",
    dotColor: "bg-gradient-to-br from-orange-500 to-red-600",
    role: "IT Business Analyst",
    period: "Apr 2026 – Present",
    duration: "3 months",
    location: "Bengaluru, Karnataka, India",
    workType: "Hybrid",
    type: "Full-time",
    description:
      "Specializing in bridging the gap between business needs and technology by leveraging data analysis, KPI dashboards, and modern tools. Focused on identifying process inefficiencies, optimizing workflows, and enabling data-driven decision-making across cross-functional teams.",
    responsibilities: [
      "Lead requirement gathering and process design for enterprise operations platform covering forecasting, inventory, production, and dispatch modules",
      "Design and maintain 40+ process maps across order-to-dispatch workflows, streamlining cross-team communication",
      "Define 25+ operational KPIs and design executive and operational dashboards for real-time business intelligence",
      "Architect demand forecasting models with sales velocity, seasonality, and event-based adjustments across 10+ branches",
      "Design ingredient planning workflows based on recipe BOM structures for data-driven daily production planning",
      "Coordinate AI-assisted product development using Claude and Cursor to accelerate prototyping cycles",
      "Act as primary bridge between operations stakeholders, kitchen teams, logistics, and engineering",
    ],
    achievements: [
      "Reduced planning cycle time through structured forecast-to-dispatch workflows",
      "Unified operations visibility across 10+ branches via centralized KPI dashboards",
      "Eliminated manual TV menu updates across outlets via MenuCast deployment",
    ],
    tech: ["Analytical Skills", "KPI Dashboards", "Process Mapping", "Business Analysis", "Data Analysis", "AI Tools", "Dashboard Design"],
    isCurrent: true,
    isMultiRole: false,
    roles: [],
  },
  {
    company: "DotPe",
    logo: "D",
    logoGradient: "from-slate-600/20 to-slate-700/10 border-slate-500/20",
    dotColor: "bg-slate-500",
    period: "Jun 2025 – Apr 2026",
    duration: "11 months",
    location: "Gurugram, Haryana, India",
    isCurrent: false,
    isMultiRole: true,
    role: "",
    workType: "",
    type: "",
    description: "",
    responsibilities: [],
    achievements: [],
    tech: [],
    roles: [
      {
        role: "Associate",
        type: "Full-time",
        workType: "Hybrid",
        period: "Jan 2026 – Apr 2026",
        duration: "4 months",
        description:
          "Worked as a Technical Account Manager — managing client relationships, driving account health, and using data analysis to identify growth opportunities across merchant accounts.",
        tech: ["Technical Account Manager", "Data Analysis", "Client Management", "KPI Dashboards"],
      },
      {
        role: "Operation Intern",
        type: "Internship",
        workType: "On-site",
        period: "Jun 2025 – Dec 2025",
        duration: "7 months",
        description:
          "Working as a Technical Account Manager (Training) — onboarding merchant accounts, coordinating REST API integrations, and supporting day-to-day operational workflows.",
        tech: ["REST APIs", "Application Programming Interfaces (API)", "Operations", "Merchant Onboarding"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#0A0A0A]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <AnimatedSection>
            <span className="inline-block text-xs font-medium text-orange-400 tracking-widest uppercase mb-4">
              Experience
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Where I&apos;ve done the work
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              1+ year of professional experience across operations, analytics, and product development.
            </p>
          </AnimatedSection>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/40 via-orange-500/15 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div className="relative md:pl-20 mb-6">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className={`absolute left-5 top-7 w-6 h-6 rounded-full border-4 border-[#0A0A0A] hidden md:block shadow-glow-sm ${exp.dotColor}`}
                />

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-[#111111] rounded-2xl border border-white/[0.07] hover:border-orange-500/15 p-7 transition-all duration-300 card-glow"
                >
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${exp.logoGradient}`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                        {!exp.isMultiRole && (
                          <>
                            <p className="text-orange-400 font-medium text-sm">{exp.role}</p>
                            <p className="text-slate-500 text-xs mt-0.5">{exp.location} · {exp.workType}</p>
                          </>
                        )}
                        {exp.isMultiRole && (
                          <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant={exp.isCurrent ? "orange" : "default"}>{exp.period}</Badge>
                      <Badge variant="subtle">{exp.duration}</Badge>
                    </div>
                  </div>

                  {/* Single role — Alienkind */}
                  {!exp.isMultiRole && (
                    <>
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Badge variant="outline" size="sm">{exp.type}</Badge>
                        <Badge variant="outline" size="sm">{exp.workType}</Badge>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Currently Here
                          </span>
                        )}
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.04 }}
                              className="flex items-start gap-2.5 text-sm text-slate-400"
                            >
                              <span className="text-orange-500 mt-1 flex-shrink-0">▸</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                        <h4 className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="default" size="sm">{t}</Badge>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Multi-role — DotPe */}
                  {exp.isMultiRole && exp.roles.length > 0 && (
                    <div className="space-y-5">
                      {exp.roles.map((role, ri) => (
                        <div key={ri} className={`relative pl-5 ${ri < exp.roles.length - 1 ? "pb-5 border-b border-white/[0.05]" : ""}`}>
                          <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-orange-500/50" />
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <div>
                              <span className="text-sm font-semibold text-white">{role.role}</span>
                              <span className="text-slate-500 text-xs ml-2">· {role.type} · {role.workType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="default" size="sm">{role.period}</Badge>
                              <Badge variant="subtle" size="sm">{role.duration}</Badge>
                            </div>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed mb-3">{role.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {role.tech.map((t) => (
                              <Badge key={t} variant="subtle" size="sm">{t}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
