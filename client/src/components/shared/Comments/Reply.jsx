import React, { useState, useEffect } from 'react';
import UserAvatar from '../UserAvatar';
import ReactionButtons from '../ReactionButtons';
import ActionButtons from '../ActionButtons';
import ContentEditor from '../ContentEditor';
import { Link } from 'react-router-dom';
import { FaReply } from 'react-icons/fa';
import customFetch from '@/utils/customFetch';
import { useUser } from '@/context/UserContext';

const Reply = ({
    reply,
    onEdit,
    onDelete,
    onLike,
    currentUser,
    type = 'post',
    commentId
}) => {
    const { user } = useUser();
    const isAuthor = user?._id === reply.createdBy;
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(reply.content);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nestedReplies, setNestedReplies] = useState([]);
    const [showNestedReplies, setShowNestedReplies] = useState(false);

    const handleSave = async () => {
        await onEdit(reply._id, editedContent);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedContent(reply.content);
        setIsEditing(false);
    };

    const handleAddReply = async () => {
        if (!replyContent.trim()) return;

        try {
            setIsLoading(true);
            const { data } = await customFetch.post(`/qa-section/answer/comments/${commentId}/replies`, {
                content: replyContent,
                replyToUsername: reply.commentUsername,
                parentReplyId: reply._id
            });

            if (data.reply) {
                setNestedReplies(prevReplies => [data.reply, ...prevReplies]);
                setReplyContent('');
                setShowReplyForm(false);
            }
        } catch (error) {
            console.error('Failed to add reply:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchNestedReplies = async () => {
        try {
            const { data } = await customFetch.get(`/qa-section/answer/comments/${commentId}/replies/${reply._id}/nested`);
            setNestedReplies(data.replies || []);
        } catch (error) {
            console.error('Failed to fetch nested replies:', error);
        }
    };

    useEffect(() => {
        if (showNestedReplies) {
            fetchNestedReplies();
        }
    }, [showNestedReplies]);

    return (
        <div className="pl-4 py-2 border-l-2 border-gray-100">
            <div className="flex items-start space-x-2">
                <UserAvatar user={reply} size="small" />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                        <h4 className="font-semibold text-xs">{reply.username}</h4>
                        <span className="text-xs text-gray-500">
                            {new Date(reply.createdAt).toLocaleString()}
                        </span>
                    </div>

                    {isEditing ? (
                        <ContentEditor
                            content={editedContent}
                            setContent={setEditedContent}
                            onSave={handleSave}
                            onCancel={handleCancel}
                            isLoading={isLoading}
                            type="reply"
                            buttonSize="xs"
                        />
                    ) : (
                        <div className="mt-1">
                            <p className="text-xs mt-1 break-words">
                                <Link to="#" className='text-blue-500 underline'>@{reply?.commentUsername}</Link> {reply?.content}
                            </p>
                            <div className="mt-2 flex items-center gap-4">
                                <button
                                    onClick={() => setShowReplyForm(!showReplyForm)}
                                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"
                                >
                                    <FaReply className="w-3 h-3" />
                                    Reply
                                </button>
                            </div>
                        </div>
                    )}

                    {isAuthor && (
                        <button
                            onClick={() => onDelete(reply._id)}
                            className='text-red-500 hover:text-red-600 transition-colors'
                        >
                            Delete
                        </button>
                    )}

                    {showReplyForm && (
                        <div className="mt-2">
                            <ContentEditor
                                content={replyContent}
                                setContent={setReplyContent}
                                onSave={handleAddReply}
                                onCancel={() => setShowReplyForm(false)}
                                isLoading={isLoading}
                                type="reply"
                                buttonSize="xs"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reply;