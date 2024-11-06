import React, { useState } from 'react';
import UserAvatar from '../UserAvatar';
import ReactionButtons from '../ReactionButtons';
import ActionButtons from '../ActionButtons';
import ContentEditor from '../ContentEditor';
import Reply from './Reply';

const Comment = ({
    comment,
    onEdit,
    onDelete,
    onLike,
    onReply,
    currentUser,
    type = 'post' // can be 'post' or 'question'
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);
    const [showReplies, setShowReplies] = useState(false);

    const handleSave = async () => {
        await onEdit(comment._id, editedContent);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedContent(comment.content);
        setIsEditing(false);
    };

    return (
        <div className="ml-4 mt-4">
            <div className="flex items-start gap-2">
                <UserAvatar user={comment.user} size="sm" />
                <div className="flex-1">
                    <div className="font-semibold">{comment.user.name}</div>
                    {isEditing ? (
                        <ContentEditor
                            content={editedContent}
                            setContent={setEditedContent}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <div className="mt-1">
                            <p className="text-gray-700">{comment.content}</p>
                            <div className="mt-2 flex items-center gap-4">
                                <ReactionButtons
                                    likes={comment.likes}
                                    onLike={() => onLike(comment._id)}
                                    size="sm"
                                />
                                <button
                                    onClick={() => setShowReplies(!showReplies)}
                                    className="text-sm text-gray-600 hover:text-gray-800"
                                >
                                    {showReplies ? 'Hide Replies' : `Show Replies (${comment.replies?.length || 0})`}
                                </button>
                            </div>
                        </div>
                    )}
                    {!isEditing && (
                        <ActionButtons
                            item={comment}
                            currentUser={currentUser}
                            onEdit={() => setIsEditing(true)}
                            onDelete={() => onDelete(comment._id)}
                            onReply={() => onReply(comment._id)}
                        />
                    )}
                </div>
            </div>
            {showReplies && comment.replies && (
                <div className="ml-8">
                    {comment.replies.map((reply) => (
                        <Reply
                            key={reply._id}
                            reply={reply}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onLike={onLike}
                            currentUser={currentUser}
                            type={type}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment; 