// actions/courseActions.js
"use server";

import { connectDB } from "@/lib/db";
import Course from "@/models/Course";
import { revalidatePath } from "next/cache";

/**
 * Get all courses from DB
 */
export async function getCourses() {
  await connectDB();
  const courses = await Course.find().sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(courses)); // remove mongoose internals
}
export async function getCourseById(id) {
  await connectDB();
  const course = await Course.findById(id);
  return course ? JSON.parse(JSON.stringify(course)) : null;
}

/**
 * Seed initial courses (run once via /seed page)
 * This function will delete existing courses and insert defaults.
 */
export async function seedCourses(formData) {
  await connectDB();

  const data = [
    {
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development with modern tools and practices.",
      image: "/images/course1u.png",
      duration: "12 Weeks",
      level: "Beginner",
      lessons: 24,
      instructor: "Ali Raza",
    },
    {
      title: "UI/UX Design Fundamentals",
      description: "Master the fundamentals of user interface and user experience design.",
      image: "/images/course2.png",
      duration: "8 Weeks",
      level: "Intermediate",
      lessons: 18,
      instructor: "Sara Ahmed",
    },
    {
      title: "Next.js & React Mastery",
      description: "Build modern, production-ready applications using Next.js and React.",
      image: "/images/course3.png",
      duration: "10 Weeks",
      level: "Advanced",
      lessons: 20,
      instructor: "Murtaza Rizvi",
    },
  ];

  // Clear old and insert new
  await Course.deleteMany({});
  await Course.insertMany(data);

  // Revalidate homepage if you use Next caching
  try {
    revalidatePath("/"); // makes cached page regenerate
  } catch (e) {
    // ignore if not using caching
    console.log("revalidatePath not available:", e?.message || e);
  }

  // Return success flag (useful for showing message)
  return { ok: true, inserted: data.length };
}
