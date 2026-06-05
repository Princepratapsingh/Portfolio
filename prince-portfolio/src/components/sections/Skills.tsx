"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/data/skills";

const levelColors = {
  expert: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  advanced: "bg-red-500/10 text-red-300 border-red-500/20",
  proficient: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <AnimatedSection>
            <span className="inline-block text-xs font-medium text-orange-400 tracking-widest uppercase mb-4">
              Skills & Expertise
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What I bring to the table</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              A cross-functional skill set bridging the gap between business problems and technical solutions.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.id} delay={catIndex * 0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                className="group p-6 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-orange-500/15 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/10 border border-orange-500/15 flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 max-w-[220px] leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.05 + skillIndex * 0.03 }}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-all duration-200 hover:scale-105 cursor-default ${
                        skill.level ? levelColors[skill.level] : levelColors.proficient
                      }`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-6 mt-10">
            <span className="text-xs text-slate-600">Proficiency:</span>
            {[
              { label: "Expert", color: "bg-orange-500/15 text-orange-300 border-orange-500/25" },
              { label: "Advanced", color: "bg-red-500/10 text-red-300 border-red-500/20" },
              { label: "Proficient", color: "bg-slate-500/10 text-slate-400 border-slate-500/20" },
            ].map((item) => (
              <span key={item.label} className={`text-xs px-2.5 py-0.5 rounded-full border ${item.color}`}>
                {item.label}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
