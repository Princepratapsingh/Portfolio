export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level?: "expert" | "advanced" | "proficient" }[];
  accentColor: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "business",
    title: "Business Analysis",
    icon: "📊",
    description: "Translating complex business problems into structured, actionable solutions",
    accentColor: "#8B5CF6",
    skills: [
      { name: "Requirement Gathering", level: "expert" },
      { name: "Process Mapping", level: "expert" },
      { name: "KPI Design", level: "expert" },
      { name: "Demand Forecasting", level: "advanced" },
      { name: "Inventory Planning", level: "advanced" },
      { name: "Operations Analytics", level: "advanced" },
      { name: "Stakeholder Management", level: "expert" },
      { name: "User Story Writing", level: "expert" },
    ],
  },
  {
    id: "product",
    title: "Product Thinking",
    icon: "🎯",
    description: "Building products that solve real problems and deliver measurable outcomes",
    accentColor: "#6366F1",
    skills: [
      { name: "Product Strategy", level: "advanced" },
      { name: "Dashboard Design", level: "expert" },
      { name: "Workflow Design", level: "expert" },
      { name: "SaaS Architecture Planning", level: "advanced" },
      { name: "MVP Scoping", level: "advanced" },
      { name: "Feature Prioritization", level: "advanced" },
      { name: "UX Research", level: "proficient" },
      { name: "Technical Writing", level: "expert" },
    ],
  },
  {
    id: "ai",
    title: "AI & Vibe Coding",
    icon: "⚡",
    description: "Leveraging AI tools to prototype and ship products at startup speed",
    accentColor: "#A78BFA",
    skills: [
      { name: "Claude AI", level: "expert" },
      { name: "ChatGPT", level: "expert" },
      { name: "Cursor", level: "advanced" },
      { name: "GitHub Copilot", level: "advanced" },
      { name: "Prompt Engineering", level: "expert" },
      { name: "AI-Assisted Development", level: "advanced" },
      { name: "LLM Workflow Design", level: "proficient" },
    ],
  },
  {
    id: "tech",
    title: "Technology",
    icon: "🛠",
    description: "Full-stack technical foundation to build, ship, and scale products",
    accentColor: "#EC4899",
    skills: [
      { name: "React / Next.js", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "Docker", level: "proficient" },
      { name: "GitHub / Git", level: "expert" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "REST APIs", level: "advanced" },
    ],
  },
];
