// import Link from "next/link";
import ProjectList from "@/components/ProjectList";

export default async function projectsPage() {
  try {
    const res = await fetch("https://api.github.com/users/GEEspinosa/repos");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const repos = await res.json();
    return (
      <main className="p-8">
        <h1 className="mt-4">Projects</h1>
        <ProjectList repos={repos} />
        {/* <pre>{JSON.stringify(repos, null, 2)}</pre> */}
      </main>
    );
  } catch (error: unknown) {
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    }

    return (
      <main className="p-8">
        <h1 className="mt-4">Projects</h1>
        <p className="text-red-600">Error: {message}</p>;
      </main>
    );
  }
}
