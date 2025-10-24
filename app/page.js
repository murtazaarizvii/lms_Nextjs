// app/page.js
import { getCourses } from "@/actions/courseActions";
import CourseGrid from "@/components/CourseGrid";
import SearchBar from "@/components/SearchBar";

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <div className="container py-10 mx-auto px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Welcome to <span className="text-blue-600">LearnX</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn anytime, anywhere — high quality courses to level up your skills.
        </p>
      </section>

      <div className="mb-8">
        {/* SearchBar is client — it currently doesn't filter server data.
            You can hook it to a client-side search or to a server action later. */}
        <SearchBar />
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
        <CourseGrid courses={courses} />
      </section>
    </div>
  );
}
