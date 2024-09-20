import { HeaderImg } from "@/components";
import  Playlist from '../../assets/images/playlist.jpg'
import React from "react";

function PodcastEpisode() {
  return (
    <>
    <HeaderImg bgImg={Playlist} currentPage="Podcast Playlist" className="h-[40vh] object-contain" />
      <div className="container ">
        <h1>Podcast PlayLists</h1>
        <p>
          Where we see sound explorations, podcasts, stories, radio essays,
          which help build a grassroots to policy level conversation around
          gender and patriarchy
        </p>
        <div className="flex mt-4  p-6 gap-4">
          <img
          className="w-52"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWY7eeoKIGlhc8-3qCnhIJISb5ZNxY9qEOA&s"
            alt=""
          />
          <div className=" ">
            <h3 className="text-3xl ">Name of podcast Playlist</h3>
            <p>Short discription ajanda</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PodcastEpisode;
