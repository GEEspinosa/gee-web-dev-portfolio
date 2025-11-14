import Link from "next/link";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
      <Link href="/" className="text-2xl font-semibold text-gray-900">
        GE
      </Link>
      <nav className="flex space-x-8 text-gray-700 text-sm font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="group inline-flex items-center border-b border-transparent text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
          >
            {label}
            <span className="ml-1 arrow-rotate-left">→</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
