import type { ServicesPageContent } from "../types/content";

export const servicesPageContent: ServicesPageContent = {
  hero: {
    eyebrow: "Electrical Engineering Services",
    title: "Services",
    description:
      "Power Systems Experts supports facilities with arc flash, compliance, power quality, coordination, short circuit, and investigation services."
  },
  intro: {
    eyebrow: "What We Do",
    title: "Practical engineering support for safer, more reliable facilities",
    description:
      "Each service is built around clear documentation, actionable recommendations, and technical work that helps your team understand risk and move forward with confidence."
  },
  items: [
    {
      title: "Arc Flash Hazard Analysis",
      slug: "arc-flash-hazard-analysis",
      paragraphs: [
        "Arc flash studies analyze the incident energy available at each location in the electrical system. This is crucial for determining the proper level of PPE personnel must wear to operate safely in each area. These reports are performed in accordance to the CSA Z462 standard on electrical safety requirements for employees.",
        "Arc flash studies can be completed through on-site data collection by PSE or remote data collection by the customer. We deliver a comprehensive report detailing system recommendations with arc flash labels to be mounted on the equipment."
      ],
      bullets: ["CSA Z462 Compliant", "Complete Turn-key Solution With Arc Flash Labels", "Fast Turn Around Times"]
    },
    {
      title: "CSA Z462 Compliance Assessment",
      slug: "csa-z462-compliance-assessment",
      paragraphs: [
        "The CSA Z462 Compliance Assessment reviews electrical safety programs and equipment to ensure alignment with the latest standards for workplace electrical safety. This includes verifying arc flash labels, equipment condition, lockout/tagout procedures, PPE usage, and energized work practices.",
        "We perform a detailed site inspection and provide a compliance gap analysis, highlighting areas that fall short of CSA Z462 requirements. The final report outlines corrective actions and includes a clear roadmap for achieving full compliance, reducing electrical risk, and improving overall safety performance."
      ],
      bullets: ["Compliance Action Plan", "Insurance Readiness Check", "LOTO & PPE Review"]
    },
    {
      title: "Power Quality Report",
      slug: "power-quality-report",
      paragraphs: [
        "Our power quality analysis identifies electrical disturbances that impact system reliability, equipment lifespan, and energy efficiency. We monitor voltage levels, power quality, current harmonics, flicker, transients, dips, swells, and unbalance to uncover hidden issues that may be causing disruptions or premature equipment failure.",
        "All reports are prepared in compliance with IEEE 519 standards and include detailed measurements, data visualizations, and actionable recommendations. By improving power quality, facilities can reduce downtime, extend equipment life, improve energy performance, and meet utility or insurance requirements. We provide both short-term troubleshooting and long-term monitoring options tailored to your needs."
      ],
      bullets: ["Harmonics monitoring & mitigation", "Equipment protection and lifespan improvement", "Power factor improvement"]
    },
    {
      title: "Coordination Studies",
      slug: "coordination-studies",
      paragraphs: [
        "The coordination study examines the tripping characteristics of protective devices in the system. By properly aligning the time-current characteristics of each device, faults are able to be isolated to the specific feeder branch at which they occurred. This is critical for minimizing system downtime.",
        "This analysis also highlights gaps in device settings that could lead to unnecessary shutdowns or equipment damage. By fine-tuning these settings, we help improve system reliability, ensure selective isolation, and support safer maintenance practices."
      ],
      bullets: ["Minimize System Downtime", "Improve System Reliability", "Ensure Safety and Compliance"]
    },
    {
      title: "Short Circuit Reports",
      slug: "short-circuit-reports",
      paragraphs: [
        "The short circuit report identifies the maximum available fault currents at various points in the electrical system. These values are critical for evaluating whether existing protective devices are adequately rated to interrupt potential faults without failure. The analysis is conducted in accordance with recognized standards such as CSA C22.1 and IEEE 551.",
        "Our report includes a clear summary of equipment that exceeds interrupting ratings, helping to prevent catastrophic failures and support compliance with installation codes. We provide practical solutions such as device replacements or upstream protection adjustments to ensure the system is safely protected under worst case fault conditions."
      ],
      bullets: ["Equipment Evaluation", "Electrical Shock Hazard Analysis", "Code Compliance"]
    },
    {
      title: "Engineering Investigations",
      slug: "engineering-investigations",
      paragraphs: [
        "Our engineering investigation service is designed to uncover the root cause of complex electrical issues with unknown origins. Whether it is unexplained equipment failure, power quality disturbances, or recurring faults, we conduct a detailed forensic analysis of your system to identify and resolve the problem.",
        "We approach every investigation with the rigor of a forensic team, reviewing data, inspecting equipment, and challenging assumptions. If needed, we will stand by your side to defend findings in front of insurance companies, utilities, or third parties. Our goal is simple: get answers, fix the issue, and protect your operation."
      ],
      bullets: ["Root Cause Analysis", "Forensic System Review", "Expert Client Support"]
    }
  ],
  cta: {
    title: "Need help choosing the right service?",
    description:
      "Tell us what is happening at your facility and we can help point you toward the right study, assessment, or investigation.",
    primaryLabel: "Send a Project Inquiry"
  }
};
