import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
function MiniCard({ podcast }) {
  return (
    <div className="cardBody border-[1px]  h-[400px] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-4">
      <img
        className="w-full h-60 object-cover  "
        src={podcast.image}
        alt=""
      />
      <div className="flex flex-col gap-2 text-black px-3 py-3  transition ease-in-out ">
        <Link to={"podcast"}>
          <h4 className="text-xl font-bold text-[#13404f] line-clamp-2 hover:text-[var(--ternery)] cursor-pointer">
            {podcast.title}
          </h4>
        </Link>
        <p>Episordes : 8</p>
        <div className="flex justify-between">
          <p className="flex  items-center gap-2 a">
            <MdOutlineDateRange className="text-xl text-[var(--blue-color)] " />
            <span className="text-xs text-gray-400"> 20-09-2002</span>
          </p>
          <Link>
            <FaPlay className="border-2 border-[var(--blue-color)] text-[var(--blue-color)] hover:bg-[var(--blue-color)] transition-all duration-300 ease-in-out hover:text-white rounded-full w-10 h-4 py-[2px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
