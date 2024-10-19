import { HeaderImg, RelatedVideoCard } from '@/components';
import { videos } from '@/utils/Vidoes/AllVidoes';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import bgImg from '../../assets/images/posts.jpg';

export const SingleVideoDetailsLoader = async ({ params }) => {
    const videoDetails = videos.find(video => video.id === Number(params.id));
    return { videoDetails: videoDetails };
};

const video = () => {
    const { videoDetails } = useLoaderData()
    return (
        <>
            {/* <HeaderImg currentPage="Video" bgImg={bgImg} /> */}
            <div className="relative max-w-7xl mx-auto w-full ">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-8 grid gap-6 p-6 bg-white ">
                        <div className="max-w-5xl mx-auto">
                            <div className="mb-4">
                                <h1 className="text-2xl font-bold text-[var(--black-color)]">
                                    {videoDetails.title}
                                </h1>
                            </div>

                            {/* Video Section */}
                            <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="https://via.placeholder.com/800x450"
                                    alt="Vaccination video thumbnail"
                                    className="w-full object-cover"
                                />

                                {/* Play button */}
                                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                                    <button className="bg-blue-600 rounded-full text-white p-4 shadow-lg">
                                        <FaPlay className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="mt-4 flex items-center justify-between border-t pt-2">
                                <div className="text-md ">
                                    <div className="description mb-4">
                                        {/* <h2 className="text-lg font-semibold text-gray-800 mb-2">{videoDetails.title}</h2> */}
                                        <p className="text-lg text-[var(--black-color)] mb-4">{videoDetails.description}</p>
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={videoDetails.avatar}
                                                alt={videoDetails.author}
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <div>
                                                <h3 className="font-medium text-[var(--primary)]">{videoDetails.author}</h3>
                                                <p className="text-xs text-gray-500">Published on {new Date(videoDetails.datePublished).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-gray-500">Views: {videoDetails.views}</span>
                                            <span className="text-xs text-gray-500">Watch time: {videoDetails.watchTime}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {videoDetails.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="sticky top-[10%] h-screen overflow-y-auto col-span-4 pl-4 bg-white rounded-lg border-l-[1px]  ">
                        <div className="bg-white rounded-lg overflow-hidden ">
                            <RelatedVideoCard title={"Related Videos"}></RelatedVideoCard>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default video;
