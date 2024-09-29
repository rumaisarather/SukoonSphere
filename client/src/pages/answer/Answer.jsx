import React, { useState, useEffect } from "react";
import { GroupsSidebar, HeaderImg, ProfileSidebar } from "@/components";
import bgImg from "../../assets/images/qa.jpg";
import { questions as _questions } from "@/utils/qaSection";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook

const Answer = () => {
  const { user } = useAuth0(); // Get user information from Auth0
  const [questions, setQuestions] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [newAnswer, setNewAnswer] = useState("");
  const [showToast, setShowToast] = useState(false); // State to show the toast

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

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      setQuestions(_questions);
      localStorage.setItem("questions", JSON.stringify(_questions));
    }
  }, []);

  const handleAnswerButtonClick = (questionId) => {
    // Toggle selected question
    setSelectedQuestionId((prev) => (prev === questionId ? null : questionId));
    setNewAnswer(""); // Reset answer text
  };

  const handleAnswerSubmit = (questionId) => {
    if (newAnswer.trim()) {
      const updatedQuestions = questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: [
              ...(question.answers || []), // Ensure answers is an array
              {
                id: Date.now(), // Unique ID for each answer
                answerText: newAnswer,
                answeredBy: {
                  name: user ? user.name : "Anonymous", // Use Auth0 user's name
                  avatar: user ? user.picture : "url-to-avatar-image", // Use Auth0 user's avatar
                  dateAnswered: new Date().toISOString().split("T")[0],
                },
              },
            ],
          };
        }
        return question;
      });

      setQuestions(updatedQuestions);
      localStorage.setItem("questions", JSON.stringify(updatedQuestions)); // Update local storage
      setNewAnswer(""); // Clear the input
      setSelectedQuestionId(null);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      console.error("Answer cannot be empty."); // Error logging
    }
  };

  return (
    <>
      {/* <HeaderImg currentPage="Answer" bgImg={bgImg} /> */}
      <div className="relative max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <ProfileSidebar
              username="Sartaj Ashraf"
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

          <div className="col-span-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions</h2>
            {questions.map((question) => (
              <div
                key={question.id}
                className="mb-6 border border-gray-300 p-4 rounded-lg bg-white shadow-md"
              >
                <div className="flex items-center mb-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
                    alt={question.askedBy.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold text-[var(--primary)]">{question.askedBy.name}</p>
                    <p className="text-sm text-gray-500">
                      {question.askedBy.dateAsked}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{question.question}</h3>
                <p className="text-gray-600 mb-2">{question.details}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Total Answers:{" "}
                  {question.answers ? question.answers.length : 0}
                </p>
                <button
                  onClick={() => handleAnswerButtonClick(question.id)}
                  className="action-button"
                >
                  {selectedQuestionId === question.id ? "Cancel" : "Answer"}
                </button>

                {selectedQuestionId === question.id && (
                  <div className="mt-4">
                    <textarea
                      placeholder="Write your answer..."
                      className="textarea textarea-bordered w-full mb-2 bg-white text-black border border-gray-300" // Set background to white and text to black
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                    />
                    <button
                      onClick={() => handleAnswerSubmit(question.id)}
                      className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-500"
                    >
                      Submit Answer
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <GroupsSidebar groups={groups} />
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-center toast-bottom z-50 fixed">
          <div className="alert alert-success">
            <span>
              {" "}
              Your answer has been posted successfully. Thank you for
              contributing!
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Answer;
