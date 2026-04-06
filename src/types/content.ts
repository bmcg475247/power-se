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
};

export type ValueProp = {
  title: string;
  description: string;
};

export type IndustryItem = {
  title: string;
  description: string;
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
