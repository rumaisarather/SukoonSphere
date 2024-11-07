import React, { useState } from 'react';
import Comment from './Comment';
import ContentEditor from '../ContentEditor';

const CommentSection = ({
    comments,
    onAddComment,
    onEditComment,
    onDeleteComment,
    onLikeComment,
    onReplyToComment,
    currentUser,
    type = 'post'
}) => {
    const [newComment, setNewComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!newComment.trim()) return;

        setIsSubmitting(true);
        try {
            await onAddComment(newComment);
            setNewComment('');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-6">
            {/* <h3 className="text-base font-semibold">Comments</h3> */}
            <div className="mt-4">
                <ContentEditor
                    content={newComment}
                    setContent={setNewComment}
                    onSave={handleSubmit}
                    onCancel={() => setNewComment('')}
                    isLoading={isSubmitting}
                    type="comment"
                    buttonSize="sm"
                />
            </div>
            <div className="mt-6">
                {comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        onEdit={onEditComment}
                        onDelete={onDeleteComment}
                        onLike={onLikeComment}
                        onReply={onReplyToComment}
                        currentUser={currentUser}
                        type={type}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentSection; 