import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import customFetch from '@/utils/customFetch';
import Comment from './Comment';

const CommentSection = ({ postId }) => {
    const { user, isAuthenticated } = useAuth0();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchComments = async () => {
        try {
            setIsLoading(true);
            const { data } = await customFetch.get(`/posts/${postId}/comments`);
            setComments(data || []);
        } catch (error) {
            setError('Failed to load comments');
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
                username: user?.name || 'Anonymous',
                userAvatar: user?.picture || null
            });

            if (data.comment) {
                setComments(prevComments => [data.comment, ...prevComments]);
            }
            setNewComment('');
        } catch (error) {
            setError('Failed to add comment');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteComment = async (commentId) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            try {
                await customFetch.delete(`/posts/${postId}/comments/${commentId}`);
                setComments(prevComments =>
                    prevComments.filter(comment => comment._id !== commentId)
                );
            } catch (error) {
                setError('Failed to delete comment');
                console.error(error);
            }
        }
    };

    const handleEditComment = async (commentId, newContent) => {
        try {
            const { data } = await customFetch.put(`/posts/${postId}/comments/${commentId}`, {
                content: newContent
            });

            if (data.comment) {
                setComments(prevComments =>
                    prevComments.map(comment =>
                        comment._id === commentId ? { ...comment, content: newContent } : comment
                    )
                );
            }
        } catch (error) {
            setError('Failed to edit comment');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [postId]);

    return (
        <div className="mt-4">
            {error && (
                <div className="bg-red-100 text-red-700 p-2 sm:p-3 rounded-md mb-4 text-sm">
                    {error}
                </div>
            )}

            {true ? (
                <form onSubmit={handleAddComment} className="mb-4">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full p-2 sm:p-3 border rounded-md text-sm"
                        rows="2"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !newComment.trim()}
                        className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 text-sm"
                    >
                        {isLoading ? 'Posting...' : 'Post Comment'}
                    </button>
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

            <div className="space-y-2 sm:space-y-4">
                {comments.map(comment => (
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