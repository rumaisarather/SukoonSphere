import { Router } from "express";
const router = Router();

import {
  validateIdParam,
  validatePostInput,
} from "../middleware/validationMiddleware.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
import {
  createComment,
  createPost,
  getAllPosts,
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
  createComment
);
export default router;
