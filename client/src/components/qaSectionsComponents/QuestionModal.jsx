import React, { useState } from "react";
import Select from "react-select";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook

const QuestionModal = ({ isOpen, onClose, onAdd }) => {
  const { user } = useAuth0(); // Get user information from Auth0
  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState("");

  const tagsList = [
    "Anxiety",
    "Stress Management",
    "Mental Health",
    "Depression",
    "Mindfulness",
    "Therapy",
    "Self-Care",
    "Coping Strategies",
    "Emotional Well-being",
    "Resilience",
    "Grief",
    "Burnout",
    "PTSD",
    "Mood Disorders",
    "Social Anxiety",
    "Panic Attacks",
    "Mind-Body Connection",
    "Healthy Relationships",
    "Sleep Disorders",
    "Self-Compassion",
    "Anger Management",
    "Motivation",
    "Positive Thinking",
    "Cognitive Behavioral Therapy (CBT)",
    "Mental Wellness",
    "Journaling",
    "Meditation",
    "Nutrition and Mental Health",
    "Creativity and Therapy",
    "Support Groups",
  ];

  const options = tagsList.map((tag) => ({ value: tag, label: tag }));

  const handleAddQuestion = () => {
    setError("");

    if (!question) {
      setError("Please enter your question.");
      return;
    }

    if (!details) {
      setError("Please enter more details.");
      return;
    }

    if (selectedTags.length === 0) {
      setError("Please select at least one tag.");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      question,
      details,
      tags: selectedTags.map((tag) => tag.value),
      askedBy: {
        name: user ? user.name : "Anonymous", // Use Auth0 user's name
        avatar: user ? user.picture : "url-to-avatar-image", // Use Auth0 user's avatar
        dateAsked: new Date().toISOString().split("T")[0],
      },
      answers: [],
    };

    onAdd(newQuestion);

    setQuestion("");
    setDetails("");
    setSelectedTags([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg transition duration-300 transform scale-95 hover:scale-100">
          <h3 className="text-lg font-bold mb-4">Ask a Question</h3>
          <input
            type="text"
            placeholder="Your Question"
            className="input input-bordered w-full mb-2 bg-white text-black border border-gray-300"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <textarea
            placeholder="More Details"
            className="textarea textarea-bordered w-full mb-2 bg-white text-black border border-gray-300" // Set background to white and text to black
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Tags</h4>
            <Select
              isMulti
              options={options}
              value={selectedTags}
              onChange={setSelectedTags}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select tags..."
              menuPortalTarget={document.body}
              styles={{
                menu: (provided) => ({
                  ...provided,
                  maxHeight: 200,
                  overflowY: "auto",
                }),
              }}
            />
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="btn btn-outline rounded-none">
              Cancel
            </button>
            <button
              onClick={handleAddQuestion}
              className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500 transition"
            >
              Add Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;
