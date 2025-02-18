import Image from "next/image";
import Link from "next/link";
import IconFacebook from "./icons/icon-facebook";
import IconInstagram from "./icons/icon-instagram";
import IconPinterest from "./icons/icon-pinterest";
import IconTwitter from "./icons/icon-twitter";
import Wrapper from "./ui/wrapper";

// Define types for list items and sections
interface ListItem {
  id: number;
  name: string;
  href: string;
}

interface ListSection {
  id: number;
  title: string;
  items: ListItem[];
}

// Define types for social items
interface SocialItem {
  id: number;
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const lists: ListSection[] = [
  {
    id: 1,
    title: "Features",
    items: [
      { id: 1, name: "Link Shortening", href: "/" },
      { id: 2, name: "Branded Links", href: "/" },
      { id: 3, name: "Analytics", href: "/" },
    ],
  },
  {
    id: 2,
    title: "Resources",
    items: [
      { id: 1, name: "Blog", href: "/" },
      { id: 2, name: "Developers", href: "/" },
      { id: 3, name: "Support", href: "/" },
    ],
  },
  {
    id: 3,
    title: "Company",
    items: [
      { id: 1, name: "About", href: "/" },
      { id: 2, name: "Our Team", href: "/" },
      { id: 3, name: "Careers", href: "/" },
      { id: 4, name: "Contact", href: "/" },
    ],
  },
];

const socials: SocialItem[] = [
  { id: 1, platform: "Facebook", icon: IconFacebook, href: "/" },
  { id: 2, platform: "Twitter", icon: IconTwitter, href: "/" },
  { id: 3, platform: "Pinterest", icon: IconPinterest, href: "/" },
  { id: 4, platform: "Instagram", icon: IconInstagram, href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground pb-14 pt-13 lg:py-18">
      <Wrapper className="grid justify-items-center gap-12 lg:grid-cols-6 lg:items-start lg:gap-0">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Shortly Home"
          className="lg:col-span-2 lg:justify-self-start"
        >
          <Image
            src="/logos/logo-light.svg"
            alt="Shortly logo"
            width={121}
            height={33}
          />
        </Link>

        {/* Navigation lists */}
        <nav
          aria-label="Footer Navigation"
          className="lg:col-span-3 lg:w-full lg:justify-self-start"
        >
          <ul className="grid gap-10 lg:grid-cols-3 lg:gap-0">
            {lists.map(({ id, title, items }) => (
              <li
                key={id}
                className="grid justify-items-center gap-5 lg:content-start lg:justify-items-start"
              >
                <span className="text-base font-bold text-background">
                  {title}
                </span>
                <ul className="grid justify-items-center gap-2 lg:justify-items-start">
                  {items.map(({ id, name, href }) => (
                    <li key={id}>
                      <Link
                        href={href}
                        className="text-base font-medium -tracking-5 text-muted transition-all hover:text-accent"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <ul className="flex items-center gap-6 lg:justify-self-end">
          {socials.map(({ id, platform, icon: Icon, href }) => (
            <li key={id}>
              <Link href={href} aria-label={`Visit our ${platform} page`}>
                <Icon className="hover:fill-accent transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </footer>
  );
}
