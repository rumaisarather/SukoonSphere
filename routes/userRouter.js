import { Router } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { getUser } from "../controllers/userController.js";
const router = Router();

router.get("/", authenticateUser, getUser);

export default router;
