'use client';
import { useState, useTransition } from "react";
import { enrollStudent } from "@/actions/enrollActions";

export default function EnrollForm({ courseId }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await enrollStudent({ ...form, courseId });
      if (result.success) {
        setMessage("✅ Enrollment successful!");
        setForm({ name: "", email: "" });
      } else {
        setMessage("❌ " + result.error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 max-w-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Enroll Now</h2>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </form>
  );
}
