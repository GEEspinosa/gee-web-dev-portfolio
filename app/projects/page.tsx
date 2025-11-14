import Link from "next/link";

export default function projectsPage() {
  return (
    <main className="p-8">
        <Link href="/">Back</Link>
      <h1 className="mt-4">Projects</h1>
      <ul>
        <li>
          <h2>Personal Film Photography Website</h2>
        </li>
        <li>
          <h2>Attrition: A Browser War Game</h2>
        </li>
      </ul>
    </main>
  );
}
