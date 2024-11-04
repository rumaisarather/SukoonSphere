import { StatusCodes } from "http-status-codes";
import Post from "../models/postModel.js";
import { formatImage } from "../middleware/multer.js";
import cloudinary from "cloudinary";
import { BadRequestError } from "../errors/customErors.js";
import PostComments from "../models/postComments.js";
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
  const post = await Post.create(newPost);
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

export const createComment = async(req,res)=>{
  const { content } = req.body;
    const { id:postId } = req.params;

  const comment = await PostComments.create({
      postId,
      createdBy: req.user.userId,
      username: req.user.username,
      userAvatar: req.user.avatar,
      content,
    });
     res.status(StatusCodes.CREATED).json({
       message: "Comment created successfully",
       comment,
     });
}
