import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaReply, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import Reply from './Reply';
import { useAuth0 } from '@auth0/auth0-react';
import customFetch from '@/utils/customFetch';
import UserAvatar from '../shared/UserAvatar';
import ActionButtons from '../shared/ActionButtons';
import ContentEditor from '../shared/ContentEditor';
import ReactionButtons from '../shared/ReactionButtons';

const Comment = ({ comment, onDelete, onEdit, isAuthor, postId }) => {
    const { user, isAuthenticated } = useAuth0();
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [replies, setReplies] = useState(comment.replies || []);
    const [showReplies, setShowReplies] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [likes, setLikes] = useState(comment.likes || 0);
    const [dislikes, setDislikes] = useState(comment.dislikes || 0);
    const [userReaction, setUserReaction] = useState(comment.userReaction || null);

    const handleReaction = async (type) => {
        if (!isAuthenticated) return;

        try {
            const { data } = await customFetch.post(`/posts/${postId}/comments/${comment._id}/reaction`, {
                type,
                userId: user.sub
            });

            setLikes(data.likes);
            setDislikes(data.dislikes);
            setUserReaction(data.userReaction);
        } catch (error) {
            console.error('Failed to update reaction:', error);
        }
    };

    const handleEdit = async () => {
        try {
            await onEdit(comment._id, editedContent);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to edit comment:', error);
        }
    };

    const handleAddReply = async (e) => {
        e.preventDefault();
        if (!replyContent.trim()) return;

        try {
            setIsLoading(true);
            const { data } = await customFetch.post(`posts/comments/${comment._id}/replies`, {
                content: replyContent,
            });
            console.log({ datareply: data });

            if (data.reply) {
                setReplies(prevReplies => [data.reply, ...prevReplies]);
                setReplyContent('');
                setShowReplyForm(false);
            }
        } catch (error) {
            console.error('Failed to add reply:', error);
        } finally {
            setIsLoading(false);
        }
    };
    const fetchReplies = async () => {
        const { data } = await customFetch.get(`posts/comments/${comment._id}/replies`);
        console.log({ data });
        setReplies(data.replies);
    };
    useEffect(() => {
        fetchReplies();
    }, []);

    const handleDeleteReply = async (replyId) => {
        if (window.confirm('Are you sure you want to delete this reply?')) {
            try {
                await customFetch.delete(`posts/comments/${comment._id}/replies/${replyId}`);
                setReplies(prevReplies => prevReplies.filter(reply => reply._id !== replyId));
            } catch (error) {
                console.error('Failed to delete reply:', error);
            }
        }
    };

    const handleEditReply = async (replyId, newContent) => {
        try {
            const { data } = await customFetch.put(
                `posts/comments/${comment._id}/replies/${replyId}`,
                { content: newContent }
            );

            if (data.reply) {
                setReplies(prevReplies =>
                    prevReplies.map(reply =>
                        reply._id === replyId ? { ...reply, content: newContent } : reply
                    )
                );
            }
        } catch (error) {
            console.error('Failed to edit reply:', error);
        }
    };

    return (
        <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex gap-3">
                <UserAvatar user={comment} size="medium" />

                <div className="flex-grow">
                    {/* Comment Header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="font-semibold text-sm">{comment.username}</h4>
                            <p className="text-xs text-gray-500">
                                {new Date(comment.createdAt).toLocaleString()}
                                {comment.isEdited && ' (edited)'}
                            </p>
                        </div>

                        <ActionButtons
                            onEdit={() => setIsEditing(true)}
                            onDelete={() => onDelete(comment._id)}
                            isAuthor={isAuthor}
                        />
                    </div>

                    {/* Comment Body */}
                    {isEditing ? (
                        <ContentEditor
                            content={editedContent}
                            setContent={setEditedContent}
                            onSave={handleEdit}
                            onCancel={() => setIsEditing(false)}
                            isLoading={isLoading}
                        />
                    ) : (
                        <>
                            <p className="mt-1 text-sm text-gray-800">{comment.content}</p>
                            <ReactionButtons
                                likes={likes}
                                dislikes={dislikes}
                                userReaction={userReaction}
                                onLike={handleReaction}
                                onDislike={handleReaction}
                                onReply={() => setShowReplyForm(!showReplyForm)}
                            />
                        </>
                    )}

                    {/* Reply Form */}
                    {showReplyForm && (
                        <ContentEditor
                            content={replyContent}
                            setContent={setReplyContent}
                            onSave={handleAddReply}
                            onCancel={() => setShowReplyForm(false)}
                            isLoading={isLoading}
                            buttonSize="xs"
                        />
                    )}

                    {/* Replies Section - Fixed */}
                    {replies.length > 0 && (
                        <div className="mt-3 pl-4 border-l-2 border-gray-100">
                            <button
                                onClick={() => setShowReplies(!showReplies)}
                                className="text-sm text-blue-600 hover:text-blue-700 mb-2"
                            >
                                {showReplies ? '▼' : '►'} {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
                            </button>

                            {showReplies && (
                                <div className="space-y-3">
                                    {replies.map(reply => (
                                        <Reply
                                            key={reply._id}
                                            reply={reply}
                                            onDelete={handleDeleteReply}
                                            onEdit={handleEditReply}
                                            isAuthor={isAuthenticated && user?.sub === reply.createdBy}
                                            postId={postId}
                                            commentId={comment._id}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comment;