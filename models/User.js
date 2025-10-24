import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, default: "Student" },
  bio: { type: String, default: "" },
  avatar: { type: String, default: "/images/default-avatar.png" },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
