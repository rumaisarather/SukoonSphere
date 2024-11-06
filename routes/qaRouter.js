import { Router } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { addQuestion, getAllQuestions } from "../controllers/qaController.js";
import { validateQaSectionInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/", authenticateUser, validateQaSectionInput, addQuestion);
router.get("/",  getAllQuestions);

export default router;
