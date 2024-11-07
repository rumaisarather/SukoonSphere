import React, { useState, useEffect } from 'react';
import UserAvatar from '../shared/UserAvatar';
import ActionButtons from '../shared/ActionButtons';
import ContentEditor from '../shared/ContentEditor';
import ReactionButtons from '../shared/ReactionButtons';
// import { useAuth0 } from 'auth0-react';
import { FaReply } from 'react-icons/fa';
import customFetch from '../../utils/customFetch';
import { Link } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

const Reply = ({ reply, onDelete, onEdit, postId, commentId }) => {
    // const { user, isAuthenticated } = useAuth0();
    const { user } = useUser();
    const isAuthor = user?._id === reply.createdBy;
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(reply.content);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nestedReplies, setNestedReplies] = useState([]);
    const [showNestedReplies, setShowNestedReplies] = useState(false);

    const handleEdit = () => {
        onEdit(reply._id, editedContent);
        setIsEditing(false);
    };

    const handleAddNestedReply = async (e) => {
        // e.preventDefault();
        if (!replyContent.trim()) return;

        try {
            setIsLoading(true);
            const { data } = await customFetch.post(`posts/comments/${commentId}/replies`, {
                content: replyContent,
                parentReplyId: reply._id
            });

            if (data.reply) {
                setNestedReplies(prevReplies => [data.reply, ...prevReplies]);
                setReplyContent('');
                setShowReplyForm(false);
            }
        } catch (error) {
            console.error('Failed to add nested reply:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch nested replies
    const fetchNestedReplies = async () => {
        try {
            const { data } = await customFetch.get(`posts/comments/${commentId}/replies/${reply._id}/nested`);
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
                            onSave={handleEdit}
                            onCancel={() => setIsEditing(false)}
                            isLoading={false}
                            type="reply"
                            buttonSize="xs"
                        />
                    ) : (
                        <p className="text-xs mt-1 break-words">
                            <Link to="#" className='text-blue-500 underline'>@{reply?.commentUsername}</Link> {reply?.content}
                        </p>
                    )}

                    {isAuthor && (
                        <button
                            onClick={() => onDelete(reply._id)}
                            className='text-red-500 hover:text-red-600 transition-colors'
                        >
                            Delete
                        </button>
                    )}

                </div>
            </div>

            {/* Reply Actions */}
            <div className="mt-1 flex items-center  gap-2 text-xs text-gray-500">
                {true && (
                    <button
                        onClick={() => setShowReplyForm(!showReplyForm)}
                        className="flex items-center gap-1 hover:text-blue-500"
                    >
                        <FaReply className="w-3 h-3" />
                        Reply
                    </button>
                )}
            </div>

            {/* Nested Reply Form */}
            {showReplyForm && (
                <ContentEditor
                    content={replyContent}
                    setContent={setReplyContent}
                    onSave={handleAddNestedReply}
                    onCancel={() => setShowReplyForm(false)}
                    isLoading={isLoading}
                    buttonSize="xs"
                    type="reply"
                />
            )}

        </div>
    );
};

export default Reply; 