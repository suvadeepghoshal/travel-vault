const links = [
  {
    id: 1,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suvadeep-ghoshal-778426197/'
  },
  {
    id: 2,
    title: 'GitHub',
    href: 'https://github.com/suvadeepghoshal'
  },
  {
    id: 3,
    title: 'MIT License',
    href: 'https://github.com/suvadeepghoshal/travel-vault/blob/main/LICENSE'
  }
];

export function FooterLink(): JSX.Element {
  return (
    <li>
      {links.map(function ({
        id,
        title,
        href
      }: {
        id: number;
        title: string;
        href: string;
      }) {
        return (
          <a
            key={id}
            className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
            href={href}
          >
            {title}
          </a>
        );
      })}
    </li>
  );
}
