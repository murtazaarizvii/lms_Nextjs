import Image from "next/image";
import { getUserProfile } from "../../actions/profileAction";

export default async function ProfilePage() {
  const email = "rizvimurtaza571@gmail.com"; // ✅ your actual email

  const result = await getUserProfile(email);

  if (!result.success) {
    return (
      <div className="text-center py-10 text-red-500">
        ❌ {result.message}
      </div>
    );
  }

  const user = result.data;

  return (
    <div className="container mx-auto py-10 max-w-3xl bg-white shadow-lg rounded-2xl p-8">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/student.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-indigo-500"
        />
        <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Account Details</h2>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
        <p><strong>Role:</strong> {user.role || "Student"}</p>
      </div>
    </div>
  );
}
