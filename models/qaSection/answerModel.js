import mongoose from "mongoose";

const Answer = new mongoose.Schema(
  {
    context: {
      type: String,
      required: true,
    },
    author: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    answeredTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question", // Reference to the Question model
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Answer", Answer);
