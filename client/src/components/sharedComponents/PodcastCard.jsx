import { AiOutlineLike } from "react-icons/ai";
import { podcastsLists } from "@/utils/podcastsLists";
import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import notFoundBySearch from "../../assets/images/notFoundBySearch.jpg";
const PodcastCard = () => {
  const { id: paramsId } = useParams();
  const podcastList = podcastsLists.find(
    (podcast) => podcast.podcastListId === paramsId
  );
  const podcastDetails = podcastsLists.find( (podcast) => podcast.podcastListId === paramsId
  );
  console.log({ podcastDetails });
  // console.log({ podcastList });
  return (
    <>
      <h1 className="max-w-7xl mx-auto my-4 font-bold">Podcast Episordes</h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Main Section */}
      <div className="md:col-span-2 space-y-8">
        {/* Trending Podcast */}
        <div className="py-9 bg-gradient-to-r from-[#0b3948] to-[#095680]  text-white p-6 rounded-[10px] shadow-lg">
          <div className="flex gap-4">
            <img
              className="w-36 h-36 object-cover rounded-full shadow-lg"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Trending Podcast"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-3xl font-bold">{podcastDetails.podcastTitle}</h1>
              <span>Dr. Emily Stone</span>
              <div className="flex gap-3 items-center text-[var(--white-color)] ">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt=""
                />
                <span>Dr. Emily Stone</span>
              </div>
              <p className="text-[#b6c2db] ">{podcastDetails.podcastDiscription}</p>

              <div className="mt-4 ">
                <button className="bg-white text-blue-700 px-4 py-2 rounded-full shadow-md mr-4">
                  Listen Now
                </button>
                <button className="bg-gray-100 text-blue-700 px-4 py-2 rounded-full shadow-md">
                  Add To Favorites
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Played Section */}
        <div>
          <h2 className="text-xl font-bold">Recently Played</h2>
          <div className="flex gap-4 justify-between overflow-x-auto">
              <div key={podcastDetails.podcastListId} className="flex flex-col items-center space-y-2">
                <img
                  className="w-32 h-32 rounded-xl shadow-lg object-cover"
                  src={podcastDetails.poadcasteImg}
                  alt={`Podcast`}
                  />
                <span className="text-sm">Podcast</span>
              </div>
          </div>
        </div>

        {/* Most Popular Section */}
        <div className="grid grid-cols-2 gap-4">
        {podcastList.podcasts.length > 0 ? (

          podcastList.podcasts.map((podcast) => {
            <h2 className="text-xl font-bold">Most Popular</h2>
            return (
                <div className="  ">
                  <div className="bg-[#0b3948] text-white  p-4 rounded-[10px] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-16 h-16 rounded-lg object-cover"
                        src={podcast.image}
                        alt={`Podcast `}
                      />
                      <div>
                        <h3 className="font-bold text-xl">{podcast.title} </h3>
                        <p className="text-sm text-[#b6c2db]">{podcast.author}</p>
                      </div>
                    </div>
                    <AiOutlineLike className="text-white" size={24} />
                  </div>
                </div>
            );
          })
        ) : (
          <div>
            <p className="pt-4">
              no podcast found ! Please try searching for different keywords or
              adjusting your filters
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

      {/* Sidebar */}
      <div className="space-y-8 py-4 shadow-[0px_1px_10px_rgba(0,0,0,0.1)] rounded-[10px]">
        {/* Quick Search */}
        <div className="p-4  rounded-lg">
          <input
            className="w-full p-2 rounded-[10px] shadow-md bg-white "
            type="text"
            placeholder="Search podcasts..."
          />
        </div>

        {/* Top Podcasters */}
        <div className="p-4  rounded-lg">
          <h2 className="text-lg font-bold mb-4">Top Podcasters</h2>
          <div className="space-y-4">
            {["Dashiell", "Soren", "Orion", "Caspian"].map((name, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                    alt={name}
                  />
                  <span>{name}</span>
                </div>
                <button className="text-blue-500">Follow</button>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Player */}
        <div className="mx-4 py-4 sticky top-24 flex flex-col gap-5 rounded-[10px] p-4 bg-[#0b3948]  text-white  shadow-lg">
          <div className="flex flex-col  items-center gap-4">
            <img
              className="w-24 h-24 rounded-full"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Now Playing"
            />
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold">Atticus</span>
              <span className="text-xs">Beyond the Screen</span>
            </div>
          </div>
          <audio controls className="w-full mt-4">
            <source src="audioSource.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
      </>
  );
};

export default PodcastCard;
