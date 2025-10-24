"use server";
import { connectDB } from "@/lib/db";
import Enrollment from "@/models/Enrollment";

export async function getDashboardData() {
  try {
    await connectDB();

    const totalEnrollments = await Enrollment.countDocuments();
    const latestEnrollments = await Enrollment.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    return {
      success: true,
      stats: {
        totalEnrollments,
      },
      latestEnrollments,
    };
  } catch (error) {
    console.error("Dashboard Error:", error);
    return { success: false, message: "Failed to load dashboard" };
  }
}
