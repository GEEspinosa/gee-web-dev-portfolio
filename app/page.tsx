import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Gabriel E. Espinosa</h1>
      <p className="text-lg">Full Stack Web Developer</p>
      <p className="mt-2 text-sm text-gray-600">
        React • Node.js • Tailwind • SQL
      </p>
      <Link href="/about" className="mt-4 text-blue-600 underline">
        About Me →
      </Link>
      <Link href="/projects" className="mt-4 text-blue-600 underline">
        My Projects →
      </Link>
      <Link href="/contact" className="mt-4 text-blue-600 underline">
        Say Hello →
      </Link>
    </main>
  );
}
