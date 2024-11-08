import { LikePost } from '@/components';
import CommentSection from '@/components/shared/Comments/CommentSection';
import UserAvatar from '@/components/shared/UserAvatar';
import DeleteModal from '@/components/shared/DeleteModal';
import customFetch from '@/utils/customFetch';
import { useUser } from '@/context/UserContext';
import React, { useState, useEffect } from 'react';
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

    const handleCommentError = (error) => {
        onError?.(error);
    };

    if (!answer) return null;

    const fetchComments = async () => {
        try {
            const { data } = await customFetch.get(`/qa-section/answer/${answer._id}/all-comments`);
            setComments(data.comments || []);
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to fetch answer');
            throw error;
        }
    }


    const handleAddComment = async (content) => {
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
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await customFetch.delete(`/qa-section/question/answer/comments/${commentId}`);
            setComments(prev => prev.filter(comment => comment._id !== commentId));
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to delete comment');
            throw error;
        }
    };

    const handleDeleteAnswer = async () => {
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
    };

    useEffect(() => {
        if (showComments) {
            fetchComments();
        }
    }, [showComments]);

    const handleDeleteReply = async (replyId) => {
        try {
            await customFetch.delete(`/qa-section/question/answer/comments/reply/${replyId}`);
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to delete reply');
            throw error;
        }
    }

    return (
        <div className="pl-4 border-l-2 border-gray-300">

            {/* Display Answer Author and Content */}
            <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                    <UserAvatar
                        user={answer.author}
                        size="medium"
                        fallbackImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
                    />
                    <div className="ml-2">
                        <p className="font-medium">{answer.author?.username || "Anonymous"}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(answer.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                {isAuthor && (
                    <div className="relative">
                        <BsThreeDotsVertical
                            className="text-black cursor-pointer"
                            onClick={() => setShowActionModal(!showActionModal)}
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

            {/* Display Answer Content */}
            <p className="text-[var(--grey--900)]">{answer.context}</p>

            {/* Display Interaction Buttons */}
            <div className="flex items-center gap-4 mt-2">
                <LikePost
                    totalLikes={answer.likes?.length || 0}
                    id={answer._id}
                    onError={handleCommentError}
                />
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center gap-1 text-gray-500 hover:text-blue-500"
                >
                    <AiOutlineComment /> {answer.comments?.length || 0}
                </button>
            </div>

            {/* Display Comments */}
            {showComments && (
                <div className="mt-4">
                    <CommentSection
                        comments={comments || []}
                        onAddComment={handleAddComment}
                        onEditComment={() => { }}
                        onDeleteComment={handleDeleteComment}
                        onLikeComment={() => { }}
                        onReplyToComment={() => { }}
                        onDeleteReply={handleDeleteReply}
                        currentUser={user}
                        type="answer"
                    />
                </div>
            )}
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
