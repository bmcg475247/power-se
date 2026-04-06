import type { NavItem } from "../types/content";

export const siteConfig = {
  companyName: "Power Systems Experts Inc.",
  shortName: "PSE",
  phone: "+1 (519) 878-4752",
  email: "contact@power-se.com",
  address: "230 Fairhaven Circle, London, ON",
  serviceArea: "Ontario industrial and commercial facilities",
  linkedin: "https://ca.linkedin.com/company/power-systems-experts",
  cta: {
    primary: "Request a Consultation",
    secondary: "See Services"
  },
  colors: {
    primary: "#E6B02E",
    primaryDeep: "#906E1C",
    accent: "#BADBD7",
    ink: "#414044",
    surface: "#232225",
    mist: "#FAEBBC"
  }
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#top", isAnchor: true },
  { label: "About", href: "#", isAnchor: false },
  { label: "Services", href: "#", isAnchor: false },
  { label: "Projects", href: "#", isAnchor: false },
  { label: "Blog", href: "#", isAnchor: false },
  { label: "Resources", href: "#", isAnchor: false },
  { label: "Contact", href: "#", isAnchor: false }
];
