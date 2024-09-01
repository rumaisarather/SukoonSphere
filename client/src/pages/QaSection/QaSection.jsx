import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { questions as _questions } from "@/utils/qaSection";
import bgImg from "../../assets/images/qa.jpg";
import { HeaderImg } from "@/components";

const questions = [..._questions];

const QaSection = () => {
  return (
    <>
      <HeaderImg currentPage="QA Section" bgImg={bgImg} />

      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Questions & Answers
        </h1>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </>
  );
};
const QuestionCard = ({ question }) => {
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);

  return (
    <div className="mb-8 border border-gray-300 p-6 rounded-lg shadow-lg bg-white transition duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
          alt={`${question.askedBy.name}'s avatar`}
          className="w-12 h-12 rounded-full mr-3 border-2 border-blue-500"
        />
        <div>
          <p className="font-semibold text-blue-600">{question.askedBy.name}</p>
          <p className="text-gray-500 text-sm">{question.dateAsked}</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {question.question}
      </h2>
      <p className="text-gray-700 mb-4">{question.details}</p>
      <div className="flex flex-wrap mb-4">
        {question.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-3 py-1 rounded-full transition duration-200 hover:bg-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        {question.answers
          .slice(0, showMoreAnswers ? question.answers.length : 1)
          .map((answer) => (
            <AnswerCard key={answer.id} answer={answer} />
          ))}
        {question.answers.length > 1 && (
          <button
            onClick={() => setShowMoreAnswers((prev) => !prev)}
            className="mt-4 text-blue-500 hover:underline font-medium"
          >
            {showMoreAnswers ? "Show Less Answers" : "Show More Answers"}
          </button>
        )}
      </div>
    </div>
  );
};

const AnswerCard = ({ answer }) => {
  const [showMoreComments, setShowMoreComments] = useState(false);

  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-4 bg-gray-50 p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
          alt={`${answer.answeredBy.name}'s avatar`}
          className="w-10 h-10 rounded-full mr-2 border-2 border-blue-500"
        />
        <div>
          <p className="font-semibold text-blue-600">
            {answer.answeredBy.name}
          </p>
          <p className="text-gray-500 text-sm">{answer.dateAnswered}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-2">{answer.answerText}</p>
      <div className="flex items-center mt-2 mb-4">
        <AiOutlineLike className="text-gray-600 mr-1" />
        <span>{answer.upvotes}</span>
      </div>
      {answer.comments.length > 0 && (
        <>
          <h3 className="font-semibold text-gray-700">Comments:</h3>
          <div className="ml-4">
            {answer.comments
              .slice(0, showMoreComments ? answer.comments.length : 1)
              .map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            {answer.comments.length > 1 && (
              <button
                onClick={() => setShowMoreComments((prev) => !prev)}
                className="mt-2 text-blue-500 hover:underline font-medium"
              >
                {showMoreComments ? "Show Less Comments" : "Show More Comments"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const CommentCard = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex flex-col mb-2">
      <div className="flex items-start gap-2 mb-1 flex-col md:flex-row md:items-center">
        <p className="font-semibold text-nowrap">{comment.commentedBy}:</p>
        <p className="ml-2 text-gray-600">{comment.commentText}</p>
        <p className="text-gray-500 text-xs ml-2 text-nowrap">{comment.dateCommented}</p>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <>
          <button
            onClick={() => setShowReplies((prev) => !prev)}
            className="text-blue-500 hover:underline mt-1"
          >
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
          {showReplies && (
            <div className="ml-4 mt-2 bg-gray-100 p-2 rounded-md">
              {comment.replies.map((reply, index) => (
                <>
                  <div key={index} className="flex items-start flex-col gap-2 mb-1 md:items-center md:flex-row">
                    <p className="font-semibold">{reply.repliedBy}:</p>
                    <p className="ml-1 text-gray-600">{reply.replyText}</p>
                    <span className="text-gray-500 text-xs ml-2">
                      {reply.dateReplied}
                    </span>
                  </div>
                  {reply.replies && <CommentCard comment={reply} />}
                </>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};



export default QaSection;
