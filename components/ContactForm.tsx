"use client";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { contactFormSchema } from "../lib/schemas/contactSchema";

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
  const [isSending, setIsSending] = useState(false);

  console.log("Rendering ContactForm");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      await contactFormSchema.validate(formData, { abortEarly: false });

      const response = await fetch("https://web-dev-site-contact-form-backend.onrender.com/api/contact", {
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
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setStatus(validationError.errors.join(", "));
        console.log("Validation errors:", validationError.errors);
      } else {
        setStatus("Error sending message.");
        console.log(validationError);
      }
    } finally {
      setIsSending(false);
    }
  }

  useEffect(() => {
    if (status !== null) {
      console.log("Status changed:", status);
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-md flex flex-col gap-4"
      noValidate
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Message"
        required
        rows={5}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      />
      <button
        type="submit"
        disabled={isSending}
        className={`py-3 rounded-md transition ${
          isSending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {isSending ? "Sending..." : "Send"}
      </button>
      {status && (
        <>
          <p
            aria-live="polite"
            className={`mt-2 text-center text-sm ${
              status.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        </>
      )}
    </form>
  );
}
