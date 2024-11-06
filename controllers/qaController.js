import Question from "../models/qaSection/questionModel.js"; // Adjust the import based on your project structure
import { StatusCodes } from "http-status-codes";


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
  res.status(StatusCodes.CREATED)
    .json({ msg: "Question added successfully", question: newQuestion });
};
 export const getAllQuestions= async (req,res)=>{
   const questions = await Question.find({}); 
     res.status(StatusCodes.OK)
    .json({  questions });
 }