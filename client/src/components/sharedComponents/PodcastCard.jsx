import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./Buttons/LinkButton";

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
  } = podcast;

  return (
    <div className="card md:card-side w-full shadow-lg bg-blue-100 rounded-[6px] place-items-center p-0">
      <div className="card-body p-3 w-full">
        <div className="flex md:flex-row flex-col gap-3 place-items-center">
        <img
          className="w-full object-cover md:w-40 md:h-40 "
          src={image}
          alt={title}
        />
        <div className="flex  flex-col" > 
          <div className="flex items-center  pb-4">
            <img
              src={avatar}
              alt={author}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-sm font-semibold text-gray-700">{author}</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm font-semibold text-gray-700">Published On: {publishDate}</span>
          </div>
          <h1 className="text-lg md:text-2xl font-bold text-gray-800 text-[var(--black-color)]">{title}</h1>
          <p className="text-sm md:text-lg text-black">{subtitle}</p>
        </div>
        </div>
        <p className="p-0 m-0 text-base text-gray-700">
          {description}
        </p>
        <div className="card-actions flex justify-between  items-center">
          <audio controls className="w-3/4 h-8 ">
            <source src={audioSource} type="audio/ogg" />
            <source src={audioSource} type="audio/mpeg" />
          </audio>
          <div className="card-actions flex items-center gap-3">
            <LinkButton size="large" variant="primary" className="text-sm font-semibold " to={readMoreLink}>Read more</LinkButton>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default PodcastCard;
