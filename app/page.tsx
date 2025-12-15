import FloodFillLanding from "@/components/FloodFillLanding";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen">
      <FloodFillLanding />

      {/* This div is the content over the flood fill, styles untouched */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <h1 className="text-4xl font-semibold mb-4 font-sans">
          Gabriel Eduardo Espinosa
        </h1>

        <p className="text-lg mb-6 font-mono">
          Audio Engineer | Web Developer
        </p>

        <p className="max-w-xl font-mono text-gray-700">
          I’m a recording engineer and web developer exploring creative tools
          inspired by audio, sound, and community-driven arts
        </p>
      </div>
    </main>
  );
}



