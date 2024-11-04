import customFetch from '@/utils/customFetch'
import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const LikePost = ({ totalLikes = 0, id }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(totalLikes);

    const handleLike = async () => {
        try {
            const response = await customFetch.patch(`posts/${id}/like`);
            if (response.status === 200) {
                setIsLiked(true);
                setLikes(prev => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center">
            <span className="text-sm sm:text-base mr-1">{likes}</span>
            {isLiked ? (
                <FaHeart className="text-red-500 cursor-pointer size-4 sm:size-6" onClick={handleLike} />
            ) : (
                <CiHeart className="hover:text-blue-500 cursor-pointer size-4 sm:size-6 text-[var(--primary)]" onClick={handleLike} />
            )}
        </div>
    )
}

export default LikePost
