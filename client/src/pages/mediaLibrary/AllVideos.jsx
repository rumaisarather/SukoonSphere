import React from 'react';
import bgImg from '../../assets/images/bg_podcast.jpg'
import { HeaderImg, VideoCard } from '@/components';
import { videos } from '@/utils/Vidoes/AllVidoes';
import { useLoaderData } from 'react-router-dom';
import SearchFilters from '@/components/mediaLibrary/SearchFilters';
import notFoundBySearch from "../../assets/images/notFoundBySearch.jpg";

export const AllVideosLoader = async ({ request }) => {
    const url = new URL(request.url);
    const searchParams = Object.fromEntries(url.searchParams.entries());
    const {
        search = "",
        category: selectedCategory = "",
    } = searchParams;

    let filteredVideos = [...videos]

    if (search) {
        filteredVideos = filteredVideos.filter((video) =>
            video.title.toLowerCase().includes(search.toLowerCase() || video.category.toLowerCase().includes(search.toLowerCase()))
        );
    }

    if (selectedCategory) {
        filteredVideos = filteredVideos.filter((video) =>
            video.category.includes(selectedCategory)
        );
    }
    const allTags = videos.flatMap((video) => video.category);
    const category = Array.from(new Set(allTags));

    return { data: filteredVideos, category };
};


const AllVideos = () => {
    const { data, category } = useLoaderData();
    return (
        <>
            <div className="relative p-4 max-w-7xl mx-auto ">
                <div className="flex items-center gap-4 mb-8 ">
                    <SearchFilters category={category}> </SearchFilters>
                </div>

                {/* Media Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {data?.length > 0 ? (
                        <>
                            <VideoCard videos={data}></VideoCard>
                            {/* <h1>Hello world</h1> */}
                        </>
                    ) : (
                        <div className='col-span-4 flex flex-col justify-center items-center'>
                            <p className="pt-4">
                                No Videos found ! Please try searching for different
                                keywords or adjusting your filters
                            </p>
                            <img
                                src={notFoundBySearch}
                                alt="image"
                                className="h-[200px] md:h-[50vh]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AllVideos;
