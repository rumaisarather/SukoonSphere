import React from "react";

import SectionTitle from "../sharedComponents/SectionTitle";
import { SectionWrapper } from "@/assets/styles/HomeLayout";
import { FaRegCirclePlay } from "react-icons/fa6";
import { podcasts } from "@/utils/Podcast";
import MiniCard from "../sharedComponents/MiniCard";
import { Link } from "react-router-dom";
import LinkButton from "../sharedComponents/Buttons/LinkButton";
function Podcasts() {
  return (
    <SectionWrapper>
      <div className="space-y-4  mx-auto bg-white">
        <SectionTitle title="Recent Podcasts" />
        <h1 className="text-7xl text-[var(--blue-color)]">POSCASTS</h1>
            <h2 className="text-3xl mt-0">Our Latest Podcast</h2>
        <div className=" grid grid-cols-12 gap-4">
          <div className="col-span-4 rounded-md bg-[var(--blue-color)] text-white flex flex-col gap-4 p-4">
            <img
              className="h-96 object-contain"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt=""
            />
            <div className="flex gap-3 items-center">
              <h2 className="text-xl ">
                Suneeta Prajapati: The Joys of Reporting Crime
              </h2>
              <Link>
                <FaRegCirclePlay className=" text-white hover:rounded-full text-4xl" />
              </Link>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-2 items-center">
            <h2 className="text-3xl">Podcast Playlists</h2>
          <div className="grid grid-cols-3 gap-4 mb-4 ">
            {podcasts.slice(0, 3).map((podcast, index) => (
              <MiniCard key={index} podcast={podcast} />
            ))}
          </div>
          <div className="">
         <LinkButton >Explore More</LinkButton>
          </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Podcasts;
