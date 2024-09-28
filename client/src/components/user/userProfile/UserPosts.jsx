import { posts } from '@/utils/posts'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

const UserPosts = () => {
    return (
        <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-[var(--black-color)] text-center">Posts</h2>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="mb-6 p-4 border rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img
                                src={post.avatar}
                                alt={post.username}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                                <h2 className="font-semibold">{post.username}</h2>
                                <p className="text-gray-500 text-sm">
                                    {new Date(post.datePublished).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <img
                            src={post.image}
                            alt="Post visual"
                            className="w-full h-[300px] object-contain rounded-lg mb-4"
                        />
                        <p className="mb-4">{post.description}</p>
                        <div className="flex justify-between text-gray-500 text-sm">
                            <div className="flex items-center justify-center gap-2">
                                <span>{post.views}</span>
                                <AiOutlineLike className="hover:text-blue-500 cursor-pointer mr-1" />
                            </div>
                            <span>{post.readingTime} read</span>
                        </div>
                        <div className="mt-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default UserPosts
