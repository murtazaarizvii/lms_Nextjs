// components/SearchBar.jsx
"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(q);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search courses..."
        className="border rounded-l px-3 py-2 w-80"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r">
        Search
      </button>
    </form>
  );
}
