// models/Course.js
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "/images/course1u.png" },
  duration: { type: String, default: "" },
  level: { type: String, default: "Beginner" },
  lessons: { type: Number, default: 0 },
  instructor: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
