export interface NavItem {
  href: string;
  label: string;
  /** Sheet reference shown alongside the link. */
  index: string;
}

export const navItems: NavItem[] = [
  { href: "/work", label: "Selected Work", index: "01" },
  { href: "/profile", label: "Profile", index: "02" },
  { href: "/contact", label: "Contact", index: "03" },
];
