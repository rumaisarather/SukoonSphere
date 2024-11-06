import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import customFetch from "@/utils/customFetch";
import Comment from "./Comment";

const CommentSection = ({ postId }) => {
  const { user, isAuthenticated } = useAuth0();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const { data } = await customFetch.get(`/posts/${postId}/comments`);
      setComments(data || []);
    } catch (error) {
      setError("Failed to load comments");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      setIsLoading(true);
      const { data } = await customFetch.post(`/posts/${postId}/comments`, {
        content: newComment,
        postId: postId,
        username: user?.name || "Anonymous",
        userAvatar: user?.picture || null,
      });

      if (data.comment) {
        setComments((prevComments) => [data.comment, ...prevComments]);
      }
      setNewComment("");
    } catch (error) {
      setError("Please login to comment");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await customFetch.delete(`/posts/comments/${commentId}`);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      setError("Failed to delete comment");
      console.error(error);
    }
  };

  const handleEditComment = async (commentId, newContent) => {
    try {
      const { data } = await customFetch.put(
        `/posts/${postId}/comments/${commentId}`,
        {
          content: newContent,
        }
      );

      if (data.comment) {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === commentId
              ? { ...comment, content: newContent }
              : comment
          )
        );
      }
    } catch (error) {
      setError("Failed to edit comment");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className=" ">
      {error && (
        <div className="bg-red-100 text-red-700 p-2 sm:p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}

      {true ? (
        <form onSubmit={handleAddComment} className="mb-4 p-4 rounded-[10px]">
          <div className="relative">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 sm:p-3 border-b text-sm bg-[var(--white-color)] focus:outline-none focus:border-blue-500 resize-none pr-12 transition-colors"
              rows="1"
            />
            <button
              type="submit"
              disabled={isLoading || !newComment.trim()} 
              className="absolute right-2 bottom-3 text-[var(--primary)] disabled:opacity-50 hover:text-blue-500 transition-colors"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" transform="rotate(90 12 12)" />
                </svg>
              )}
            </button>
          </div>
        </form>
      ) : (
        <p className="text-center text-gray-500 my-4 text-sm">
          Please sign in to comment
        </p>
      )}

      {isLoading && comments.length === 0 && (
        <div className="text-center text-gray-500 my-4">
          Loading comments...
        </div>
      )}

      <div className="space-y-2 sm:space-y-4 bg-[var(--white-color)]">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            postId={postId}
            onDelete={handleDeleteComment}
            onEdit={handleEditComment}
            isAuthor={isAuthenticated && user?.sub === comment.createdBy}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
