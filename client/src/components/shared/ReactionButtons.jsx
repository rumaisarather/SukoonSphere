import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';

const ReactionButtons = ({
    likes = 0,
    dislikes = 0,
    userReaction,
    onLike,
    onDislike,
    onReply,
    showReplyButton = true
}) => {
    return (
        <div className="flex items-center gap-4 text-sm text-gray-500">
            <button
                onClick={() => onLike('like')}
                className={`flex items-center gap-1 hover:text-blue-600 ${userReaction === 'like' ? 'text-blue-600' : ''}`}
            >
                <FaThumbsUp className="w-4 h-4" />
                <span>{likes}</span>
            </button>
            <button
                onClick={() => onDislike('dislike')}
                className={`flex items-center gap-1 hover:text-red-600 ${userReaction === 'dislike' ? 'text-red-600' : ''}`}
            >
                <FaThumbsDown className="w-4 h-4" />
                <span>{dislikes}</span>
            </button>
            {showReplyButton && (
                <button
                    onClick={onReply}
                    className="hover:text-blue-600 flex items-center gap-1"
                >
                    <FaReply className="w-4 h-4" />
                    Reply
                </button>
            )}
        </div>
    );
};

export default ReactionButtons; 