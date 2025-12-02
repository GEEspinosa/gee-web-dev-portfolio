"use client";

import { useState, useEffect } from "react";

interface GitHubRepoViewProps {
  repoURL: string;
}

interface Repo {
  id: number;
  name: string;
  owner: { login: string };
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GitHubRepoView({ repoURL }: GitHubRepoViewProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Repo | null>(null);

  useEffect(() => {
    async function fetchRepo() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          repoURL
        );
        if (!res.ok) throw new Error("Error");
        const data: Repo = await res.json();
        setData(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Unknown Error");
      } finally {
        setLoading(false)
      }
    }

    if (repoURL) {
      fetchRepo();
    }
  }, [repoURL]);


  if (loading) return <div>Loading . . .</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>
  if (!data) return null

  return (
    <main className="bg-white">
      <ul className="space-y-6">
        <li key={data.id}>
          <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {data.name}
            </a>
            <h2>{data.owner.login}</h2>
            {data.description && (
              <p className="mt-2 text-gray-700 text-sm">{data.description}</p>
            )}
            <div className="mt-4 flex space-x-4 text-gray-500 text-xs">
              <span>⭐ {data.stargazers_count}</span>
              <span>🍴 {data.forks_count}</span>
              <span>{data.language ?? "N/A"}</span>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}
