// components/CourseGrid.jsx
import CourseCard from "./CourseCard";

export default function CourseGrid({ courses = [] }) {
  if (!courses || courses.length === 0) {
    return <p className="text-center text-gray-500">No courses available.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((c) => (
        <CourseCard key={c._id ?? c.id} course={c} />
      ))}
    </div>
  );
}
