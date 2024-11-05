import { Router } from "express";
const router = Router();

import {
  validateIdParam,
  validatePostInput,
} from "../middleware/validationMiddleware.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
import {
  createPost,
  createPostComment,
  createReply,
  deletePost,
  deletePostComment,
  deletePostCommentReply,
  getAllCommentsByPostId,
  getAllPosts,
  getAllPostsByUserId,
  getAllRepliesBYCommentId,
  likePosts,
} from "../controllers/postController.js";

router.post(
  "/",
  authenticateUser,
  upload.single("imageUrl"),
  validatePostInput,
  createPost
);
router.get("/", getAllPosts);
router.patch("/:id/like", authenticateUser, validateIdParam, likePosts);
router.post(
  "/:id/comments",
  authenticateUser,
  validateIdParam,
  createPostComment
);
router.get(
  "/user/:id",
  authenticateUser,
  validateIdParam,
  getAllPostsByUserId
);
router.get("/:id/comments", validateIdParam, getAllCommentsByPostId);
router.post("/comments/:id/replies", authenticateUser, validateIdParam, createReply);
router.get("/comments/:id/replies", validateIdParam, getAllRepliesBYCommentId);
router.delete("/:id", authenticateUser, validateIdParam, deletePost);
router.delete("/comments/:id", authenticateUser, validateIdParam, deletePostComment);
router.delete("/comments/replies/:id", authenticateUser, validateIdParam, deletePostCommentReply);
export default router;
