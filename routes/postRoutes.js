import { Router } from "express";
const router = Router();

import { validatePostInput } from "../middleware/validationMiddleware.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
import { createPost, getAllPosts } from "../controllers/postController.js";

router.post(
  "/",
  authenticateUser,
  upload.single("imageUrl"),
  validatePostInput,
  createPost
);
router.get("/", getAllPosts);
export default router;
