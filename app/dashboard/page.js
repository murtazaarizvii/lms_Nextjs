import Sidebar from "@/components/SideBar";
import { getDashboardData } from "@/actions/dashboardActions";

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="flex min-h-[80vh] bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Section */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          🎓 Student Dashboard
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Total Enrollments
            </h3>
            <p className="text-4xl font-bold text-blue-600">
              {data.stats.totalEnrollments}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Active Courses
            </h3>
            <p className="text-4xl font-bold text-green-600">3</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Completed
            </h3>
            <p className="text-4xl font-bold text-purple-600">1</p>
          </div>
        </div>

        {/* Latest Enrollments Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            📋 Recent Enrollments
          </h3>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Course ID</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.latestEnrollments.map((enroll, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3">{enroll.name}</td>
                  <td className="p-3">{enroll.email}</td>
                  <td className="p-3">{enroll.courseId}</td>
                  <td className="p-3">
                    {new Date(enroll.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {data.latestEnrollments.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-gray-500 italic"
                  >
                    No enrollments yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
