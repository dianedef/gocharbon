export interface ButtonProps {
  href: string;
  target?: '_blank' | '_self';
  color?: string;
  darkColor?: string;
}

export interface CardProps {
  color?: string;
}

export interface PillProps {
  color?: string | undefined;
  darkColor?: string | undefined;
}

export interface ThemeToggleProps {
  class?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  url: string;
}

export interface MobileSocialsProps {
  socials: SocialLink[];
}

export interface BaseNavigationProps {
  pageTitle?: string;
  navigationItems?: NavigationItem[];
  socialIcons?: SocialLink[];
}

export interface BaseFooterProps {
  backToTop?: boolean;
}

export interface LocalFontConfig {
  name: string;
  display: 'swap' | 'block' | 'fallback' | 'optional';
  selector: string;
  fallback: string;
  preload?: boolean;
  style: 'normal' | 'italic';
  path: string;
}

export interface LocalFontProps {
  config: LocalFontConfig[];
} 