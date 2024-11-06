import { useUser } from "@/context/UserContext";
import React from "react";
import { Link } from "react-router-dom";

const ContentEditor = ({
  content,
  setContent,
  onSave,
  onCancel,
  isLoading = false,
  rows = "1",
  buttonSize = "sm",
}) => {
  const { user } = useUser();
  return (
    <div className="my-2 ">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 sm:p-3 border-b text-sm bg-[var(--white-color)] focus:outline-none focus:border-blue-500 resize-none pr-12 transition-colors"
        rows={rows}
        placeholder="Add a reply..."
      />
      <div className="mt-2 flex gap-2">
        {user ? (
          <button
            onClick={onSave}
            disabled={isLoading}
            className={`px-3 py-1 text-${buttonSize} bg-blue-500 text-white rounded-[4px] hover:bg-blue-600 disabled:opacity-50`}
          >
            {isLoading ? "Replying..." : "Reply"}
          </button>
        ) : (
          <div>
            <span> </span>
            <Link
              to="/auth/sign-in"
              className={`px-3 py-1 text-${buttonSize} bg-[var(--secondary)] shadow-sm text-black rounded-[4px] hover:bg-[var(--secondary-hover)] disabled:opacity-50`}
            >
            Login to Reply 
            </Link>
          </div>
        )}

        <button
          onClick={onCancel}
          className={`px-3 py-1 text-${buttonSize} text-gray-600 hover:text-gray-800`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ContentEditor;
