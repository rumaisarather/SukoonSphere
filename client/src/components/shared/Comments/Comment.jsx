import React, { useState, useEffect } from 'react';
import UserAvatar from '../UserAvatar';
import ReactionButtons from '../ReactionButtons';
import ActionButtons from '../ActionButtons';
import ContentEditor from '../ContentEditor';
import Reply from './Reply';
import customFetch from '@/utils/customFetch';
import { FaReply } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DeleteModal from '../DeleteModal';

const Comment = ({
    comment,
    onEdit,
    onDelete,
    onLike,
    onReply,
    currentUser,
    type = 'post'
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [replies, setReplies] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleSave = async () => {
        await onEdit(comment._id, editedContent);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedContent(comment.content);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await onDelete(comment._id);
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Failed to delete comment:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleAddReply = async () => {
        if (!replyContent.trim()) return;
        try {
            const { data } = await customFetch.post(`/qa-section/answer/comments/${comment._id}/replies`, {
                content: replyContent,
            });
            if (data.reply) {
                setReplies(prevReplies => [data.reply, ...prevReplies]);
                setReplyContent('');
                setShowReplyForm(false);
                setShowReplies(true); // Ensure replies are shown after adding
            }
        } catch (error) {
            console.error('Failed to add reply:', error);
        }
    };

    const fetchReplies = async () => {
        try {
            const { data } = await customFetch.get(`/qa-section/answer/comments/${comment._id}/replies`);
            setReplies(data.replies || []);
        } catch (error) {
            console.error('Failed to fetch replies:', error);
        }
    };

    useEffect(() => {
        if (showReplies) {
            fetchReplies();
        }
    }, [comment._id, showReplies]);

    return (
        <div className="ml-4 mt-4">
            <div className="flex items-start gap-3">
                <UserAvatar user={comment.user} size="medium" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="font-semibold ">
                            <p className="text-sm">{comment.username}</p>
                            <p className="text-xs text-gray-500">
                                {new Date(comment.createdAt).toLocaleString()}
                            </p>
                        </div>
                        {!isEditing && (
                            <ActionButtons
                                item={comment}
                                currentUser={currentUser}
                                onEdit={() => setIsEditing(true)}
                                onDelete={() => onDelete(comment._id)}
                                onReply={() => onReply(comment._id)}
                            />
                        )}
                        {true && (
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

                    {isEditing ? (
                        <ContentEditor
                            content={editedContent}
                            setContent={setEditedContent}
                            onSave={handleSave}
                            onCancel={handleCancel}
                            type="comment"
                            buttonSize="sm"
                            isLoading={false}
                        />
                    ) : (
                        <div className="mt-2">
                            <p className="text-gray-700 text-sm">{comment.content}</p>
                            <div className="mt-3">
                                <div className="mt-2 flex items-center gap-4">
                                    <button
                                        onClick={() => setShowReplyForm(!showReplyForm)}
                                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"
                                    >
                                        <FaReply className="w-3 h-3" />
                                        Reply
                                    </button>
                                </div>
                                {showReplyForm && (
                                    <div className="mt-3">
                                        <ContentEditor
                                            content={replyContent}
                                            setContent={setReplyContent}
                                            onSave={handleAddReply}
                                            onCancel={() => setShowReplyForm(false)}
                                            isLoading={false}
                                            buttonSize="xs"
                                            type="reply"
                                        />
                                    </div>
                                )}
                            </div>
                            {replies.length > 0 && (
                                <button
                                    onClick={() => setShowReplies(!showReplies)}
                                    className="text-sm text-blue-600 hover:text-blue-700 mt-2"
                                >
                                    {showReplies ? '▼' : '►'} {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {showReplies && (
                <div className="ml-8 mt-2">
                    {replies.map((reply) => (
                        <Reply
                            key={reply._id}
                            reply={reply}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onLike={onLike}
                            currentUser={currentUser}
                            type={type}
                            commentId={comment._id}
                        />
                    ))}
                </div>
            )}
            <DeleteModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onDelete={handleDelete}
                title="Delete Comment"
                message="Are you sure you want to delete this comment?"
                itemType="comment"
                isLoading={isDeleting}
            />
        </div>
    );
};

export default Comment;