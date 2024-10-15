import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { questions as _questions } from "@/utils/qaSection";
import bgImg from "../../assets/images/qa.jpg";
import { FaQuestionCircle } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import {
  GroupsSidebar,
  HeaderImg,
  ProfileSidebar,
  QuestionModal,
} from "@/components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const QaSection = () => {
  const { user } = useAuth0();

  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to show the toast

  useEffect(() => {
    // Check if questions are in local storage
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      // If found, parse and set the questions from local storage
      setQuestions(JSON.parse(storedQuestions));
    } else {
      // If not found, use the default questions and save to local storage
      setQuestions(_questions);
      localStorage.setItem("questions", JSON.stringify(_questions));
    }
  }, []);

  const groups = [
    {
      id: 1,
      name: "Mindfulness Practices 🧘‍♂️",
      image: "https://example.com/image_mindfulness.jpg",
    },
    {
      id: 2,
      name: "Coping with Anxiety 💭",
      image: "https://example.com/image_anxiety.jpg",
    },
    {
      id: 3,
      name: "Therapy Techniques 📖",
      image: "https://example.com/image_therapy.jpg",
    },
    {
      id: 4,
      name: "Depression Support Group ❤️",
      image: "https://example.com/image_depression.jpg",
    },
    {
      id: 5,
      name: "Stress Management Workshops 🌱",
      image: "https://example.com/image_stress.jpg",
    },
  ];

  const handleAddQuestion = (newQuestion) => {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {showToast && (
        <div className="toast toast-center toast-bottom z-50 fixed">
          <div className="alert alert-success">
            <span>Your question has been posted!</span>
          </div>
        </div>
      )}
      {/* <HeaderImg currentPage="QA Section" bgImg={bgImg} /> */}
      <div className="relative max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-2">
          {/* Left sidebar for user information */}
          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <ProfileSidebar
              username={user ? user.name : "Anonmyous"}
              userTag="Mental Health Advocate"
              questionsPosted={33}
              answersPosted={44}
              savedItems={["Mindfulness Techniques", "Stress Reduction"]}
              recentItems={["Mental Health", "Mindfulness Practices"]}
              groups={["Mindfulness and Meditation", "Therapy Techniques"]}
              followedHashtags={["#mentalhealth", "#mindfulness", "#selfcare"]}
              events={["Mental Wellness Workshop", "Mindfulness Session"]}
            />
          </div>
          {/* Questions and top-rated answers, middle section */}
          <div className="col-span-6">
            {/* Header */}
            <div className="mb-3 text-center bg-white pb-4 rounded-[10px]">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Have a Question or Insight? Share it with Us!
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-1"
                >
                  <FaQuestionCircle className="mr-2" />
                  Ask
                </button>
                <Link
                  to="/answer"
                  className="btn-3"
                >
                  <AiOutlineComment className="mr-2" />
                  Answer
                </Link>
              </div>
            </div>
            {questions
              .filter(
                (question) => question.answers && question.answers.length > 0
              ) // Filters only questions with at least one answer
              .map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
          </div>
          {/* Right Groups sections */}
          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <GroupsSidebar groups={groups} />
          </div>
        </div>
        {/* Modal */}
        <QuestionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddQuestion} // Pass the function to handle question addition
        />
      </div>
    </>
  );
};

const QuestionCard = ({ question }) => {
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);

  return (
    <div className="mb-8  p-6 rounded-lg  bg-white transition duration-300 shadow-1 hover:shadow-2">
      <div className="flex items-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
          alt={`${question.askedBy?.name}'s avatar`}
          className="w-12 h-12 rounded-full mr-3 border-2 border-blue-500"
        />
        <div>
          <p className="font-semibold  text-[var(--primary)]">
            {question.askedBy?.name}
          </p>
          <p className="text-gray-500 text-sm">{question.dateAsked}</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {question.question}
      </h2>
      <p className="text-gray-700 mb-4">{question.details}</p>
      <div className="flex flex-wrap mb-4">
        {question.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-3 py-1 rounded-full transition duration-200 hover:bg-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        {(question.answers || [])
          .slice(0, showMoreAnswers ? question.answers.length : 1)
          .map((answer) => (
            <AnswerCard key={answer.id} answer={answer} />
          ))}
        {question.answers && question.answers.length > 1 && (
          <button
            onClick={() => setShowMoreAnswers((prev) => !prev)}
            className="mt-4 text-[var(--primary)] hover:underline hover:text-[var(--ternery)] font-medium"
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
    <div className="border-l-4 border-[var(--secondary)] pl-4 mb-4  p-4 rounded-lg bg-white border-1 shadow-1">
      <div className="flex items-center mb-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
          alt={`${answer.answeredBy.name}'s avatar`}
          className="w-10 h-10 rounded-full mr-2 border-2 border-blue-500"
        />
        <div>
          <p className="font-semibold text-[var(--primary)]">
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
      {answer?.comments?.length > 0 && (
        <>
          <h3 className="font-semibold text-gray-700">Comments:</h3>
          <div className="ml-4">
            {answer?.comments
              .slice(0, showMoreComments ? answer.comments.length : 1)
              .map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            {answer.comments.length > 1 && (
              <button
                onClick={() => setShowMoreComments((prev) => !prev)}
                className="mt-2 text-[var(--primary)] hover:underline hover:text-[var(--ternery)] font-medium"
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
  return (
    <div className="flex items-start border-b border-gray-200 p-4">
      {/* User Avatar */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
        alt={`${comment.commentedBy.name}'s avatar`}
        className="w-10 h-10 rounded-full mr-3 border border-gray-300"
      />
      <div className="flex-1">
        {/* Comment Text */}
        <p className="text-gray-800 font-medium">{comment.commentedBy.name}</p>
        <p className="text-gray-700 text-sm">{comment.commentText}</p>{" "}
        {/* Adjusted text size */}
        <p className="text-xs text-gray-500 mb-2">{comment.dateCommented}</p>
        {/* Reply Button */}
        <button className="text-blue-500 hover:underline hover:text-[var(--ternery)] text-sm">Reply</button>
        {/* Display replies recursively */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-2 pl-4 border-l border-gray-300">
            {comment.replies.map((reply) => (
              <ReplyCard key={reply.id} reply={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Recursive ReplyCard Component
const ReplyCard = ({ reply }) => {
  return (
    <div className="border-b border-gray-200 py-2">
      <div className="flex items-start">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
          alt={`${reply.repliedBy.name}'s avatar`}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div className="flex-1">
          <p className="text-gray-700 font-medium">{reply.repliedBy.name}</p>
          <p className="text-gray-600 text-sm">{reply.replyText}</p>{" "}
          {/* Adjusted text size */}
          <p className="text-xs text-gray-400">{reply.dateReplied}</p>
        </div>
      </div>

      {/* Recursively render replies if they exist */}
      {reply.replies && reply.replies.length > 0 && (
        <div className="mt-2 pl-4 border-l border-gray-300">
          {reply.replies.map((nestedReply) => (
            <ReplyCard key={nestedReply.id} reply={nestedReply} />
          ))}
        </div>
      )}
    </div>
  );
};


export default QaSection;
