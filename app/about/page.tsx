export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main content */}
        <section className="md:col-span-2 space-y-6">
          {/* header + body */}
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight font-sans">About</h1>

            <p className="text-gray-600 max-w-prose">
              Notes on approach, collaboration, and current interests.
            </p>
          </header>
          <hr className="border-gray-200 max-w-prose" />

          <div className="space-y-5 leading-relaxed text-gray-700 max-w-prose font-sans">
            <p>Most work problems benefit from slowing down at the start…</p>

            <p>Simple systems tend to last…</p>

            <p>Collaboration works best when expectations are visible…</p>

            <p>Tools are situational…</p>

            <p>
              Current interests sit where technology, sound, and place
              intersect…
            </p>
          </div>
        </section>

        {/* Metadata / aside */}
        <aside className="space-y-6 border-l border-gray-200 pl-6 text-sm opacity-90 md:opacity-100">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
              Location
            </h2>
            <p className="font-sans">Portland, Oregon</p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
              Background
            </h2>
            <p className="font-sans">Audio engineering, philosophy, software development</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
