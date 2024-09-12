import { RelatedVideoCard } from '@/components';
import React from 'react';
import { FaPlay } from 'react-icons/fa'; // For the play button icon

const video = () => {
    return (
        <div className="max-w-7xl mx-auto w-full px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-8 grid gap-6 p-6 bg-white ">
                    <div className="max-w-5xl mx-auto">
                        {/* Title Section */}
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Immunization: Leave no one behind - Guidance for planning and implementing catch-up vaccination
                            </h1>
                            <div className="text-sm text-gray-500">
                                5 September 2024 | video
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                            {/* Placeholder for the image */}
                            <img
                                src="https://via.placeholder.com/800x450" // Replace with the actual image URL
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
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold">WHO TEAM</span>: Immunization, Vaccines and Biologicals (IVB)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 pl-4 bg-white rounded-lg border-l-[1px] mt-28 ">
                    <div className="bg-white rounded-lg overflow-hidden ">
                        <RelatedVideoCard></RelatedVideoCard>
                        <RelatedVideoCard></RelatedVideoCard>
                        <RelatedVideoCard></RelatedVideoCard>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default video;
