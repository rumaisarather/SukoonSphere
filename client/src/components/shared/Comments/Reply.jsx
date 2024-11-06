import React, { useState } from 'react';
import UserAvatar from '../UserAvatar';
import ReactionButtons from '../ReactionButtons';
import ActionButtons from '../ActionButtons';
import ContentEditor from '../ContentEditor';

const Reply = ({
    reply,
    onEdit,
    onDelete,
    onLike,
    currentUser,
    type = 'post'
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(reply.content);

    const handleSave = async () => {
        await onEdit(reply._id, editedContent);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedContent(reply.content);
        setIsEditing(false);
    };

    return (
        <div className="mt-4">
            <div className="flex items-start gap-2">
                <UserAvatar user={reply.user} size="sm" />
                <div className="flex-1">
                    <div className="font-semibold">{reply.user.name}</div>
                    {isEditing ? (
                        <ContentEditor
                            content={editedContent}
                            setContent={setEditedContent}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <div className="mt-1">
                            <p className="text-gray-700">{reply.content}</p>
                            <div className="mt-2">
                                <ReactionButtons
                                    likes={reply.likes}
                                    onLike={() => onLike(reply._id)}
                                    size="sm"
                                />
                            </div>
                        </div>
                    )}
                    {!isEditing && (
                        <ActionButtons
                            item={reply}
                            currentUser={currentUser}
                            onEdit={() => setIsEditing(true)}
                            onDelete={() => onDelete(reply._id)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reply; 