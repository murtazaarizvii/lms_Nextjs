import { loginUser } from "@/actions/userActions";

export default function LoginPage() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const res = await loginUser(formData);
        if (res.success) {
          console.log("✅ Login:", res.message);
        } else {
          console.error("❌ Error:", res.message);
        }
      }}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-12 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input name="email" type="email" placeholder="Email" className="w-full border p-2 rounded" />
      <input name="password" type="password" placeholder="Password" className="w-full border p-2 rounded" />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
