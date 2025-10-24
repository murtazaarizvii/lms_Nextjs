import Image from "next/image";
import { getCourseById } from "@/actions/courseActions";
import EnrollForm from "@/components/EnrollForm";

export default async function CourseDetailPage({ params }) {
  const course = await getCourseById(params.id);

  if (!course) {
    return (
      <div className="text-center py-20 text-gray-500">
        Course not found 😢
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Course Header Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg p-6">
        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {course.title}
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              📘 {course.level}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
              ⏱ {course.duration}
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
              📚 {course.lessons} Lessons
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Instructor:{" "}
            <span className="text-blue-600">{course.instructor}</span>
          </p>
        </div>
      </div>

      {/* Enroll Form Section */}
      <div className="mt-12 flex justify-center">
        <EnrollForm courseId={course._id} />
      </div>
    </div>
  );
}
