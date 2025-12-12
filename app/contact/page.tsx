import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {



  return (
    <main className="p-8 max-w-5xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — CTA + INFO */}
        <section className="space-y-6 ">
          <h1 className="text-4xl font-bold tracking-tight font-sans font-semibold">
            Get in Touch
          </h1>

          <p className="text-gray-700 leading-relaxed font-mono ">
            If you want to talk about frontend development, creative
            technology, music production, collaborations, or anything else,
            I’d love to hear from you.  
          </p>

          <p className="text-gray-700 leading-relaxed font-mono">
            Reach out and I’ll get back to you as soon as possible.  
            I’m based in Portland, OR and open to freelance, full-time, 
            or creative project conversations.
          </p>

          {/* Contact Email */}
          <div className="flex items-center gap-3 font-mono">
            <Mail className="w-5 h-5 text-gray-600" />
            <a 
              href="mailto:gabiespinosa138@gmail.com"
              className="text-blue-700 hover:underline"
            >
              gabiespinosa138@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 font-mono">
            <a
              href="https://www.linkedin.com/in/geespinosa"
              target="_blank"
              className="flex items-center gap-2 text-gray-800 p-4 bg-gray-200 p-4 rounded hover:text-white hover:bg-black transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/_abriel_spinosa/" 
              target="_blank"
              className="flex items-center gap-2 text-gray-800 p-4 bg-gray-200 rounded hover:text-white hover:bg-black transition"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>

        </section>

        {/* RIGHT SIDE — FORM */}
        <section>
          <ContactForm />
        </section>

      </div>
    </main>
  );
}