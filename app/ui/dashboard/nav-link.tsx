import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkItem = ({
  name,
  href,
  renderIcon,
}: {
  name: string;
  href: string;
  renderIcon: () => React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
        {
          "bg-sky-50 text-blue-600": pathname === href,
        }
      )}
    >
      {renderIcon()}
      <p className="hidden md:block">{name}</p>
    </Link>
  );
};

export default LinkItem;
