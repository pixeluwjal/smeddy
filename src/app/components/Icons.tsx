import React, { SVGProps } from 'react';

// Define a common type for icon props
interface IconProps extends SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

// A generic wrapper for all icons
export const Icon = ({ children, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);
export const PhoneIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.37 1.61.72 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.36 6.36l1.27-1.27a2 2 0 0 1 2.11-.45c.73.35 1.53.6 2.34.72a2 2 0 0 1 1.73 2.01z"></path>
  </Icon>
);

export const MapPinIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </Icon>
);


export const MenuIcon = (props: IconProps) => (
  <Icon {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </Icon>
);

export const CloseIcon = (props: IconProps) => (
  <Icon {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </Icon>
);

export const LightbulbIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.5.5 2.7 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
    <path d="M11 22h2c1.1 0 2-.9 2-2 0-.2-.1-.5-.2-.7l-4.2-4.2c-.3-.3-.5-.7-.8-1.3-.2-.5-.4-.9-.6-1.1-.6-.6-1.5-1-2.4-1.1-.9-.1-1.8.1-2.5.7-.8.6-1.3 1.5-1.4 2.4-.1.9.1 1.8.7 2.5.6.8 1.5 1.3 2.4 1.4.9.1 1.7-.1 2.3-.7L10 20.2c.2.2.4.5.6.8.3.6.5 1 .8 1.3"></path>
    <path d="M9 18.2c.2-.2.4-.5.6-.8.3-.6.5-1 .8-1.3.6-.6 1.5-1 2.4-1.1"></path>
  </Icon>
);

export const GlobeIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  </Icon>
);

export const GridIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
  </Icon>
);

export const MicIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="22"></line>
  </Icon>
);

export const UserIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </Icon>
);

export const MailIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="M22 6L12 13 2 6"></path>
  </Icon>
);

export const MessageIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </Icon>
);

export const ArrowIcon = (props: IconProps) => (
  <Icon {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </Icon>
);

export const ChevronIcon = (props: IconProps) => (
  <Icon {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </Icon>
);
