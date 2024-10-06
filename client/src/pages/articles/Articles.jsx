import { articles } from "@/utils/Articles";
import { Article, HeaderImg, Search, SimilarArticles } from "@/components";
import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import notFoundBySearch from "../../assets/images/notFoundBySearch.jpg";
import bgImg from "../../assets/images/Articles.jpg";

export const ArticlesLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = Object.fromEntries(url.searchParams.entries());

  const {
    search = "",
    category: selectedCategory = "",
    sort_by: sortBy = "",
  } = searchParams;


  let filteredArticles = [...articles]

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



const Articles = () => {
  const { data, category } = useLoaderData();

  return (
    <>
      {/* <HeaderImg currentPage="Articles" bgImg={bgImg} /> */}
      <div className="max-w-7xl mx-auto p-4 bg-white ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:custom-grid-row lg:gap-x-8 lg:gap-y-4">

          {/* Search filters */}

          {/* Articles */}
          <div className=" grid gap-6 rounded order-2 lg:col-span-2 lg:row-span-2 lg:content-start lg:order-1">
            <div className=" py-4 ">
              <Search category={category} />
            </div>
            {data.length > 0 ? (
              data.map((article, index) => {
                return <Article key={index} article={article} />;
              })
            ) : (
              <div>
                <p className="pt-4">
                  no articles found ! Please try searching for different
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

          {/* More articles */}
          <div
            className="bg-white shadow-xl p-4 rounded flex flex-col gap-8 order-3"
            style={{ height: "max-content" }}
          >
            {/* Similar articles */}
            <SimilarArticles title="Recent Articles" />
            {/* Recent articles */}
            <SimilarArticles title="Similar Articles" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles
