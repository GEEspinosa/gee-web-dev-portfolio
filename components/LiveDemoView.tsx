"use client";

// import { useState, useEffect } from "react";

interface LiveDemoViewProps {
  demoURL: string;
}

// interface Demo {
//   // id: number;
//   // name: string;
//   // owner: { login: string };
//   // description: string | null;
//   html_url: string;
//   // stargazers_count: number;
//   // forks_count: number;
//   // language: string;
// }

export default function LiveDemoView({ demoURL }: LiveDemoViewProps) {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const [data, setData] = useState<Demo | null>(null);

  

  // if (loading) return <div>Loading . . .</div>;
  // if (error) return <div className="text-red-600">Error: {error}</div>;
  // if (!data) return null;

  return (
    <main className="bg-white">
        {/* Embedded demo if possible */}
        <iframe
          src={`${demoURL}`}
          title="placeholder"
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
     
    </main>
  );
}
