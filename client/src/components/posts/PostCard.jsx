import React, { useState, useEffect } from 'react';
import { FaRegComments } from 'react-icons/fa6';
import { BsPersonDash, BsPersonPlus, BsThreeDotsVertical } from 'react-icons/bs';
import { LikePost } from '@/components';
import CommentSection from './CommentSection';
import { useUser } from '@/context/UserContext';
import DeleteModal from '../shared/DeleteModal';
import customFetch from '@/utils/customFetch';
import { AiOutlineComment } from 'react-icons/ai';

/**
 * PostCard Component
 * Displays a single post with user interactions like comments, likes, and follow/unfollow functionality
 * 
 * @param {Object} post - The post object containing all post data
 * @param {Function} onPostDelete - Callback function executed when a post is deleted
 */
const PostCard = ({ post, onPostDelete }) => {
    const [showComments, setShowComments] = useState(false);
    const { user } = useUser();
    const isAuthor = user?._id === post.createdBy;
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        // Update isFollowing state whenever user or post.createdBy changes
        if (user?.following && post.createdBy) {
            setIsFollowing(user.following.includes(post.createdBy));
        }
    }, [user?.following, post.createdBy]);

    /**
     * Handles the deletion of a post
     * Sets loading state, makes API call, and triggers callback on success
     */
    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await customFetch.delete(`/posts/${post._id}`);
            setShowDeleteModal(false);
            if (onPostDelete) {
                onPostDelete(post._id);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    /**
     * Handles following or unfollowing a user
     * Makes API call to toggle follow status and updates local state
     */
    const handleFollowOrUnfollow = async () => {
        try {
            await customFetch.patch(`/user/follow/${post.createdBy}`);
            setIsFollowing(!isFollowing); // Toggle the following state
        } catch (error) {
            console.error('Error following/unfollowing user:', error);
        }
    }

    return (
        <>
            <div className="mb-4 p-3 sm:p-4 border rounded-[10px] bg-[var(--white-color)]">
                {/* Post Header */}
                <div className="flex items-center mb-4 justify-between flex-wrap gap-2">
                    <div className="flex items-center">
                        <img
                            src={post?.avatar || 'default-avatar.png'}
                            alt={post?.username || 'User'}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                        />
                        <div>
                            <h4 className="font-semibold text-sm sm:text-base">{post?.username || 'Anonymous'}</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">
                                {post?.datePublished ? new Date(post.datePublished).toLocaleDateString() : 'Date not available'}
                            </p>
                        </div>
                    </div>

                    {user && (
                        <div className="relative">
                            {!isAuthor && (
                                <div>
                                    <button
                                        onClick={handleFollowOrUnfollow}
                                        className={`action-button flex items-center gap-1 btn-sm hover:scale-105 transition-all duration-300 ${isFollowing ? 'bg-gray-200' : ''}`}
                                    >
                                        {isFollowing ? 'Unfollow' : 'Follow'}
                                        {isFollowing ? <BsPersonDash className="ml-1" /> : <BsPersonPlus className="ml-1" />}
                                    </button>
                                </div>
                            )}

                            {isAuthor && (
                                <>
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
                                                Delete Post
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Post Image */}
                {post?.imageUrl && (
                    <div className="w-full h-[200px] sm:h-[300px] rounded-lg overflow-hidden mb-4">
                        <img
                            src={post?.imageUrl || 'default-image.jpg'}
                            alt="Post visual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Post Content */}
                <p className="mb-4 text-sm sm:text-base">{post?.description || 'No description available'}</p>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                    {post?.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Interaction Buttons */}
                <div className="flex justify-between text-gray-500 text-sm mt-4 flex-wrap gap-2">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <LikePost totalLikes={post?.totalLikes} id={post?._id} />
                        <div className="flex items-center">
                            <button
                                onClick={() => setShowComments(!showComments)}
                                className="flex items-center gap-1 hover:text-blue-500"
                            >
                                <AiOutlineComment className='w-5 h-5' /> <span className='text-sm font-medium text-[var(--grey--900)] hover:text-blue-500'>{post?.comments?.length || 0} comments</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comment Section */}
                {showComments && (
                    <div className="mt-4 border-t pt-4">
                        <CommentSection postId={post._id} />
                    </div>
                )}
            </div>

            {/* Delete Modal */}
            <DeleteModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onDelete={handleDelete}
                title="Delete Post"
                message="Are you sure you want to delete this post? This action cannot be undone."
                itemType="post"
                isLoading={isDeleting}
            />
        </>
    );
};

export default PostCard;
