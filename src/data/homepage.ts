import type { HomepageContent } from "../types/content";
import { siteConfig } from "./site";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export const homepageContent: HomepageContent = {
  hero: {
    eyebrow: "Electrical Engineers Serving Canada",
    title: "Arc Flash Compliance\n& Power Systems Optimization",
    description:
      "Arc flash studies should be updated on a regular cycle, and detailed labeling expectations are becoming more enforceable. Is your facility current, documented, and ready for inspection?",
    primaryCta: {
      label: "Request a Quote",
      href: "#"
    },
    secondaryCta: {
      label: `Call ${siteConfig.phone}`,
      href: phoneHref
    },
    stats: [
      { value: "CSA Z462", label: "aligned arc flash and electrical safety guidance" },
      { value: "Industrial", label: "support for complex facilities and operations" },
      { value: "Practical", label: "engineering recommendations your team can use" }
    ]
  },
  services: {
    eyebrow: "Engineering Services",
    title: "Electrical safety and power system expertise for your facility",
    description:
      "Focused studies and consulting support for facilities that need compliant documentation, safer operations, and stronger system reliability.",
    items: [
      {
        title: "Arc Flash Analysis",
        description:
          "Support compliance and worker protection with incident energy analysis, equipment labeling, and documentation aligned to CSA Z462 and accepted engineering practice."
      },
      {
        title: "Power System Studies",
        description:
          "Short-circuit, coordination, and system performance studies that help facilities improve protection, reliability, and upgrade planning."
      },
      {
        title: "Engineering Investigations",
        description:
          "Identify root causes behind major power issues and receive practical engineering direction that helps restore system performance with confidence."
      }
    ]
  },
  why: {
    eyebrow: "",
    title: "Why Work With Power Systems Experts?",
    items: [
      {
        title: "Custom Arc Flash Solutions",
        description:
          "Receive site-specific arc flash assessments, mitigation guidance, and compliance strategies shaped around your actual facility conditions."
      },
      {
        title: "Regulatory Alignment",
        description:
          "Support compliance efforts with engineering work aligned to CSA Z462, NFPA 70E, and recognized electrical safety expectations."
      },
      {
        title: "Risk Reduction",
        description:
          "Reduce exposure to electrical hazards, unplanned downtime, and costly issues by identifying problems early and prioritizing practical fixes."
      },
      {
        title: "Clear Labeling & Documentation",
        description:
          "Get accurate, readable documentation and labeling that helps your team work more safely and maintain a clearer record of system conditions."
      }
    ]
  },
  industries: {
    eyebrow: "Industries Served",
    title: "Trusted by facility teams across these sectors",
    description:
      "Power Systems Experts supports organizations where worker safety, power reliability, and code-aware documentation are operational priorities.",
    items: [
      {
        title: "Industrial & Manufacturing",
        description:
          "Production lines, process plants, and industrial operations with complex electrical distribution systems."
      },
      {
        title: "Commercial Buildings",
        description:
          "Commercial properties and campuses that need practical engineering direction for compliance and system performance."
      },
      {
        title: "Utilities & Infrastructure",
        description:
          "Organizations managing critical electrical assets, investigations, and reliability-sensitive operations."
      },
      {
        title: "Institutional Facilities",
        description:
          "Sites where dependable power, documented safety practices, and maintainable systems support daily operations."
      }
    ]
  },
  cta: {
    eyebrow: "",
    title: "Ready to Get Started?",
    description:
      "Whether you need an arc flash study, power system analysis, or help with electrical safety compliance, Power Systems Experts can help. Reach out for an initial consultation.",
    primaryCta: {
      label: "Request a Quote",
      href: "#"
    },
    secondaryCta: {
      label: `Call ${siteConfig.phone}`,
      href: phoneHref
    }
  }
};
