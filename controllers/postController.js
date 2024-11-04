import { StatusCodes } from "http-status-codes";
import Post from "../models/postModel.js";
import { formatImage } from "../middleware/multer.js";
import cloudinary from "cloudinary";
import { BadRequestError } from "../errors/customErors.js";
import PostComments from "../models/postCommentsModel.js";
import PostReplies from "../models/postReplyModel.js";
import postModel from "../models/postModel.js";
import postReplyModel from "../models/postReplyModel.js";
export const createPost = async (req, res) => {
  const newPost = {
    createdBy: req.user.userId,
    username: req.user.username,
    userAvatar: req.user.avatar,
    ...req.body,
  };
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newPost.imageUrl = response.secure_url;
    newPost.imagePublicId = response.public_id;
  }
  await Post.create(newPost);
  res.status(StatusCodes.CREATED).json({ msg: "Post uploaded sucessesfully" });
};
export const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  const postsWithLikes = posts.map((post) => ({
    ...post.toObject(),
    totalLikes: post.likes ? post.likes.length : 0,
  }));
  res.status(StatusCodes.OK).json({ posts: postsWithLikes });
};

export const likePosts = async (req, res) => {
  const userId = req.user.userId;
  const postId = req.params.id;

  const post = await Post.findById(postId);
  if (!post) {
    throw new BadRequestError("Post not found");
  }

  if (post?.likes?.includes(userId)) {
    post.likes = post.likes.filter((id) => id.toString() !== userId.toString());
    await post.save();
    return res
      .status(StatusCodes.OK)
      .json({ message: "Post unliked successfully", post });
  } else {
    post.likes.push(userId);
    await post.save();
    return res
      .status(StatusCodes.OK)
      .json({ message: "Post liked successfully", post });
  }
};

export const createPostComment = async (req, res) => {
  const { content } = req.body;
  const { id: postId } = req.params;
  const comment = await PostComments.create({
    postId,
    createdBy: req.user.userId,
    username: req.user.username,
    userAvatar: req.user.avatar,
    content,
  });
  const post = await Post.findById(postId);
  post.comments.push(comment._id);
  await post.save();
  res.status(StatusCodes.CREATED).json({
    message: "Comment created successfully",
    comment,
  });
};

export const getAllCommentsByPostId = async (req, res) => {
  const { id: postId } = req.params;
  const postComments = await PostComments.find({ postId });
  res.status(StatusCodes.OK).json(postComments);
};

export const createReply = async (req, res) => {
  const { content } = req.body;
  const { id: parentId } = req.params;

  const comment = await PostComments.findById(parentId);
  const parentReply = await PostReplies.findById(parentId);

  if (!comment && !parentReply) {
    throw new BadRequestError("Parent comment or reply not found");
  }

  const reply = await PostReplies.create({
    commentId: comment ? comment._id : parentReply.commentId, 
    createdBy: req.user.userId,
    username: req.user.username,
    userAvatar: req.user.avatar,
    content,
    commentUserId: comment ? comment.createdBy : parentReply.createdBy,
    commentUsername: comment ? comment.username : parentReply.username,
    commentUserAvatar: comment ? comment.userAvatar : parentReply.userAvatar,
  });

  res.status(StatusCodes.CREATED).json({
    message: "Reply created successfully",
    reply,
  });
};
export const getAllRepliesBYCommentId = async (req, res) => {
    const { id: commentId } = req.params;
 const replies = await postReplyModel.find({ commentId });
     if (replies.length === 0) {
       return res
         .status(StatusCodes.OK)
         .json({ message: "No replies found for this comment", replies: [] });
     }

     res.status(StatusCodes.OK).json({ replies });

};
