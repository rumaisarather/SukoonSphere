import { HeaderImg } from "@/components";
import Playlist from "../../assets/images/playlist.jpg";
import React from "react";
import { podcastsLists } from "@/utils/podcastsLists";
import { Link, useParams } from "react-router-dom";

import bg_podcast from "../../assets/images/illustration-new.svg";
function PodcastPlaylists() {
  return (
    <>
      {/* <HeaderImg
        bgImg={Playlist}
        currentPage="Podcast Playlist"
        className="h-[40vh] object-contain"
      /> */}
      <div className="max-w-7xl mx-auto my-10 flex flex-col gap-8  ">
        <div
          className="bg-no-repeat h-64 rounded-xl bg-[#0b3948] pt-[51px] pb-[51px] pr-[600px] pl-6"
          style={{
            backgroundImage:`url(${bg_podcast})`,
            backgroundPosition: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            paddingTop: "51px",
            paddingBottom:" 51px",
            paddingRight: "600px"
        
          }}
        >
          <h1 className="text-5xl text-white mb-4 font-semibold">Podcast PlayLists</h1>
          <p className="text-lg text-[#b6c2db]">
            Where we see sound explorations, podcasts, stories, radio essays,
            which help build a grassroots to policy level conversation around
            gender and patriarchy
          </p>
        </div>
        {podcastsLists.map((podcastsList) => (
          <div
            className="flex bg-gradient-to-r from-[#0b3948] to-[#095680] rounded-[25px] shadow-lg mt-4 w-[70%] border-b-[1px] border-[var(--secondary)] p-4 py-6 gap-4 "
            data-aos="fade-up"
            // style={{
            //   objectFit: "contain",
            //   backgroundImage: `bg-gradient-to-r from-[#0b3948] to-[#095680] ,url(https://img.freepik.com/free-vector/gold-music-notes-background_78370-7396.jpg?t=st=1729089331~exp=1729092931~hmac=895a4b15084cc46a301342db300bdeccdd974c67a93b1807136e4242e0f19b0f&w=740)`,
            // }}
          >
            <img
              className="w-52 rounded-[20px]"
              src={podcastsList.poadcasteImg}
              alt=""
            />
            <div className="flex flex-col gap-1 text-[var(--white-color)]  ">
              <Link to={`/podcast/${podcastsList.podcastListId}`}>
                {" "}
                <h3 className="text-4xl text-white font-bold mb-2">
                  {podcastsList.podcastTitle}
                </h3>
              </Link>
              <div className="flex gap-3 items-center text-[var(--white-color)] ">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt=""
                />
                <span>Dr. Emily Stone</span>
              </div>
              <span>Episodes : 10</span>
              <p className="text-[#b6c2db] ">{podcastsList.podcastDiscription}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PodcastPlaylists;
