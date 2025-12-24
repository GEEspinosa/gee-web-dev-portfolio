"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



const links = [
  // { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();


  return (
    <header className="relative z-20 flex items-center justify-between p-6 border-b border-gray-200 bg-white ">
      <Link href="/" className="text-2xl font-semibold text-gray-900 ">
        GEE
      </Link>
      <nav className="flex space-x-8 text-gray-700 text-sm font-medium">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group p-2 inline-flex items-center border-b border-transparent text-gray-700 hover:border-gray-900 hover:text-gray-900 transition ${
                isActive ? "active" : ""
              }`}
            >
              {label}
              <span className="ml-1 arrow-rotate-left">→</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
