import { HeaderImg } from "@/components";
import React from "react";
import { podcasts } from "../../utils/Podcast";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function PodcastPage() {
  // Assuming you want to display the first podcast in the array
  const {
    title,
    audioSource,
    episodeNo,
    publishDate,
    author,
    avatar,
    image,
    description,
    full_discription,
  } = podcasts[0];

  return (
    <>
      <HeaderImg currentPage="Podcast" />
      <section className="container px-40 flex flex-col gap-6 ">
        <span>Episode: {episodeNo}</span>
        <div>
          <h2 className=" text-4xl text-black font-bold text-[var(--blue-color)] my-3">
            {title}
          </h2>
          <div className="flex flex-col gap-4">
            <span className="flex items-center">
              <img
                src={avatar}
                alt={author}
                className="w-8 h-8 rounded-full mr-3"
              />{" "}
              <span className="font-semibold "> {author} </span>
            </span>
            <span className="text-xs place-items-center font-mono text-red-400 font-bold">
              Date: {publishDate}
            </span>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-lg">
          <div className="flex">
            <img src={image} alt="" />
            <p className="pt-5">{description}</p>
          </div>
          <audio controls className="w-3/4 h-8 my-3 ml-3">
            <source src={audioSource} type="audio/ogg" />
            <source src={audioSource} type="audio/mpeg" />
          </audio>
        </div>
        <p>
          {full_discription}
""
        </p>
        <div className="flex gap-3 text-blue-600">
          <FaFacebook className="size-6 " />
          <FaTwitter className="size-6" />
          <AiFillInstagram className="size-6" />
        </div>
      </section>
    </>
  );
}

export default PodcastPage;
