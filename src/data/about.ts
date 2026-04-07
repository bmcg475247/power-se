import type { AboutPageContent } from "../types/content";

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: "About Power Systems Experts",
    title: "Electrical consulting built on field experience.",
    description:
      "Electrical safety consultants specializing in arc flash, CSA Z462 compliance, and power system risk assessment across Canada."
  },
  story: {
    eyebrow: "Who We Are",
    title: "Clear engineering support for complex power systems",
    paragraphs: [
      "At Power Systems Experts, we specialize in electrical consulting for industrial and commercial facilities. Located in Ontario, we deliver services that improve safety, ensure compliance, and strengthen system performance. Our work includes arc flash hazard analysis, coordination studies, short circuit evaluations, and power quality analysis.",
      "We combine engineering knowledge with real site experience to provide clear and effective solutions. Whether you are responding to a problem or planning a system upgrade, our team brings focus, professionalism, and a commitment to results.",
      "We believe in doing the job right, standing by our clients, and offering support even after the project is complete. Your power system may be complex, but we make it easier to manage and safer to operate."
    ]
  },
  team: {
    eyebrow: "Our Team",
    title: "Decades of engineering, investigation, and project experience",
    description:
      "At Power Systems Experts, our team brings together decades of experience in electrical engineering, field investigations, and project management.",
    members: [
      {
        name: "Mike Lehman, PMP",
        role: "Business Development Manager",
        slug: "mike-lehman",
        bio: "Mike brings over 30 years of diverse experience in automation to his role leading Business Development at Power Systems Experts Inc. He’s passionate about building strong client relationships and driving long-term growth."
      },
      {
        name: "Kevin Fitzpatrick, C.E.T.",
        role: "President / Engineering Manager",
        slug: "kevin-fitzpatrick",
        bio: "Kevin serves as the Engineering Manager at PSE, responsible for reviewing all reports. With over 10 years of experience, he specializes in arc flash studies and power systems analysis, having visited hundreds of commercial and industrial sites."
      },
      {
        name: "Ben McGinnis",
        role: "Power System Specialist",
        slug: "ben-mcginnis",
        bio: "Ben focuses on modeling systems and conducting studies. With a passion for solving engineering problems of all types, he excels in delivering practical solutions through simple and concise reports."
      }
    ]
  },
  metrics: {
    eyebrow: "Our Work In Numbers",
    title: "Measured by the results we deliver",
    description:
      "We measure success by the results we deliver, the trust we build, and the impact we make across every project.",
    items: [
      { label: "Projects completed", value: "+200" },
      { label: "Arc flash labels printed", value: "+15K" },
      { label: "Years of experience", value: "+30" },
      { label: "Training sessions delivered", value: "+120" }
    ]
  },
  clients: {
    eyebrow: "Clients & Partners",
    title: "Trusted by industrial and commercial facility teams",
    items: [
      { name: "Corteva Agriscience", slug: "corteva" },
      { name: "Agropur", slug: "agropur" },
      { name: "PepsiCo Frito-Lay", slug: "pepsi-frito" },
      { name: "Advanced Safety & Energy", slug: "ase" }
    ]
  },
  cta: {
    title: "Book Your Free Consultation",
    description:
      "Tell us about your facility, project, or electrical safety concern. We’ll help you understand the best next step.",
    primaryLabel: "Send Consultation Request"
  }
};
