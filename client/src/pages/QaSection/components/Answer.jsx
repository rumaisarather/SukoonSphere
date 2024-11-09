import { LikePost } from '@/components';
import CommentSection from '@/components/shared/Comments/CommentSection';
import UserAvatar from '@/components/shared/UserAvatar';
import DeleteModal from '@/components/shared/DeleteModal';
import customFetch from '@/utils/customFetch';
import { useUser } from '@/context/UserContext';
import React, { useState, useCallback } from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Answer = ({ answer, onError }) => {
    const [showComments, setShowComments] = useState(false);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [comments, setComments] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const { user } = useUser();
    const isAuthor = user?._id === answer.author?.userId;

    const handleCommentError = useCallback((error) => {
        onError?.(error);
    }, [onError]);

    if (!answer) return null;

    const fetchComments = useCallback(async () => {
        try {
            const { data } = await customFetch.get(`/qa-section/answer/${answer._id}/all-comments`);
            setComments(data.comments || []);
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to fetch answer');
            throw error;
        }
    }, [answer._id, handleCommentError]);

    const handleAddComment = useCallback(async (content) => {
        try {
            const { data } = await customFetch.post(`/qa-section/answer/${answer._id}/add-comment`, {
                content
            });
            setComments(prev => [data.comment, ...prev]);
            return data.comment;
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to add comment');
            throw error;
        }
    }, [answer._id, handleCommentError]);

    const handleDeleteComment = useCallback(async (commentId) => {
        try {
            await customFetch.delete(`/qa-section/question/answer/comments/${commentId}`);
            setComments(prev => prev.filter(comment => comment._id !== commentId));
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to delete comment');
            throw error;
        }
    }, [handleCommentError]);

    const handleEditComment = useCallback(async (commentId, content) => {
        try {
            const { data } = await customFetch.patch(`/qa-section/answer/comments/${commentId}`, {
                content
            });
            setComments(prev => prev.map(comment =>
                comment._id === commentId ? { ...comment, content } : comment
            ));
            return data.comment;
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to edit comment');
            throw error;
        }
    }, [handleCommentError]);

    const handleReplyToComment = useCallback(async (commentId, content) => {
        try {
            const { data } = await customFetch.post(`/qa-section/answer/comments/${commentId}/replies`, {
                content,
            });
            setComments(prev => prev.map(comment =>
                comment._id === commentId
                    ? { ...comment, replies: [data.reply, ...(comment.replies || [])] }
                    : comment
            ));
            return data.reply;
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to add reply');
            throw error;
        }
    }, [handleCommentError]);

    const handleDeleteReply = useCallback(async (replyId) => {
        try {
            await customFetch.delete(`/qa-section/question/answer/comments/reply/${replyId}`);
            setComments(prev => prev.map(comment => ({
                ...comment,
                replies: comment.replies?.filter(reply => reply._id !== replyId)
            })));
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to delete reply');
            throw error;
        }
    }, [handleCommentError]);

    const handleLikeComment = useCallback(async (commentId) => {
        try {
            const { data } = await customFetch.post(`/qa-section/answer/comments/${commentId}/like`);
            setComments(prev => prev.map(comment =>
                comment._id === commentId
                    ? { ...comment, likes: data.likes }
                    : comment
            ));
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to like comment');
            throw error;
        }
    }, [handleCommentError]);

    const handleDeleteAnswer = useCallback(async () => {
        try {
            setIsDeleting(true);
            await customFetch.delete(`/qa-section/question/answer/${answer._id}`);
            setShowDeleteModal(false);
            window.location.reload();
        } catch (error) {
            handleCommentError('Error deleting answer');
        } finally {
            setIsDeleting(false);
        }
    }, [answer._id, handleCommentError]);

    const toggleComments = useCallback(() => {
        setShowComments(prev => {
            if (!prev) {
                fetchComments();
            }
            return !prev;
        });
    }, [fetchComments]);

    return (
        <div className="pl-4 border-l-2 border-gray-300">
            <div className="flex items-center mb-2 justify-between">

                {/* User information section with avatar, username and timestamp. 
                    Displays the answer author's avatar with a fallback image,
                    their username (or "Anonymous" if not available), and 
                    the formatted creation date/time of the answer */}
                <div className="flex items-center">
                    <UserAvatar
                        user={answer.author}
                        size="medium"
                        fallbackImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
                    />
                    <div className="ml-2">
                        <p className="font-medium">{answer.author?.username}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(answer.createdAt).toLocaleString()}
                        </p>
                    </div>


                </div>

                {/* Action menu for answer authors - displays a three-dot menu that reveals 
                    a delete option when clicked. The menu is absolutely positioned and 
                    only shown when showActionModal is true */}
                {isAuthor && (
                    <div className="relative">
                        <BsThreeDotsVertical
                            className="text-black cursor-pointer"
                            onClick={() => setShowActionModal(prev => !prev)}
                        />
                        {showActionModal && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                                <button
                                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 rounded-lg"
                                    onClick={() => {
                                        setShowDeleteModal(true);
                                        setShowActionModal(false);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className='mt-2'>
                <p className="text-[var(--grey--900)]">{answer.context}</p>
            </div>


            {/* Like and comment buttons section */}
            <div className="flex items-center gap-4 mt-2">
                <LikePost
                    totalLikes={answer.likes?.length || 0}
                    id={answer._id}
                    onError={handleCommentError}
                />
                <button
                    onClick={toggleComments}
                    className="flex items-center gap-1 text-gray-500 hover:text-blue-500"
                >
                    <AiOutlineComment className='w-5 h-5' /> <span className='text-sm font-medium text-[var(--grey--900)] hover:text-blue-500'>{answer.comments?.length || 0} comments</span>
                </button>
            </div>

            {/* Comment section - Renders a CommentSection component when showComments is true.
                Provides functionality for adding, deleting comments and replies,
                as well as liking comments. The component receives the current comments array
                and user object, along with callback handlers for all comment operations.*/}
            {showComments && (
                <div className="mt-4">
                    <CommentSection
                        comments={comments}
                        onAddComment={handleAddComment}
                        onEditComment={handleEditComment}
                        onDeleteComment={handleDeleteComment}
                        onLikeComment={handleLikeComment}
                        onReplyToComment={handleReplyToComment}
                        onDeleteReply={handleDeleteReply}
                        currentUser={user}
                        type="answer"
                    />
                </div>
            )}

            {/* Renders a confirmation modal when deleting an answer. Only shown to answer authors.
                Handles the deletion process with loading state and allows cancellation. */}
            <DeleteModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onDelete={handleDeleteAnswer}
                title="Delete Answer"
                message="Are you sure you want to delete this answer?"
                itemType="answer"
                isLoading={isDeleting}
            />
        </div>
    );
};

export default Answer;
