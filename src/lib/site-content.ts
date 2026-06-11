import {
  Bot,
  Box,
  CheckCircle2,
  Code2,
  FileCheck2,
  Globe2,
  Layers3,
  ListChecks,
  Mail,
  MessageSquare,
  NotebookText,
  Phone,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";

export type SiteProduct = {
  name: string;
  status: string;
  description: string;
  href: string;
  icon: LucideIcon;
  highlights: string[];
};

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  buttonLabel: string;
  featured?: boolean;
  features: string[];
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const company = {
  name: "irsSMEX",
  tagline: "AI Software for Modern Builders",
  heroHeadline: "AI-Powered Software for Modern Builders",
  heroSubheadline:
    "irsSMEX builds practical AI tools that help teams review software, automate workflows, and launch faster with confidence.",
  description:
    "irsSMEX builds practical AI software that helps developers, founders, and modern teams review software, automate workflows, and launch with more confidence.",
  supportEmail: "irssmex@gmail.com",
  businessEmail: "irssmex@gmail.com",
  phoneDisplay: "03225868569",
  phoneHref: "tel:03225868569",
  whatsappHref: "https://wa.me/923225868569",
  location: "Pakistan",
  legalDate: "June 7, 2026",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export const legalLinks = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
];

export const products: SiteProduct[] = [
  {
    name: "VibeSafe",
    status: "Active / First Product",
    href: "/products/vibesafe",
    icon: ScanSearch,
    description:
      "VibeSafe is an AI-assisted security review tool for web application builders. It helps identify risky code patterns, exposed secrets, dependency concerns, insecure configuration patterns, and common launch-readiness issues before deployment.",
    highlights: ["AI-assisted review", "Clear scan summaries", "Builder-focused reports", "Transparent policies"],
  },
  {
    name: "AI Business Agents",
    status: "In Development",
    href: "/products",
    icon: Bot,
    description:
      "Workflow automation agents for business operations, research, customer support, and internal execution.",
    highlights: ["Workflow support", "Research assistance", "Internal execution"],
  },
  {
    name: "AI UGC Ad Studio",
    status: "Experimental / Not available for purchase",
    href: "/products",
    icon: Sparkles,
    description:
      "AI UGC Ad Studio is an experimental concept and is not currently available for purchase.",
    highlights: ["Concept only", "Not for purchase", "Business-safe positioning"],
  },
];

export const operationFeatures: Feature[] = [
  {
    title: "AI-Assisted Risk Review",
    description: "Surface risk indicators and suggested review areas before an app goes live.",
    icon: ShieldAlert,
  },
  {
    title: "Dependency & Config Notes",
    description: "Review dependency concerns and common configuration issues with clearer context.",
    icon: Layers3,
  },
  {
    title: "Launch-Readiness Checklist",
    description: "Turn scan output into a structured developer security checklist.",
    icon: ListChecks,
  },
];

export const intelligenceCards: Feature[] = [
  {
    title: "App Risk Insights",
    description: "Review risky patterns and launch-readiness signals from one focused workspace.",
    icon: ScanSearch,
  },
  {
    title: "Developer Workflow Support",
    description: "Support review routines for builders, founders, agencies, and teams.",
    icon: Code2,
  },
  {
    title: "AI Review Notes",
    description: "Generate practical notes that help users decide where to inspect next.",
    icon: NotebookText,
  },
  {
    title: "Product Launch Readiness",
    description: "Organize checks before release without promising complete security coverage.",
    icon: FileCheck2,
  },
  {
    title: "Secure-by-Design Guidance",
    description: "Encourage better review habits through checklists and responsible boundaries.",
    icon: CheckCircle2,
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/month",
    description: "For individual builders.",
    buttonLabel: "Request Access",
    features: [
      "Access to VibeSafe basic scans",
      "Basic scan history",
      "Standard usage limits",
      "Email support",
      "Cancel anytime",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    cadence: "/month",
    description: "For founders and serious builders.",
    buttonLabel: "Request Access",
    featured: true,
    features: [
      "Higher scan limits",
      "More detailed reports",
      "Priority email support",
      "Product updates",
      "Cancel anytime",
    ],
  },
  {
    name: "Business",
    price: "$149",
    cadence: "/month",
    description: "For teams and agencies.",
    buttonLabel: "Request Access",
    features: [
      "Team-ready usage",
      "Advanced scan history",
      "Priority support",
      "Business workflow support",
      "Cancel anytime",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For larger teams.",
    buttonLabel: "Contact Support",
    features: [
      "Custom usage limits",
      "Security review support",
      "Onboarding",
      "Custom agreement",
    ],
  },
];

export const integrations = [
  { name: "GitHub", icon: Code2 },
  { name: "Vercel", icon: TerminalSquare },
  { name: "Supabase", icon: Box },
  { name: "OpenAI", icon: Sparkles },
  { name: "Notion", icon: NotebookText },
  { name: "Slack", icon: MessageSquare },
];

export const useCases = [
  "Solo founders reviewing apps before launch",
  "Vibe coders checking risky patterns",
  "Agencies preparing client projects",
  "Teams organizing launch-readiness tasks",
];

export const vibesafeDeliverables = [
  "AI-assisted scan summary",
  "Risk indicators",
  "Suggested review areas",
  "Dependency and configuration notes",
  "Launch-readiness checklist",
  "Exportable report if available",
];

export const vibesafeUseCases = [
  "Reviewing a web app before initial launch",
  "Checking for common configuration issues before deployment",
  "Helping founders and developers review potential issues in fast-moving builds",
  "Adding an extra developer security checklist step before shipping updates",
];

export const vibesafeLimitations = [
  "VibeSafe is an AI-assisted review tool and may miss issues.",
  "Outputs should be reviewed by the user before any release decision.",
  "It is not a certification or substitute for independent testing and may miss vulnerabilities, security issues, or compliance risks.",
  "Users remain responsible for applying appropriate security practices and independent judgment.",
];

export const supportCards = [
  { title: "Email", value: company.supportEmail, href: `mailto:${company.supportEmail}`, icon: Mail },
  { title: "Phone", value: company.phoneDisplay, href: company.phoneHref, icon: Phone },
  { title: "WhatsApp", value: company.phoneDisplay, href: company.whatsappHref, icon: MessageSquare },
  { title: "Location", value: company.location, icon: Globe2 },
];
