"use server";
import { connectDB } from "@/lib/db";
import Enrollment from "@/models/Enrollment";

export async function enrollStudent(formData) {
  try {
    await connectDB();

    const { name, email, courseId } = formData;

    if (!name || !email || !courseId) {
      throw new Error("Missing required fields");
    }

    const enrollment = new Enrollment({ name, email, courseId });
    await enrollment.save();

    console.log("✅ Enrollment saved successfully!");
    return { success: true };
  } catch (error) {
    console.error("❌ Enrollment Error:", error.message);
    return { success: false, error: error.message };
  }
}
