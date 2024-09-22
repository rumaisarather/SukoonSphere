import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { questions as _questions } from "@/utils/qaSection";
import bgImg from "../../assets/images/qa.jpg";
import { GroupsSidebar, HeaderImg, ProfileSidebar } from "@/components";

const questions = [..._questions];

const QaSection = () => {
  const groups = [
    {
      id: 1,
      name: 'Mindfulness Practices 🧘‍♂️',
      image: 'https://example.com/image_mindfulness.jpg',
    },
    {
      id: 2,
      name: 'Coping with Anxiety 💭',
      image: 'https://example.com/image_anxiety.jpg',
    },
    {
      id: 3,
      name: 'Therapy Techniques 📖',
      image: 'https://example.com/image_therapy.jpg',
    },
    {
      id: 4,
      name: 'Depression Support Group ❤️',
      image: 'https://example.com/image_depression.jpg',
    },
    {
      id: 5,
      name: 'Stress Management Workshops 🌱',
      image: 'https://example.com/image_stress.jpg',
    }
  ];


  return (
    <>
      <HeaderImg currentPage="QA Section" bgImg={bgImg} />
      <div className="relative max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-2">
          {/* Left sidebar for user information */}
          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <ProfileSidebar
              username="Sartaj Ashraf"
              userTag="Mental Health Advocate"
              questionsPosted={33}
              answersPosted={44}
              savedItems={['Mindfulness Techniques', 'Stress Reduction']}
              recentItems={['Mental Health', 'Mindfulness Practices']}
              groups={['Mindfulness and Meditation', 'Therapy Techniques']}
              followedHashtags={['#mentalhealth', '#mindfulness', '#selfcare']}
              events={['Mental Wellness Workshop', 'Mindfulness Session']}
            />

          </div>
          {/* Questions and top rated answers, middle section */}
          <div className="col-span-6 ">
            <div className="text-3xl font-bold mb-6 text-center">
              <label className="input bg-transparent flex items-center gap-2 " style={{ borderBottom: '2px solid #13404f', borderRadius: '0px' }}>
                <input
                  type="text"
                  className="grow text-[var(--black-color)]"
                  placeholder="Ask a question "
                  name="search"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.426 11.926L3.6 4.287a1 1 0 0 0-1.337.73l-.4 2.733a1 1 0 0 0 .67 1.03l10.6 3.04a.25.25 0 0 1 0 .46l-10.6 3.04a1 1 0 0 0-.67 1.03l.4 2.733a1 1 0 0 0 1.337.73l17.826-7.64a1 1 0 0 0 0-1.828z" />
                </svg>

              </label>
            </div>
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
          {/* Rights Groups sections */}
          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <GroupsSidebar groups={groups} />
          </div>
        </div>
      </div >
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
