import Question from "../models/qaSection/questionModel.js"; // Adjust the import based on your project structure
import Answer from "../models/qaSection/answerModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/customErors.js";

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

export const getAllQuestionsWithAnswer = async (req, res) => {
  try {
    const questions = await Question.aggregate([
      {
        $lookup: {
          from: "answers", // Join the Answer collection
          localField: "_id", // Field in Question model (Question's ObjectId)
          foreignField: "answeredTo", // Field in Answer model (answeredTo is the reference to the Question)
          as: "answers", // The resulting array of answers will be placed in this field
        },
      },
      // Add a new field 'mostLikedAnswer' that will hold the most liked answer
      {
        $addFields: {
          mostLikedAnswer: {
            $arrayElemAt: [
              {
                $sortArray: {
                  input: "$answers",
                  sortBy: { likes: -1 }, // Sort answers by number of likes in descending order
                },
              },
              0, // Take the first (most liked) answer
            ],
          },
        },
      },
      // Optionally project only the necessary fields (question data + mostLikedAnswer)
      {
        $project: {
          questionText: 1,
          context: 1,
          author: 1,
          tags: 1,
          mostLikedAnswer: 1, // Include the most liked answer
        },
      },
    ]);

    // If no questions found
    if (!questions.length) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "No questions found." });
    }

    res.status(StatusCodes.OK).json({ questions });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Error fetching questions with answers." });
  }
};
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
// Get all answers for a specific question
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
