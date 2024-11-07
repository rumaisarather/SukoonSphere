import { LikePost } from '@/components';
import CommentSection from '@/components/shared/Comments/CommentSection';
import UserAvatar from '@/components/shared/UserAvatar';
import customFetch from '@/utils/customFetch';
import React, { useState, useEffect } from 'react';
import { AiOutlineComment } from 'react-icons/ai';

const Answer = ({ answer, onError }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    console.log({ comments })

    const handleCommentError = (error) => {
        console.log({ error })
        onError?.(error);
    };

    if (!answer) return null;

    const fetchAnswer = async () => {
        try {
            const { data } = await customFetch.get(`/qa-section/answer/${answer._id}/all-comments`);
            setComments(data || []);
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
            return data.comment;
        } catch (error) {
            handleCommentError(error?.response?.data?.msg || 'Failed to add comment');
            throw error;
        }
    };

    useEffect(() => {
        fetchAnswer();
    }, [showComments]);
    return (
        <div className="pl-4 border-l-2 border-gray-300">

            {/* Display Answer Author and Content */}
            <div className="flex items-center mb-2">
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

            {/* Display Answer Content */}
            <p className="text-gray-700">{answer.context}</p>

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
                        parentId={answer._id}
                        parentType="answer"
                        comments={comments || []}
                        onError={handleCommentError}
                        onAddComment={handleAddComment}
                        type="answer"
                    />
                </div>
            )}
        </div>
    );
};

export default Answer;
