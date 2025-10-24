import Link from "next/link";
import { getCourses } from "../../actions/courseActions";
import Image from "next/image";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Explore Our Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No courses available right now.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link href={`/courses/${course._id}`} key={course._id}>
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full h-52">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>⏱ {course.duration}</span>
                    <span>⭐ {course.level}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
