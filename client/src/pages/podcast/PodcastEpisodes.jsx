import { HeaderImg, Search, SimilarArticles } from "@/components";
import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import notFoundBySearch from "../../assets/images/notFoundBySearch.jpg";
import { PodcastCard } from "@/components";
import { podcasts } from "../../utils/Podcast";
import bgImg from "../../assets/images/bg_podcast.jpg";
import SimilarPodcasts from "@/components/podcastComponents/SimilarPodcasts";

export const ArticlesLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = Object.fromEntries(url.searchParams.entries());

  const {
    search = "",
    category: selectedCategory = "",
    sort_by: sortBy = "",
  } = searchParams;

  let filteredArticles = [...articles];

  if (search) {
    filteredArticles = filteredArticles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (selectedCategory) {
    filteredArticles = filteredArticles.filter((article) =>
      article.tags.includes(selectedCategory)
    );
  }

  if (sortBy === "newest") {
    filteredArticles.sort(
      (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
    );
  } else if (sortBy === "oldest") {
    filteredArticles.sort(
      (a, b) => new Date(a.datePublished) - new Date(b.datePublished)
    );
  } else if (sortBy === "most viewed") {
    filteredArticles.sort((a, b) => b.views - a.views);
  }

  console.log("Final filtered articles:", filteredArticles); // Log final filtered articles

  const allTags = articles.flatMap((article) => article.tags);
  const category = Array.from(new Set(allTags));

  return { data: filteredArticles, category };
};
const PodcastEpisodes = () => {
  //   const { data, category } = useLoaderData();

  return (
    <>
      <HeaderImg currentPage="Podcast" bgImg={bgImg} />
      <div className="flex flex-col md:flex-row  md:px-7 ">
        <div className=" grid px-8 md:grid-cols-3 gap-4 mt-6">
          {/* Articles */}
          <div className=" grid gap-5 md:col-span-2 justify-items-center  ">
            <h1 className="flex-start text-[var(--blue-color)] font-bold text-5xl">
              Podcast Episodes
            </h1>
            {podcasts.length > 0 ? (
              podcasts.map((podcast, index) => {
                return <PodcastCard key={index} podcast={podcast} />;
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
