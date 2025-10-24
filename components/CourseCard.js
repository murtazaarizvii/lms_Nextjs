// components/CourseCard.jsx
export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="h-44 w-full">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{course.instructor} • {course.level}</p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{course.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-600 font-medium">{course.duration}</span>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
        </div>
      </div>
    </div>
  );
}
