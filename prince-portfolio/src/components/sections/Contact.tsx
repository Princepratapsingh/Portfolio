"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "singhprincepratap5@gmail.com",
    href: "mailto:singhprincepratap5@gmail.com",
    copyable: true,
    description: "Best for professional inquiries",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "prince-pratap-singh",
    href: "https://www.linkedin.com/in/prince-pratap-singh-443480241/",
    copyable: false,
    description: "Professional network & updates",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Princepratapsingh",
    href: "https://github.com/Princepratapsingh",
    copyable: false,
    description: "Code, projects & contributions",
  },
];

function ContactCard({ icon: Icon, label, value, href, copyable, description }: (typeof contactLinks)[0]) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!copyable) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      className="group p-6 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-orange-500/20 transition-all duration-300 card-glow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/10 border border-orange-500/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-orange-400" />
        </div>
        <div className="flex gap-2">
          {copyable && (
            <button
              onClick={handleCopy}
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
          <a href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:bg-orange-500/10 hover:border-orange-500/20 transition-all">
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="text-sm font-medium text-white mb-1 truncate">{value}</div>
      <div className="text-xs text-slate-600">{description}</div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0A0A0A]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-red-600/4 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <AnimatedSection>
            <span className="inline-block text-xs font-medium text-orange-400 tracking-widest uppercase mb-4">
              Get in Touch
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s work together</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-slate-400 text-base leading-relaxed">
              Whether you&apos;re a founder with an operational problem, a recruiter looking for a
              product-minded analyst, or a team building in restaurant-tech or ops-intelligence —
              I&apos;d love to connect.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="max-w-lg mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm text-slate-300">
                <span className="text-emerald-400 font-medium">Open to opportunities</span> — Bengaluru / Gurgaon · Remote-friendly
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
          {contactLinks.map((link, i) => (
            <AnimatedSection key={link.label} delay={0.1 * i}>
              <ContactCard {...link} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35}>
          <div className="text-center">
            <motion.a
              href="mailto:singhprincepratap5@gmail.com"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-base font-semibold transition-all duration-200 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </motion.a>
            <p className="mt-4 text-xs text-slate-600">
              singhprincepratap5@gmail.com · Typically responds within 24 hours
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
