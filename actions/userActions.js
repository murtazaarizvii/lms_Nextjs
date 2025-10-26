"use server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function loginUser(email, password) {
  try {
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Normally you'd hash and compare passwords here
    // For demo purposes:
    if (user.password !== password) {
      return { success: false, message: "Invalid password" };
    }

    return {
      success: true,
      message: "Login successful",
      user: JSON.parse(JSON.stringify(user)),
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Server error" };
  }
}
export async function registerUser(name, email, password) {
  try {
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    return { success: true, message: "Registration successful" };
  } catch (error) {
    console.error("Register error:", error);
    return { success: false, message: "Server error" };
  }
}
