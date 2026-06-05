import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/prince-pratap-singh-443480241/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/Princepratapsingh", icon: Github },
  { name: "Email", href: "mailto:singhprincepratap5@gmail.com", icon: Mail },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold">
                P
              </div>
              <span className="text-white font-semibold text-sm">Prince Pratap Singh</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              IT Business Analyst building AI-powered operational products at Alienkind, Bengaluru.
            </p>
          </div>

          <div>
            <h4 className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.name} href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.name}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500/10 hover:border-orange-500/25 transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-slate-500">singhprincepratap5@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Prince Pratap Singh. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-slate-600">Bengaluru, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
