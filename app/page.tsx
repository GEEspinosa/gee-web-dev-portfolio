import FloodFillLanding from "@/components/FloodFillLanding";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full h-full bg-gray-50 px-6 text-center overflow-hidden">
      <FloodFillLanding />

      <div className="relative z-10 max-w-xl mx-auto text-gray-900">
        <h1 className="text-4xl font-bold mb-4 font-sans font-semibold">
          Gabriel Eduardo Espinosa
        </h1>

        <p className="text-lg font-medium mb-6 font-mono">
          Audio Engineer | Web Developer
        </p>

        <p className="text-gray-700 leading-relaxed font-mono">
          I’m a recording engineer and web developer exploring creative tools
          inspired by audio, sound, and community-driven arts
        </p>
      </div>
    </main>
  );
}


