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
  getAllCommentsByPostId,
  getAllPosts,
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
  "/:id/comments",
  validateIdParam,
  getAllCommentsByPostId
);
router.post("/comments/:id/replies", authenticateUser,validateIdParam, createReply);
router.get("/comments/:id/replies",validateIdParam, getAllRepliesBYCommentId);


export default router;
