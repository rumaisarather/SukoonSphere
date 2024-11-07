import Question from "../models/qaSection/questionModel.js"; // Adjust the import based on your project structure
import Answer from "../models/qaSection/answerModel.js";
import Comment from "../models/qaSection/answerCommentModel.js";
import Replies from "../models/qaSection/answerReplyModel.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/customErors.js";
import mongoose from "mongoose";
// question controllers
export const addQuestion = async (req, res) => {
  const { questionText, context, tags } = req.body;

  const similarQuestions = await Question.find({
    $text: { $search: questionText }, // Using text search for efficiency
  }).select("-answers"); // Exclude answers to reduce payload size

  if (similarQuestions.length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Similar questions already exist.",
      similarQuestions,
    });
  }

  const newQuestion = await Question.create({
    questionText,
    context,
    author: {
      userId: req.user.userId,
      username: req.user.username,
      avatar: req.user.avatar,
    },
    tags,
  });
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Question added successfully", question: newQuestion });
};
export const getAllQuestions = async (req, res) => {
  const questions = await Question.find({});
  res.status(StatusCodes.OK).json({ questions });
};
export const getUserQuestions = async (req, res) => {
  const { userId } = req.user;
  const questions = await Question.find({ "author.userId": userId });
  res.status(StatusCodes.OK).json({ questions });
};

export const getAllQuestionsWithAnswer = async (req, res) => {
  const questions = await Question.aggregate([
    {
      $lookup: {
        from: "answers",
        localField: "_id",
        foreignField: "answeredTo",
        as: "answers",
      },
    },
    {
      $match: {
        "answers.0": { $exists: true }, // Only include questions with at least one answer
      },
    },
    {
      $addFields: {
        mostLikedAnswer: {
          $arrayElemAt: [
            {
              $sortArray: {
                input: "$answers",
                sortBy: { likes: -1 }, // Sort by number of likes in descending order
              },
            },
            0, // Get the first (most liked) answer
          ],
        },
      },
    },
    {
      $project: {
        questionText: 1,
        context: 1,
        author: 1,
        tags: 1,
        mostLikedAnswer: 1,
      },
    },
  ]);

  if (!questions.length) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "No questions found with answers." });
  }

  res.status(StatusCodes.OK).json({ questions });
};

