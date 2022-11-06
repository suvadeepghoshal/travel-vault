import NextLink from 'next/link';

const navItems = [
  { id: 1, title: 'TRAVEL VAULT', href: '/', logo: true },
  {
    id: 2,
    title: 'View Source',
    href: 'https://github.com/suvadeepghoshal/travel-vault',
    logo: false
  }
];

export function Navbar({
  path,
  transparent
}: {
  path: string;
  transparent: boolean;
}): JSX.Element {
  return (
    <nav
      className={
        (transparent
          ? 'absolute top-0 z-50 w-full'
          : 'relative bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {navItems.map(function ({
          id,
          title,
          href,
          logo
        }: {
          id: number;
          title: string;
          href: string;
          logo: boolean;
        }): JSX.Element {
          return (
            <div
              key={id}
              className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start"
            >
              {logo ? (
                <NavItem
                  key={id}
                  href={href}
                  path={path}
                  transparent={transparent}
                >
                  {title}
                </NavItem>
              ) : (
                <button
                  className={
                    (transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-green-500 text-white active:bg-green-600') +
                    ' ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0'
                  }
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <NavItem
                    key={id}
                    href={href}
                    path={path}
                    transparent={transparent}
                  >
                    {title}
                  </NavItem>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
  path,
  transparent
}: {
  href: string;
  children: string;
  path: string;
  transparent: boolean;
}): JSX.Element {
  const active = path === href;
  return (
    <NextLink
      className={
        (transparent ? 'text-white' : 'text-gray-800') +
        ' mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed'
      }
      href={href}
      passHref
      scroll={false}
    >
      {children}
    </NextLink>
  );
}
