import { StatusCodes } from "http-status-codes";
import Post from "../models/postModel.js";
import { formatImage } from "../middleware/multer.js";
import cloudinary from "cloudinary";
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
