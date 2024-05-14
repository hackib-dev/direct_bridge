export const menuItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Our Products" },
  { href: "/", label: "Money Guidance" },
  { href: "/", label: "FAQs" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Contact Us" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Log In" },
  { href: "/", label: "Get Started" },
];

export interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}
