import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import customFetch from '@/utils/customFetch';

const ViewAllPosts = () => {
    const { posts: _posts } = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    // Delete post handler
    const handleDeletePost = async (postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await customFetch.delete(`/posts/${postId}`);
                window.location.reload(); // Refresh the page after deletion
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    // Filter and sort posts
    const filteredPosts = _posts.posts
        .filter(post => {
            const matchesSearch = post.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.username?.toLowerCase().includes(searchTerm.toLowerCase());

            if (filterStatus === 'all') return matchesSearch;
            return matchesSearch && post.status === filterStatus;
        })
        .sort((a, b) => {
            if (sortBy === 'newest') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (sortBy === 'oldest') {
                return new Date(a.createdAt) - new Date(b.createdAt);
            } else if (sortBy === 'mostLiked') {
                return (b.likes?.length || 0) - (a.likes?.length || 0);
            }
            return 0;
        });

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Manage Posts</h1>
                <p className="text-gray-600">View and manage all user posts</p>
            </div>

            {/* Filters and Search */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="p-2 border rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="p-2 border rounded-md"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="reported">Reported</option>
                    <option value="hidden">Hidden</option>
                </select>

                <select
                    className="p-2 border rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="mostLiked">Most Liked</option>
                </select>
            </div>

            {/* Posts Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Content
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stats
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredPosts.map((post) => (
                            <tr key={post._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={post.avatar || 'default-avatar.png'}
                                            alt=""
                                        />
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
                                        <button
                                            className="text-blue-600 hover:text-blue-900"
                                            onClick={() => window.location.href = `/posts/${post._id}`}
                                        >
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                        <button
                                            className="text-green-600 hover:text-green-900"
                                            onClick={() => window.location.href = `/admin/posts/edit/${post._id}`}
                                        >
                                            <FaEdit className="w-5 h-5" />
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-900"
                                            onClick={() => handleDeletePost(post._id)}
                                        >
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                    No posts found matching your criteria
                </div>
            )}

            {/* Stats Summary */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-700">Total Posts</h3>
                    <p className="text-2xl font-bold text-blue-900">{_posts.posts.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-700">Active Posts</h3>
                    <p className="text-2xl font-bold text-green-900">
                        {_posts.posts.filter(p => p.status === 'active').length}
                    </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-700">Reported Posts</h3>
                    <p className="text-2xl font-bold text-red-900">
                        {_posts.posts.filter(p => p.status === 'reported').length}
                    </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700">Hidden Posts</h3>
                    <p className="text-2xl font-bold text-gray-900">
                        {_posts.posts.filter(p => p.status === 'hidden').length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewAllPosts;
