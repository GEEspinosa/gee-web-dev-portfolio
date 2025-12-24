export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main content */}
        <section className="md:col-span-2 space-y-6">
          {/* header + body */}
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">About</h1>

            <p className="text-gray-600 max-w-prose">
              Notes on approach, collaboration, and current interests.
            </p>

            <p className="text-sm text-gray-500 max-w-prose">
              This site documents ongoing work across software, audio, and
              spatial research.
            </p>
          </header>

          <hr className="border-gray-200 max-w-prose my-2" />

          <div className="space-y-5 leading-relaxed text-gray-700 max-w-prose font-sans">
            <p>
              Most projects benefit from slowing down at the start, defining a
              clear ideal outcome while staying realistic about time, budget,
              and tools. Open conversations with everyone involved help uncover
              hidden challenges and align expectations.
            </p>

            <p>
              Simple, well-designed systems last because every part serves the
              whole. When details fit precisely, complexity fades into clarity,
              making the system easier to understand, share, and build upon.
            </p>

            <p>
              Collaboration thrives on transparency. Clear communication breaks
              down silos, builds trust, and keeps teams connected. Without it,
              misunderstandings grow and teamwork fractures.
            </p>

            <p>
              Tools should match intention. Sometimes a screwdriver is better
              than a multitool because it fits the task. Meaningful creation
              happens when people engage deeply with their process, even as
              automation changes what is possible.
            </p>

            <p>
              Current interests live at the intersection of technology, sound,
              and place. Spaces carry stories that shape creative work, more
              than backgrounds, they are active meaning-makers influencing every
              step.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-600">
              Related work and experiments live in the{" "}
              <a
                href="/projects"
                className="underline underline-offset-4 hover:text-gray-800"
              >
                Projects directory
              </a>
              .
            </p>
          </div>
        </section>

        {/* Metadata / aside */}
        <aside className="space-y-6 md:border-l border-gray-200 md:pl-6 text-sm opacity-90 md:opacity-100">
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
            <p className="font-sans">
              Audio engineering, philosophy, software development
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
              Tech Stack
            </h2>
            <p className="font-sans">
              JavaScript, TypeScript, HTML, CSS, Tailwind, Styled-Components,
              Node.js, Next.js, Express, SQL
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
              Learning
            </h2>
            <p className="font-sans">C++, Python, REW, JUCE</p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
              Audio Tools
            </h2>
            <p className="font-sans">
              Pro Tools, FabFilter, Valhalla, UAD, Waves
              <br />
              Neumann U87 AI, KM 184, AKG 414 ULS-B, Sennheiser MKH 8090, plus
              various dynamic microphones
              <br />
              Multichannel audio preamps and Lynx converters
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-500">
              Current Focus
            </h2>
            <p className="font-sans">
              Convolution and algorithmic reverb, spatial audio analysis
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
