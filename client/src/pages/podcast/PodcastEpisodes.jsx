import { HeaderImg, Search, SimilarArticles } from "@/components";
import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import notFoundBySearch from "../../assets/images/notFoundBySearch.jpg";
import { PodcastCard } from "@/components";
import { podcastsLists } from "../../utils/podcastsLists";
import bgImg from "../../assets/images/bg_podcast.jpg";
import SimilarPodcasts from "@/components/podcastComponents/SimilarPodcasts";
const PodcastEpisodes = () => {
  const {id:paramsId} = useParams()
  const podcastList = podcastsLists.find(podcast => podcast.podcastListId === paramsId)
  console.log({paramsId})
  console.log({podcastList})
  
  // console.log(podcastsLists[0].podcasts)
  return (
    <>
      <HeaderImg currentPage="Podcast" bgImg={bgImg} />
      <div className="flex flex-col md:flex-row  md:px-7 bg-white">
        <div className=" grid px-8 md:grid-cols-3 gap-4 mt-6">
          {/* Articles */}
          <div className=" grid gap-5 md:col-span-2 justify-items-center  ">
            <h1 className="flex-start text-[var(--blue-color)] font-bold text-5xl">
              Podcast Episodes
            </h1>
            {podcastList.podcasts.length > 0 ? (
              podcastList.podcasts.map((podcast) => {
                return (
                  <PodcastCard key={podcast.podcastId} podcast={podcast} />
                );
              })
            ) : (
              <div>
                <p className="pt-4">
                  no podcast found ! Please try searching for different keywords
                  or adjusting your filters
                </p>
                <img
                  src={notFoundBySearch}
                  alt="image"
                  className="h-[200px] md:h-[50vh]"
                />
              </div>
            )}
          </div>
          {/* Search filters */}

          {/* More articles */}
          <div className="">
            <div
              className="bg-white shadow-xl p-4 rounded order-1 lg:sticky lg:top-[5rem] lg:z-10"
              style={{ height: "max-content" }}
            >
              {/* <Search  /> */}
            </div>
            <div
              className="bg-white shadow-xl p-4 rounded flex flex-col gap-8 order-3"
              style={{ height: "max-content" }}
            >
              {/* Similar articles */}
              <SimilarPodcasts title="Recent Podcast" />
              {/* Recent articles */}
              {/* <SimilarArticles title="Similar Articles" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastEpisodes;
