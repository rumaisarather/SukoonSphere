import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserAvatar from '../shared/UserAvatar';
import DeleteModal from '../shared/DeleteModal';
import { useState } from 'react';
import { postAPI } from '@/utils/apiCalls';

const AdminPostCard = ({ post, onDelete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await postAPI.deletePost(post._id);
            onDelete(post._id);
        } catch (error) {
            console.error('Error deleting post:', error);
        } finally {
            setIsDeleting(false);
            setShowDeleteModal(false);
        }
    };

    return (
        <>
            <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <UserAvatar user={post} size="medium" />
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {post.username}
                            </div>
                            <div className="text-sm text-gray-500">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                        {post.description}
                    </div>
                    <div className="text-sm text-gray-500">
                        {post.tags?.map(tag => (
                            <span key={tag} className="mr-2 text-xs">#{tag}</span>
                        ))}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        👍 {post.likes?.length || 0} Likes
                    </div>
                    <div className="text-sm text-gray-500">
                        💬 {post.comments?.length || 0} Comments
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${post.status === 'active' ? 'bg-green-100 text-green-800' :
                            post.status === 'reported' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'}`}>
                        {post.status || 'active'}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                        <Link
                            to={`/posts/${post._id}`}
                            className="text-blue-600 hover:text-blue-900"
                        >
                            <FaEye className="w-5 h-5" />
                        </Link>
                        <button
                            className="text-red-600 hover:text-red-900"
                            onClick={() => setShowDeleteModal(true)}
                        >
                            <FaTrash className="w-5 h-5" />
                        </button>
                    </div>
                </td>
            </tr>

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

export default AdminPostCard; 