import { Router } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {
  addQuestion,
  createAnswer,
  createAnswerComment,
  createAnswerReply,
  deleteAnswer,
  deleteAnswerComment,
  deleteAnswerReply,
  deleteQuestion,
  getAllAnswerRepliesBYCommentId,
  getAllCommentsByAnswerId,
  getAllQuestions,
  getAllQuestionsWithAnswer,
  getAnswersByQuestionId,
  getUserAnswers,
  getUserQuestions,
} from "../controllers/qaController.js";
import {
  validateAnswerInput,
  validateIdParam,
  validateQaCommentInput,
  validateQaSectionInput,
} from "../middleware/validationMiddleware.js";
const router = Router();
// question routes
router.post("/", authenticateUser, validateQaSectionInput, addQuestion);
router.get("/all-questions", getAllQuestions);
router.get("/", getAllQuestionsWithAnswer);
router.get("/questions/user/:id",authenticateUser,validateIdParam, getUserQuestions);
// answerComment routes
router.post(
  "/answer/:id/add-comment",
  authenticateUser,
  validateIdParam,
  validateQaCommentInput,
  createAnswerComment
);
router.get(
  "/answer/:id/all-comments",
  validateIdParam,
  getAllCommentsByAnswerId
);
router.post(
  "/answer/comments/:id/replies",
  authenticateUser,
  validateIdParam,
  validateQaCommentInput,
  createAnswerReply
);
router.get(
  "/answer/comments/:id/replies",
  validateIdParam,
  getAllAnswerRepliesBYCommentId
);

// answer routes
router.post(
  "/question/:id/add-answer",
  authenticateUser,
  validateIdParam,
  validateAnswerInput,
  createAnswer
);
router.get("/question/:id/answers", validateIdParam, getAnswersByQuestionId);
router.delete(
  "/question/:id",
  authenticateUser,
  validateIdParam,
  deleteQuestion
);
router.delete(
  "/question/answer/:id",
  authenticateUser,
  validateIdParam,
  deleteAnswer
);
router.delete(
  "/question/answer/comments/:id",
  authenticateUser,
  validateIdParam,
  deleteAnswerComment
);
router.delete(
  "/question/answer/comments/reply/:id",
  authenticateUser,
  validateIdParam,
  deleteAnswerReply
);

router.get("/answers/user/:id", authenticateUser,validateIdParam, getUserAnswers);



export default router;
