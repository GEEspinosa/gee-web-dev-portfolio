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

export default function ProjectList({ repos }: { repos: Repo[] }) {
  return (
    <main className="bg-white">
    <ul className="space-y-6">
      {repos.map((repo) => (
        <li key={repo.id}>
          <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <h2>{repo.owner.login}</h2>
            {repo.description && (
              <p className="mt-2 text-gray-700 text-sm">{repo.description}</p>
            )}
            <div className="mt-4 flex space-x-4 text-gray-500 text-xs">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span>{repo.language ?? "N/A"}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </main>
  );
}
