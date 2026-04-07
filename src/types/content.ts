export type NavItem = {
  label: string;
  href: string;
  isAnchor?: boolean;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
};

export type ValueProp = {
  title: string;
  description: string;
};

export type IndustryItem = {
  title: string;
  description: string;
};

export type DeliverableItem = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceDetailItem = {
  title: string;
  slug: string;
  paragraphs: string[];
  bullets: string[];
};

export type ServicesPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ServiceDetailItem[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
  };
};

export type TeamMember = {
  name: string;
  role: string;
  slug: string;
  bio: string;
};

export type WorkMetric = {
  label: string;
  value: string;
};

export type ClientLogo = {
  name: string;
  slug: string;
};

export type AboutPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    members: TeamMember[];
  };
  metrics: {
    eyebrow: string;
    title: string;
    description: string;
    items: WorkMetric[];
  };
  clients: {
    eyebrow: string;
    title: string;
    items: ClientLogo[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
  };
};

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
};

export type BlogPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  posts: BlogPost[];
};

export type HomepageContent = {
  hero: HeroContent;
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: ValueProp[];
  };
  deliverables: {
    eyebrow: string;
    title: string;
    description: string;
    items: DeliverableItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FAQItem[];
  };
  industries: {
    eyebrow: string;
    title: string;
    description: string;
    items: IndustryItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
};
