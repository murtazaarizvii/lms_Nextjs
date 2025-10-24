"use server";

import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function getUserProfile(email) {
  try {
    await connectDB();

    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return { success: false, message: "User not found" };
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(user)),
    };
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    return { success: false, message: "Server error while fetching profile" };
  }
}
