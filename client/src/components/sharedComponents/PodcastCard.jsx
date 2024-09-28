import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./Buttons/LinkButton";
import { AiOutlineFieldTime, AiOutlineLike } from "react-icons/ai";

function PodcastCard({ podcast }) {
  const {
    image,
    avatar,
    author,
    publishDate,
    title,
    subtitle,
    description,
    audioSource,
    readMoreLink,
    podcastId
  } = podcast;

  // console.log({podcast:podcast.podcasts})
  return (
    <div className=" md:card-side w-full border-b-[1px]  hover:shadow-md transition-all duration-300 border-gray-300  place-items-center p-0 space-y-4">
      <div className="card-body p-3 w-full gap-4">
        <div className="flex md:flex-row flex-col gap-3 place-items-center">
          <img
            className="w-full object-cover md:w-40 md:h-40 "
            src={image}
            alt={title}
          />
          <div className="flex  flex-col space-y-3" >
            <div className="flex items-center mt-4 col-span-2 justify-start gap-8 order-3 sm:order-none">
              <div className="flex justify-center gap-2  cursor-pointer">
                <img
                  className="rounded-full size-7 border-2 border-[var(--ternery)]"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="alt"
                />
                <span className="text-sm text-[var(--primary)]">{author || "auther"}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <AiOutlineFieldTime color="var(--ternery)" />
                <span className="text-sm text-[var(--primary)]"> {publishDate || "date"}</span>
              </div>
              <div className="hidden sm:flex items-center justify-between sm:justify-center gap-4">
                <div className=" flex items-center justify-center gap-2 ">
                  <AiOutlineLike color="var(--ternery)" />
                  <span className="text-xs text-[var(--primary)]">490</span>
                </div>
              </div>

            </div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-800 text-[var(--blue-color)]">{title}</h1>
            <p className="text-sm md:text-lg text-black">{subtitle}</p>
          </div>
        </div>
        <p className="p-0 m-0  text-gray-700 line-clamp-3 text-xl">
          {description}
        </p>
        <div className="card-actions flex justify-between  items-center">
          <audio controls className="w-3/4 h-8 ">
            <source src={audioSource} type="audio/ogg" />
            <source src={audioSource} type="audio/mpeg" />
          </audio>
          <div className="card-actions flex items-center gap-3">
            <Link to={`/podcast-page/${podcastId}`}>
              <button className="action-button">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div >
  );
}

export default PodcastCard;