// answer controllers
export const createAnswer = async (req, res) => {
  const { userId, username, avatar } = req.user; // Assuming req.user contains the authenticated user's data
  const { id: questionId } = req.params; // Assuming questionId is passed as a URL param

  // Check if the question exists
  const question = await Question.findById(questionId);
  if (!question) {
    throw new BadRequestError("Question not found");
  }

  // Create the new answer and associate it with the question
  const newAnswer = await Answer.create({
    context: req.body.context, // Assuming the answer text is passed in the body
    author: {
      userId,
      username,
      avatar,
    },
    answeredTo: questionId, // Link the answer to the question
  });

  // Optionally, add the answer to the question's 'answers' array (bi-directional relationship)
  question.answers.push(newAnswer._id);
  await question.save();

  // Send success response
  res.status(StatusCodes.CREATED).json({
    msg: "Answer added successfully",
    answer: newAnswer,
  });
};
export const getAnswersByQuestionId = async (req, res) => {
  const { id: questionId } = req.params;

  // Find all answers for the given questionId
  const answers = await Answer.find({ answeredTo: questionId });

  // Check if no answers are found
  if (answers.length === 0) {
    throw new BadRequestError("No answers found for this question.");
  }

  // Respond with the found answers
  res.status(StatusCodes.OK).json({ answers });
};
export const getUserAnswers = async (req, res) => {
  const { userId } = req.user;
  const answers = await Answer.find({ "author.userId": userId });
  res.status(StatusCodes.OK).json({ answers });
};
// answer comment controllers
export const createAnswerComment = async (req, res) => {
  const { content } = req.body;
  const { id: postId } = req.params;
  const comment = await Comment.create({
    postId,
    createdBy: req.user.userId,
    username: req.user.username,
    userAvatar: req.user.avatar,
    content,
  });
  const answer = await Answer.findById(postId);
  answer.comments.push(comment._id);
  await answer.save();

  res.status(StatusCodes.CREATED).json({
    message: "Comment created successfully",
    comment,
  });
};
export const getAllCommentsByAnswerId = async (req, res) => {
  const { id: postId } = req.params;
  const postComments = await Comment.find({ postId });
  res.status(StatusCodes.OK).json({ comments: postComments });
};
// answerReply controllers
export const createAnswerReply = async (req, res) => {
  const { content } = req.body;
  const { id: parentId } = req.params;

  const comment = await Comment.findById(parentId);
  const parentReply = await Replies.findById(parentId);

  if (!comment && !parentReply) {
    throw new BadRequestError("comment or reply not found");
  }

  const reply = await Replies.create({
    commentId: comment ? comment._id : parentReply.commentId,
    createdBy: req.user.userId,
    username: req.user.username,
    userAvatar: req.user.avatar,
    content,
    commentUserId: comment ? comment.createdBy : parentReply.createdBy,
    commentUsername: comment ? comment.username : parentReply.username,
    commentUserAvatar: comment ? comment.userAvatar : parentReply.userAvatar,
  });

  comment.replies.push(reply._id);
  await comment.save();
  res.status(StatusCodes.CREATED).json({
    message: "Reply created successfully",
    reply,
  });
};
export const getAllAnswerRepliesBYCommentId = async (req, res) => {
  const { id: commentId } = req.params;
  const replies = await Replies.find({ commentId });
  if (replies.length === 0) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No replies found for this comment", replies: [] });
  }

  res.status(StatusCodes.OK).json({ replies });
};
// delete controllers
export const deleteQuestion = async (req, res) => {
  const { id: postId } = req.params;
  const session = await mongoose.startSession();
  session.startTransaction();

  const question = await Question.findById(postId).session(session);
  if (!question) {
    throw new BadRequestError("Question not found");
  }
  console.log({
    question,
    user: req.user,
  });
  if (
    question.author.userId.toString() !== req.user.userId &&
    req.user.role !== "admin"
  ) {
    throw new UnauthorizedError(
      "You are not authorized to delete this question"
    );
  }

  const answers = await Answer.find({ answeredTo: postId }).session(session);
  if (answers.length > 0) {
    const answerIds = answers.map((answer) => answer._id);

    const comments = await Comment.find({
      postId: { $in: answerIds },
    }).session(session);
    if (comments.length > 0) {
      const commentIds = comments.map((comment) => comment._id);

      await Replies.deleteMany({ commentId: { $in: commentIds } }).session(
        session
      );

      await Comment.deleteMany({ postId: { $in: answerIds } }).session(session);
    }

    await Answer.deleteMany({ answeredTo: postId }).session(session);
  }

  await Question.deleteOne({ _id: postId }).session(session);

  await session.commitTransaction();
  session.endSession();

  res.status(StatusCodes.OK).json({
    message: "Question deleted successfully",
  });
};

export const deleteAnswer = async (req, res) => {
  const { id: answerId } = req.params;

  const session = await mongoose.startSession();
  session.startTransaction();

  const answer = await Answer.findById(answerId).session(session);
  if (!answer) {
    throw new BadRequestError("Answer not found");
  }

  if (
    answer.author.userId.toString() !== req.user.userId &&
    req.user.role !== "admin"
  ) {
    throw new UnauthorizedError("You are not authorized to delete this answer");
  }

  await Comment.deleteMany({ postId: answerId }).session(session);

  const comments = await Comment.find({ postId: answerId });
  const commentIds = comments.map((comment) => comment._id);
  await Replies.deleteMany({ commentId: { $in: commentIds } }).session(session);

  const question = await Question.findOne({ answers: answerId }).session(
    session
  );
  if (question) {
    question.answers.pull(answerId);
    await question.save({ session });
  }

  await Answer.deleteOne({ _id: answerId }).session(session);

  await session.commitTransaction();

  res.status(200).json({ message: "Answer deleted successfully" });

  session.endSession();
};

export const deleteAnswerComment = async (req, res) => {
  const { id: commentId } = req.params;

  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new BadRequestError("Comment not found");
  }

  if (comment.createdBy.toString() !== req.user.userId) {
    throw new UnauthorizedError(
      "You are not authorized to delete this comment"
    );
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  await Replies.deleteMany({ commentId }).session(session);

  // Delete the comment itself
  await Comment.findByIdAndDelete(commentId).session(session);

  await session.commitTransaction();
  res.status(StatusCodes.OK).json({ message: "Comment deleted successfully" });
  session.endSession();
};
export const deleteAnswerReply = async (req, res) => {
  const { id: replyId } = req.params;
  const reply = await Replies.findById(replyId);
  if (!reply) {
    throw new BadRequestError("Reply not found");
  }
  if (reply.createdBy.toString() !== req.user.userId) {
    throw new UnauthorizedError("You are not authorized to delete this reply");
  }
  await Replies.findByIdAndDelete(replyId);
  res.status(StatusCodes.OK).json({ message: "Reply deleted successfully" });
};
