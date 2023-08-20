import Link from "next/link";
import { classNames } from "~/utils/classNames";

const NavBarItem = (item: { current: boolean; name: string; href: string }) => (
  <Link
    key={item.name}
    href={item.href}
    className={classNames(
      item.current
        ? "bg-gray-800 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white",
      "rounded-md px-3 py-2 text-sm font-medium"
    )}
    aria-current={item.current ? "page" : undefined}
  >
    {item.name}
  </Link>
);
export default NavBarItem;
