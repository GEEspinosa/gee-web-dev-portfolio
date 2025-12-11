"use client";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  text: string;
};

const initialFormData = { name: "", email: "", subject: "", text: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [status, setStatus] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData(initialFormData);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
      />
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Message"
        required
      />
      <button>Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}
