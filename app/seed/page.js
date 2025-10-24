// app/seed/page.js
import { seedCourses } from "@/actions/courseActions";

export const metadata = { title: "Seed Courses" };

export default function SeedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Seed Courses</h2>
        <p className="text-sm text-gray-600 mb-4">
          Click the button below to insert initial sample courses into the database.
        </p>

        {/* Using server action as form action — Next.js will call seedCourses on submit */}
        <form action={seedCourses}>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Seed Database
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500">
          Note: This will remove existing courses and insert sample data.
        </p>
      </div>
    </div>
  );
}
