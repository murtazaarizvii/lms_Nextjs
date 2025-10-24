import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);
