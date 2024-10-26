import { articles } from "@/utils/Articles";
import {
  Article,
  HeaderImg,
  Search,
  SidebarArticles,
  SimilarArticles,
  Spotlight,
} from "@/components";
import { useLoaderData } from "react-router-dom";
import React from "react";
import notFoundBySearch from "../../assets/images/notFoundBySearch.jpg";

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

  const allTags = articles.flatMap((article) => article.tags);
  const category = Array.from(new Set(allTags));

  return { data: filteredArticles, category };
};

const Articles = () => {
  const { data, category } = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4">
        <div className="bg-white p-4 flex flex-col gap-8">
          {/* Sticky Search Component */}
          <div className="sticky top-16">
            <Search category={category} />
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="font-semibold tracking-wider mb-12 border-b pb-1 text-5xl">
            Articles
          </h1>
          <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 border-b mb-12 pb-12">
            <Spotlight />
            <SidebarArticles />
          </div>
          <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2">
            {data.length > 0 ? (
              data.map((article, index) => (
                <Article key={index} article={article} />
              ))
            ) : (
              <div>
                <p className="pt-4">
                  No articles found! Please try searching for different keywords
                  or adjusting your filters.
                </p>
                <img
                  src={notFoundBySearch}
                  alt="No articles found"
                  className="h-[200px] md:h-[50vh]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
