import type { BlogPageContent } from "../types/content";

export const blogPageContent: BlogPageContent = {
  hero: {
    eyebrow: "Blog",
    title: "Insights & Technical Articles",
    description:
      "Practical guidance on arc flash studies, CSA Z462 compliance, power quality, and electrical engineering decisions for industrial and commercial facilities."
  },
  posts: [
    {
      title: "Arc Flash Compliance for Manufacturing Facilities: What Teams Should Know",
      slug: "arc-flash-compliance-manufacturing-facilities",
      category: "Arc Flash",
      excerpt:
        "Manufacturing sites often have complex distribution systems, equipment changes, and production demands. Here are the compliance and documentation items facility teams should keep on their radar.",
      readTime: "5 min read",
      date: "Coming soon",
      featured: true
    },
    {
      title: "When to Update an Arc Flash Study",
      slug: "when-to-update-arc-flash-study",
      category: "Compliance",
      excerpt:
        "A practical look at the triggers that can make an arc flash study outdated, including system changes, protective device updates, and documentation gaps.",
      readTime: "4 min read",
      date: "Coming soon"
    },
    {
      title: "What a Power Quality Investigation Can Reveal",
      slug: "power-quality-investigation",
      category: "Power Quality",
      excerpt:
        "Power quality issues can show up as nuisance trips, equipment interruptions, or unexplained downtime. A structured investigation helps separate symptoms from root causes.",
      readTime: "6 min read",
      date: "Coming soon"
    },
    {
      title: "Coordination Studies and Facility Reliability",
      slug: "coordination-studies-facility-reliability",
      category: "System Studies",
      excerpt:
        "Selective coordination is about more than fault clearing. It helps facility teams understand protection, reduce avoidable outages, and make stronger upgrade decisions.",
      readTime: "5 min read",
      date: "Coming soon"
    }
  ]
};
