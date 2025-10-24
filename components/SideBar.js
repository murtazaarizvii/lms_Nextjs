"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/courses", label: "Courses" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">LMS Portal</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg font-medium ${
              pathname === link.href
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
