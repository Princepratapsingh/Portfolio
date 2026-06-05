export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  type: "personal" | "enterprise";
  problem: string;
  solution: string;
  features: string[];
  metrics: { label: string; value: string; description?: string }[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoVideo?: string;
  architecture?: string[];
  modules?: string[];
  myRole?: string[];
  status: "live" | "wip" | "case-study";
  gradient: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    id: "menucast",
    title: "MenuCast",
    tagline: "Remote digital signage for restaurants & cafes",
    description:
      "A real-time remote digital signage platform built for restaurants and cafes to manage menus, promotions, and content across multiple outlets from a single centralized dashboard — eliminating manual TV updates forever.",
    type: "personal",
    status: "live",
    problem:
      "Restaurant operators managing multiple outlets faced a painful daily ritual: manually walking to each TV display to update menus, prices, and promotions. Any price change required physical access to every screen — slow, error-prone, and operationally expensive.",
    solution:
      "MenuCast delivers real-time content updates to all screens via WebSocket communication, with offline caching ensuring displays never go blank even during connectivity loss. A centralized dashboard gives operators full control over all outlets from one place.",
    features: [
      "Real-time content sync via WebSocket — changes reflect on all screens instantly",
      "Offline caching with service workers — screens stay live even without internet",
      "Multi-outlet management from a single dashboard",
      "Schedule content and promotions in advance",
      "Fast CDN-backed content delivery",
      "Role-based access for outlet managers",
      "Analytics on display uptime and content views",
      "Mobile-responsive admin panel",
    ],
    metrics: [
      { label: "Sync Speed", value: "<500ms", description: "Content updates reach all screens" },
      { label: "Offline Buffer", value: "24hr", description: "Cached content during outages" },
      { label: "Multi-Outlet", value: "∞", description: "Screens managed from one dashboard" },
      { label: "Uptime", value: "99.9%", description: "Display availability SLA" },
    ],
    techStack: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "Redis", "Vercel", "Docker"],
    architecture: [
      "Next.js frontend with real-time WebSocket client",
      "Node.js backend with Socket.io for push updates",
      "PostgreSQL for content and outlet data",
      "Redis for pub/sub message brokering",
      "Service Worker for offline content caching",
      "Vercel Edge Network for global CDN delivery",
    ],
    liveUrl: "https://menuprt.vercel.app",
    githubUrl: "https://github.com/Princepratapsingh",
    gradient: "from-violet-600/20 via-purple-900/10 to-transparent",
    accentColor: "#8B5CF6",
  },
  {
    id: "demand-planning",
    title: "Demand Planning & Operations Dashboard",
    tagline: "Replacing manual forecasting with intelligent operational intelligence",
    description:
      "An enterprise operations platform designed for a multi-outlet restaurant chain, transforming fragmented manual processes into integrated digital workflows across forecasting, inventory, production, and dispatch.",
    type: "enterprise",
    status: "case-study",
    problem:
      "The operations team relied on spreadsheets and intuition for forecasting, resulting in 30%+ inventory variance, daily stockouts, over-production waste, and high dependency on senior staff knowledge. Planning across 10+ branches was uncoordinated, reactive, and time-consuming.",
    solution:
      "Led the end-to-end design of a modular operations platform — from requirements gathering through process mapping, KPI design, and AI-assisted product development — creating a system that makes every planning decision data-driven and auditable.",
    modules: [
      "Forecasting Engine — AI-assisted demand prediction by outlet and category",
      "Inventory Management — Real-time stock tracking with auto-reorder triggers",
      "Ingredient Planning — BOM-based ingredient requirement calculations",
      "Kitchen Production Planning — Prep schedules aligned with forecasted demand",
      "Dispatch Planning — Multi-branch delivery scheduling and routing",
      "Operational Reporting — KPI dashboards for management and operations teams",
    ],
    myRole: [
      "Led stakeholder interviews and requirement gathering across ops, kitchen, and logistics teams",
      "Designed forecast model architecture — sales velocity, seasonality, and event adjustments",
      "Created 40+ process maps covering order-to-dispatch flows",
      "Defined 25+ operational KPIs across revenue, waste, and efficiency dimensions",
      "Designed inventory planning workflows with safety stock logic",
      "Built ingredient planning logic using recipe BOM structures",
      "Planned dispatch routing algorithms for multi-branch delivery",
      "Collaborated with developers using AI-assisted prototyping and documentation",
    ],
    metrics: [
      { label: "Branches", value: "10+", description: "Outlets on the platform" },
      { label: "Modules", value: "6", description: "Integrated planning workflows" },
      { label: "KPIs Designed", value: "25+", description: "Operational metrics tracked" },
      { label: "Process Maps", value: "40+", description: "End-to-end workflows documented" },
    ],
    techStack: ["Business Analysis", "Process Mapping", "KPI Design", "AI-Assisted Development", "Dashboard Design", "Stakeholder Management"],
    features: [
      "AI-assisted demand forecasting by outlet, category, and time period",
      "Real-time inventory visibility with automated reorder triggers",
      "Recipe BOM-based ingredient planning and cost forecasting",
      "Kitchen production schedule generation from forecast data",
      "Multi-branch dispatch planning with delivery optimization",
      "Executive and operational KPI dashboards",
    ],
    gradient: "from-blue-600/20 via-indigo-900/10 to-transparent",
    accentColor: "#6366F1",
  },
];
