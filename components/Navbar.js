"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          <Link href="/" className="text-xl font-bold text-gray-800">LearnX</Link>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-50 border-t">
          <ul className="flex flex-col p-4 gap-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/auth/login" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded">Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
