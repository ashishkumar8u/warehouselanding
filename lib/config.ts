import { NavItem, FooterSection } from './types';

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Warehouse Management', href: '/services/warehouse-management' },
      { label: 'Logistics Solutions', href: '/services/logistics' },
      { label: 'Inventory Control', href: '/services/inventory' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { label: 'Small Business', href: '/solutions/small-business' },
      { label: 'Custom Solutions', href: '/solutions/custom' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'News & Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Warehouse Management', href: '/services/warehouse-management' },
      { label: 'Logistics Solutions', href: '/services/logistics' },
      { label: 'Inventory Control', href: '/services/inventory' },
      { label: 'Consulting', href: '/services/consulting' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Support Center', href: '/support' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Get in Touch', href: '/contact' },
      { label: 'Sales Inquiry', href: '/contact?type=sales' },
      { label: 'Support', href: '/contact?type=support' },
      { label: 'Partnerships', href: '/contact?type=partnership' },
    ],
  },
];

export interface SocialLinkConfig {
  name: string;
  href: string;
  iconName: 'Facebook' | 'Twitter' | 'Instagram' | 'Linkedin' | 'Youtube';
}

export const socialLinks: SocialLinkConfig[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    iconName: 'Facebook',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    iconName: 'Twitter',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    iconName: 'Instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    iconName: 'Linkedin',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    iconName: 'Youtube',
  },
];

export const companyInfo = {
  name: 'Warehouse Solutions',
  tagline: 'Streamlining your warehouse operations',
  address: '123 Business Street, Suite 100',
  city: 'New York, NY 10001',
  phone: '+1 (555) 123-4567',
  email: 'info@warehousesolutions.com',
};

