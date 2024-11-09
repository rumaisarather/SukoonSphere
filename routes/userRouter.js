import { Router } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {
  changeUserProfile,
  followOrUnfollowUser,
  getAllFollowers,
  getAllFollowing,
} from "../controllers/userController.js";
const router = Router();

router.patch("/change-profile", authenticateUser, changeUserProfile);
router.patch("/follow/:id", authenticateUser, followOrUnfollowUser);
router.get("/followers", authenticateUser, getAllFollowers);
router.get("/following", authenticateUser, getAllFollowing);
export default router;
