import mongoose from "mongoose";
import { TAGS } from "../../utils/constants";

const Answer = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      username: { type: String, required: true },
      avatar: { type: String },
    },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Answer", Answer);
