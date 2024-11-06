import React, { useState } from 'react';
import { FaRegComments } from 'react-icons/fa6';
import { Share1Icon } from '@radix-ui/react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { LikePost } from '@/components';
import CommentSection from './CommentSection';
import { useUser } from '@/context/UserContext';
import ActionButtons from '../shared/ActionButtons';
import DeleteModal from '../shared/DeleteModal';
import customFetch from '@/utils/customFetch';

const PostCard = ({ post, onPostDelete }) => {
    const [showComments, setShowComments] = useState(false);
    const { user } = useUser();
    const isAuthor = user?._id === post.createdBy;
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

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

    return (
        <>
            <div className=" mb-4 p-3 sm:p-4 border rounded-[10px]  bg-[var(--white-color)] ">
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

                    <div className="flex items-center gap-2">
                        <span className=" bg-[var(--btn-primary)] text-white px-2 py-1 rounded-[4px] cursor-pointer">
                            Follow
                        </span>
                        {isAuthor && (
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
                                            Delete Post
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Post Image */}
                {post?.imageUrl && (
                    <img
                        src={post?.imageUrl || 'default-image.jpg'}
                        alt="Post visual"
                        className="w-full h-[200px] sm:h-[300px] object-contain rounded-lg mb-4"
                    />
                )}

                {/* Post Content */}
                <p className="mb-4 text-sm sm:text-base">{post?.description || 'No description available'}</p>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2 ">
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
                                <span className="text-sm sm:text-base">{post?.comments?.length || 0}</span>
                                <FaRegComments className="size-4 sm:size-6 text-[var(--primary)]" />
                            </button>
                        </div>
                        {/* <Share1Icon className="hover:text-blue-500 cursor-pointer size-4 sm:size-6 text-[var(--primary)]" /> */}
                    </div>
                </div>

                {/* Comment Section - Rendered conditionally */}
                {showComments && (
                    <div className="mt-4 border-t pt-4">
                        <CommentSection postId={post._id} />
                    </div>
                )}

                {/* {isAuthor && (
                    <ActionButtons
                        // onEdit={handleEdit}
                        // onDelete={handleDelete}
                        isAuthor={isAuthor}
                    />
                )} */}
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