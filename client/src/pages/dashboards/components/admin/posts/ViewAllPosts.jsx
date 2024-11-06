import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdminPostCard from '@/components/admin/AdminPostCard';
import { useUser } from '@/context/UserContext';

const ViewAllPosts = () => {
    const { user } = useUser();
    const { posts: _posts } = useLoaderData();
    const [posts, setPosts] = useState(_posts.posts);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    const handlePostDelete = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
    };

    const filteredPosts = posts
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

    const PostStats = ({ title, count, bgColor, textColor }) => (
        <div className={`${bgColor} p-4 rounded-lg`}>
            <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>
            <p className={`text-2xl font-bold ${textColor.replace('700', '900')}`}>{count}</p>
        </div>
    );

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Manage Posts</h1>
                <p className="text-gray-600">Welcome back, {user?.username}!</p>
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
                            <AdminPostCard
                                key={post._id}
                                post={post}
                                onDelete={handlePostDelete}
                            />
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
                <PostStats
                    title="Total Posts"
                    count={posts.length}
                    bgColor="bg-blue-50"
                    textColor="text-blue-700"
                />
                <PostStats
                    title="Active Posts"
                    count={posts.filter(p => p.status === 'active').length}
                    bgColor="bg-green-50"
                    textColor="text-green-700"
                />
                <PostStats
                    title="Reported Posts"
                    count={posts.filter(p => p.status === 'reported').length}
                    bgColor="bg-red-50"
                    textColor="text-red-700"
                />
                <PostStats
                    title="Hidden Posts"
                    count={posts.filter(p => p.status === 'hidden').length}
                    bgColor="bg-gray-50"
                    textColor="text-gray-700"
                />
            </div>
        </div>
    );
};

export default ViewAllPosts;
