import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <nav className="flex space-x-6">
        <Link href="/" className="text-xl font-bold bg-black">
          GE
        </Link>
        <Link href="/about" className="text-blue-600 underline">
          About Me →
        </Link>
        <Link href="/projects" className="text-blue-600 underline">
          My Projects →
        </Link>
        <Link href="/contact" className="text-blue-600 underline">
          Say Hello →
        </Link>
      </nav>
    </header>
  );
}
