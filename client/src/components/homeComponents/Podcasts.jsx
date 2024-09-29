import React from "react";

import SectionTitle from "../sharedComponents/SectionTitle";
import { SectionWrapper } from "@/assets/styles/HomeLayout";
import { FaRegCirclePlay } from "react-icons/fa6";
import { podcastsLists } from "@/utils/podcastsLists";
import MiniCard from "../sharedComponents/MiniCard";
import { Link } from "react-router-dom";
import LinkButton from "../sharedComponents/Buttons/LinkButton";
function Podcasts() {
  return (

    <div className='max-w-7xl mx-auto my-12 mt-20'>
      <SectionTitle title="Recent Podcasts" />
      <div className="space-y-4 ">
        <h2 className="text-3xl mt-0 text-[var(--black-color)]">Our Latest Podcast</h2>
        <div className=" grid grid-cols-12 gap-4">
          <div className="col-span-4 rounded-md bg-[var(--blue-color)] text-white flex flex-col gap-4 p-4">
            <img
              className="h-96 object-contain"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt=""
            />
            <div className="flex gap-3 items-center">
              <h2 className="text-xl text-white ">
                Suneeta Prajapati: The Joys of Reporting Crime
              </h2>
              <Link to={"/podcast-page"}>
                <FaRegCirclePlay className=" text-white hover:rounded-full text-4xl" />
              </Link>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-2 items-center">
            <h2 className="text-3xl text-[var(--black-color)]">Podcast Playlists</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {podcastsLists.slice(0, 3).map((podcastsList, index) => (
                <MiniCard key={index} podcastsList={podcastsList} />
              ))}
            </div>
            <div className="">
              <Link to={"podcast/playlists"}>
                <button className="action-button">Explore more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
