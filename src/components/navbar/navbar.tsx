import NextLink from 'next/link';
import { ReactNode } from 'react';

const navItems = [{ id: 1, title: 'Travel Vault', href: '/' }];

export function Navbar({ path }: { path: string }): JSX.Element {
  return (
    <div>
      {navItems.map(function ({
        id,
        title,
        href
      }: {
        id: number;
        title: string;
        href: string;
      }): ReactNode {
        return (
          <NavItem
            key={id}
            href={href}
            path={path}
          >
            {title}
          </NavItem>
        );
      })}
    </div>
  );
}

function NavItem({
  href,
  children,
  path
}: {
  href: string;
  children: string;
  path: string;
}): JSX.Element {
  const active = path === href;
  return (
    <NextLink
      href={href}
      passHref
      scroll={false}
    >
      {children}
    </NextLink>
  );
}
