import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userAvatar: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    datePublished: {
      type: Date,
      default: Date.now,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    // New fields for tracking the original commenter's info
    commentUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentUsername: {
      type: String,
      required: true,
    },
    commentUserAvatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Reply", replySchema);
