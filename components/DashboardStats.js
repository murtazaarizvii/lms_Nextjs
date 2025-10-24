export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm text-gray-500">Enrolled</h4>
        <p className="text-2xl font-bold mt-2">3</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm text-gray-500">Completed</h4>
        <p className="text-2xl font-bold mt-2">1</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm text-gray-500">Progress</h4>
        <p className="text-2xl font-bold mt-2">42%</p>
      </div>
    </div>
  );
}
