import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user","contributor","admin"],
    default: "user",
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  avatar: String,
  avatarPublicId: String,
  phone: String,
  location: String,

});

export default mongoose.model("user", userSchema)