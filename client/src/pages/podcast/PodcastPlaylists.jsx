import { HeaderImg } from "@/components";
import Playlist from "../../assets/images/playlist.jpg";
import React from "react";

function PodcastEpisode() {
  return (
    <>
      <HeaderImg
        bgImg={Playlist}
        currentPage="Podcast Playlist"
        className="h-[40vh] object-contain"
      />
      <div className="container  ">
        <h1 className="text-5xl mb-4">Podcast PlayLists</h1>
        <p className="text-xl text-black">
          Where we see sound explorations, podcasts, stories, radio essays,
          which help build a grassroots to policy level conversation around
          gender and patriarchy
        </p>
        <div className="flex mt-4 w-[80%] border-b-[1px] border-[var(--secondary)]  p-6 gap-4">
          <img
            className="w-52"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWY7eeoKIGlhc8-3qCnhIJISb5ZNxY9qEOA&s"
            alt=""
          />
          <div className="flex flex-col gap-1 ">
            <h3 className="text-4xl ">Anxaity</h3>
            <div className="flex gap-3 items-center">
              <img 
                className="w-7 h-7 rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt=""
              />
              <span>Dr. Emily Stone</span>
            </div>
            <span>Episodes : 10</span>
            <p className="text-black">
              Anxiety can be a normal response to stress, but when it becomes
              excessive, it may interfere with daily activities. Managing
              anxiety often involves relaxation techniques, therapy, or
              medication for more severe cases.
            </p>
          </div>
        </div>
        <div className="flex mt-4 w-[80%] border-b-[1px] border-[var(--secondary)]  p-6 gap-4">
          <img
            className="w-52"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWY7eeoKIGlhc8-3qCnhIJISb5ZNxY9qEOA&s"
            alt=""
          />
          <div className="flex flex-col gap-1 ">
            <h3 className="text-4xl ">Anxaity</h3>
            <div className="flex gap-3 items-center">
              <img
                className="w-7 h-7 rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt=""
              />
              <span>Dr. Emily Stone</span>
            </div>
            <span>Episodes : 10</span>
            <p className="text-black">
              Anxiety can be a normal response to stress, but when it becomes
              excessive, it may interfere with daily activities. Managing
              anxiety often involves relaxation techniques, therapy, or
              medication for more severe cases.
            </p>
          </div>
        </div>
        <div className="flex mt-4 w-[80%] border-b-[1px] border-[var(--secondary)]  p-6 gap-4">
          <img
            className="w-52"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWY7eeoKIGlhc8-3qCnhIJISb5ZNxY9qEOA&s"
            alt=""
          />
          <div className="flex flex-col gap-1 ">
            <h3 className="text-4xl ">Anxaity</h3>
            <div className="flex gap-3 items-center">
              <img
                className="w-7 h-7 rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt=""
              />
              <span>Dr. Emily Stone</span>
            </div>
            <span>Episodes : 10</span>
            <p className="text-black">
              Anxiety can be a normal response to stress, but when it becomes
              excessive, it may interfere with daily activities. Managing
              anxiety often involves relaxation techniques, therapy, or
              medication for more severe cases.
            </p>
          </div>
        </div>
        <div className="flex mt-4 w-[80%] border-b-[1px] border-[var(--secondary)]  p-6 gap-4">
          <img
            className="w-52"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWY7eeoKIGlhc8-3qCnhIJISb5ZNxY9qEOA&s"
            alt=""
          />
          <div className="flex flex-col gap-1 ">
            <h3 className="text-4xl ">Anxaity</h3>
            <div className="flex gap-3 items-center">
              <img
                className="w-7 h-7 rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt=""
              />
              <span>Dr. Emily Stone</span>
            </div>
            <span>Episodes : 10</span>
            <p className="text-black">
              Anxiety can be a normal response to stress, but when it becomes
              excessive, it may interfere with daily activities. Managing
              anxiety often involves relaxation techniques, therapy, or
              medication for more severe cases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PodcastEpisode;
