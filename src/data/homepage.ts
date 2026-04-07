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
        href: "/services#arc-flash-hazard-analysis",
        description:
          "Support compliance and worker protection with incident energy analysis, equipment labeling, and documentation aligned to CSA Z462 and accepted engineering practice."
      },
      {
        title: "Power System Studies",
        href: "/services#coordination-studies",
        description:
          "Short-circuit, coordination, and system performance studies that help facilities improve protection, reliability, and upgrade planning."
      },
      {
        title: "Engineering Investigations",
        href: "/services#engineering-investigations",
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
  deliverables: {
    eyebrow: "Project Deliverables",
    title: "Clear documentation your team can use after the study is complete",
    description:
      "Every project is built around practical outputs: labels, reports, diagrams, and recommendations that help your team understand risk, document compliance, and move forward with confidence.",
    items: [
      {
        title: "Arc Flash Labels",
        description:
          "Equipment labels with the information your team needs to identify arc flash risk, PPE expectations, and equipment-specific safety details."
      },
      {
        title: "Engineering Reports",
        description:
          "Clear reports summarizing study assumptions, findings, calculations, risk areas, and recommended next steps."
      },
      {
        title: "One-Line Diagrams",
        description:
          "Updated one-line diagrams that help your team understand system layout, equipment relationships, and the basis of the study."
      },
      {
        title: "Actionable Recommendations",
        description:
          "Practical engineering recommendations prioritized around safety, reliability, compliance, and maintainable next steps."
      },
      {
        title: "Compliance Documentation",
        description:
          "Documentation aligned with electrical safety expectations so your facility is better prepared for internal reviews, audits, and inspections."
      }
    ]
  },
  faq: {
    eyebrow: "Common Questions",
    title: "Answers before you start a project",
    description:
      "A few practical details facility teams often ask before starting an arc flash study, system assessment, or engineering investigation.",
    items: [
      {
        question: "How often should an arc flash study be updated?",
        answer:
          "Arc flash studies should be reviewed on a regular cycle and whenever major electrical system changes occur, such as equipment replacements, protection setting changes, facility expansions, or utility changes. Many facilities use a five-year review cycle as a planning benchmark, but your actual needs depend on your system and applicable safety requirements."
      },
      {
        question: "Do you serve facilities outside Ontario?",
        answer:
          "Yes. Power Systems Experts can support facilities across Canada, depending on project scope, site access, and data collection requirements. Some studies can be supported remotely when accurate system information is available."
      },
      {
        question: "What information do you need to start?",
        answer:
          "Helpful starting information includes one-line diagrams, equipment lists, utility or transformer data, breaker and fuse information, previous studies, and the reason for the project. If you do not have everything ready, we can help identify what is needed."
      },
      {
        question: "Can you help after an electrical incident?",
        answer:
          "Yes. We provide engineering investigation support for facilities facing major power issues, equipment failures, recurring faults, or unexplained system behavior. The goal is to identify root causes and provide practical next steps."
      },
      {
        question: "What do we receive when the project is complete?",
        answer:
          "Typical deliverables may include an engineering report, arc flash labels, one-line diagram updates, findings, and recommendations. The exact deliverables depend on the service and project scope."
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
        title: "Healthcare",
        description:
          "Hospitals, clinics, and healthcare facilities where electrical safety, documentation, and reliable power support patient care."
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
