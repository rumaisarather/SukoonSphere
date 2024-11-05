import { Router } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { addQuestion } from "../controllers/qaController.js";
import { validateQaSectionInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/", authenticateUser, validateQaSectionInput, addQuestion);

export default router;
