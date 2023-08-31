import { type NavItem } from "~/types/navItem";
import Link from "next/link";

const navigation: NavItem[] = [
  {
    name: "About",
    href: "https://github.com/suvadeepghoshal/travel-vault/blob/master/README.md",
    current: false,
  },
  {
    name: "Licensing",
    href: "https://github.com/suvadeepghoshal/travel-vault/blob/master/LICENSE",
    current: false,
  },
];
const Footer = (): JSX.Element => (
  <>
    <footer className="bg-gray-900 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="mb-4 flex items-center sm:mb-0">
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
              Travel Vault
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            {navigation.map((navItem: NavItem) => {
              return (
                <li key={navItem?.name}>
                  <a
                    href={navItem?.href}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {navItem?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {`${new Date().getFullYear()} `}
          <a
            href="https://github.com/suvadeepghoshal/travel-vault"
            className="hover:underline"
          >
            Travel Vault™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  </>
);
export default Footer;
