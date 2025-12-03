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
  language: string; // primary language from main API
}

export default function GitHubRepoView({ repoURL }: GitHubRepoViewProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Repo | null>(null);
  const [languages, setLanguages] = useState<Record<string, number> | null>(null);

  // Helper: parse owner and repo name from repoURL
  function parseRepoURL(url: string) {
    // Example URL: https://api.github.com/repos/GEEspinosa/gee-web-dev-portfolio
    const parts = url.split("/");
    const owner = parts[parts.length - 2];
    const repo = parts[parts.length - 1];
    return { owner, repo };
  }

  useEffect(() => {
    async function fetchRepo() {
      setLoading(true);
      setError(null);
      setData(null);
      setLanguages(null);

      try {
        const res = await fetch(repoURL);
        if (!res.ok) throw new Error("Error fetching repository info");
        const data: Repo = await res.json();
        setData(data);

        // Fetch languages once we have repo info
        const { owner, repo } = parseRepoURL(repoURL);
        const langRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
        if (!langRes.ok) throw new Error("Error fetching languages");
        const langs = await langRes.json();
        setLanguages(langs);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Unknown error");
      } finally {
        setLoading(false);
      }
    }

    if (repoURL) {
      fetchRepo();
    }
  }, [repoURL]);

  if (loading) return <div>Loading . . .</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (!data) return null;

  // Calculate total bytes of all languages
  const totalBytes = languages ? Object.values(languages).reduce((a, b) => a + b, 0) : 0;

  return (
    <main className="bg-white p-6 rounded-md shadow-md">
      <div className="space-y-4">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-blue-600 hover:underline"
        >
          {data.name}
        </a>

        <p className="text-gray-700 text-sm">
          <strong>Owner:</strong> {data.owner.login}
        </p>

        {data.description && (
          <p className="text-gray-600">{data.description}</p>
        )}

        <div className="flex space-x-6 text-gray-500 text-sm">
          <span>⭐ Stars: {data.stargazers_count}</span>
          <span>🍴 Forks: {data.forks_count}</span>
          <span>📝 Primary: {data.language ?? "N/A"}</span>
        </div>

        {languages && totalBytes > 0 && (
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Languages:</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(languages).map(([lang, bytes]) => {
                const percent = ((bytes / totalBytes) * 100).toFixed(1);
                return (
                  <div
                    key={lang}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono"
                    title={`${lang}: ${percent}%`}
                  >
                    {lang} {percent}%
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
