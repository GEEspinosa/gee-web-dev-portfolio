// import Link from "next/link";

//about page related metadata here...


export default function AboutPage() {
  
  return (
    <main className="p-8">
      {/* <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link> */}
      <section>
        <h1 className="text-3xl font-bold mt-6">About Me</h1>
        <p className="mt-4 text-lg leading-relaxed">
          I’m a software engineer passionate about building creative,
          human-centered apps.
        </p>
      </section>
    </main>
  );
}
