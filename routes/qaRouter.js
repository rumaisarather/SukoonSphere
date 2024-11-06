import { Router } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { addQuestion, createAnswer, getAllQuestions, getAllQuestionsWithAnswer, getAnswersByQuestionId } from "../controllers/qaController.js";
import { validateAnswerInput, validateIdParam, validateQaSectionInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/", authenticateUser, validateQaSectionInput, addQuestion);
router.get("/all-questions",  getAllQuestions);
router.get("/", getAllQuestionsWithAnswer);
router.post("/question/:id/add-answer",authenticateUser,validateIdParam,validateAnswerInput, createAnswer);
router.get("/question/:id/answers",validateIdParam, getAnswersByQuestionId);

export default router;
