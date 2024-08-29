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
    <div className="card lg:card-side bg-white shadow-md  h-3/5 w-4/5 place-items-center">
      <figure>
        <img
          className="h-full"
          src={image}
          alt={title}
        />
      </figure>

      <div className="card-body p-3 w-full">
        <div>
          <div className="flex items-center pb-4">
            <img
              src={avatar}
              alt={author}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-sm font-semibold text-gray-700">{author}</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm font-semibold text-gray-700">Published On: {publishDate}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 text-[var(--black-color)]">{title}</h1>
          <p className="text-lg text-black">{subtitle}</p>
        </div>
        <p className="p-0 m-0 text-base">
          {description}
        </p>
        <div className="card-actions flex justify-between items-center">
          <audio controls className="w-3/4">
            <source src={audioSource} type="audio/ogg" />
            <source src={audioSource} type="audio/mpeg" />
          </audio>
          <div className="card-actions flex items-center gap-3">
            <LinkButton size="large" variant="primary" className="text-sm font-semibold mt-4" to={readMoreLink}>Read more</LinkButton>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default PodcastCard;
