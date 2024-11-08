import React, { useState, useEffect } from "react";
import { GroupsSidebar, HeaderImg, ProfileSidebar, Spinner } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import customFetch from "@/utils/customFetch";
import { Form, useLoaderData, useActionData } from "react-router-dom";

export const answersLoader = async () => {
  try {
    const { data } = await customFetch.get("/qa-section/all-questions");
    return { allQuestions: data.questions };
  } catch (error) {
    console.log(error);
    return { error: error?.response?.data?.msg || "Could not fetch answers." };
  }
  return null;
};

export const answerAction = async ({ request }) => {
  const formData = await request.formData();
  const context = formData.get("context");
  const questionId = formData.get("questionId");

  if (!context?.trim()) {
    return { error: "Answer cannot be empty" };
  }

  try {
    const { data } = await customFetch.post(`/qa-section/question/${questionId}/add-answer`, { context });
    return { success: data.msg };
  } catch (error) {
    console.log(error);
    return { error: error?.response?.data?.msg || "Could not submit answer." };
  }
};

const Answer = () => {
  const { user } = useAuth0();
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [newAnswer, setNewAnswer] = useState("");
  const { allQuestions, error: loadError } = useLoaderData();
  const [isLoading, setIsLoading] = useState(false);
  const actionData = useActionData();

  // Reset form and close answer section when form is submitted successfully
  useEffect(() => {
    if (actionData?.success) {
      setSelectedQuestionId(null);
      setNewAnswer("");
    }
  }, [actionData]);

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

  const handleAnswerButtonClick = (questionId) => {
    setSelectedQuestionId((prev) => (prev === questionId ? null : questionId));
    setNewAnswer("");
  };

  if (loadError) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500 text-xl">{loadError}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="relative max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <ProfileSidebar
              username={user?.name || "Anonymous"}
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
            {allQuestions?.length === 0 ? (
              <div className="text-center p-8 bg-white rounded-lg shadow">
                <p className="text-gray-600">No questions available at the moment.</p>
              </div>
            ) : (
              allQuestions?.map((question) => (
                <div
                  key={question._id}
                  className="mb-6 border border-gray-300 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={question.author.picture || "default-avatar-url"}
                      alt={question.author.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-semibold text-[var(--primary)]">
                        {question.author.username}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(question.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold">{question.questionText}</h3>
                  <p className="text-gray-600 mb-2">{question.context}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {question.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mb-2">
                    Total Answers: {question.answers?.length || 0}
                  </p>

                  <button
                    onClick={() => handleAnswerButtonClick(question._id)}
                    className="action-button hover:opacity-90 transition-opacity"
                  >
                    {selectedQuestionId === question._id ? "Cancel" : "Answer"}
                  </button>

                  {selectedQuestionId === question._id && (
                    <Form method="post" className="mt-4">
                      <input type="hidden" name="questionId" value={question._id} />
                      <textarea
                        name="context"
                        placeholder="Write your answer..."
                        className="textarea textarea-bordered w-full mb-2 bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        rows={4}
                        maxLength={500}
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {newAnswer.length}/500 characters
                        </span>
                        <button
                          type="submit"
                          className="btn-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isLoading || !newAnswer.trim()}
                        >
                          {isLoading ? (
                            <>
                              <Spinner size="small" />
                              Submitting...
                            </>
                          ) : (
                            'Submit Answer'
                          )}
                        </button>
                      </div>
                    </Form>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="sticky top-[10%] col-span-3 h-screen overflow-y-auto">
            <GroupsSidebar groups={groups} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
