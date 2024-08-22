import React from "react";
import { Link } from "react-router-dom";

function PodcastCard() {
  return (
    <div className="card lg:card-side bg-white shadow-md  h-3/5 w-4/5 place-items-center">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body p-3 w-full " >
        <h2 className="card-title">First Recording</h2>
        <div className="flex gap-3 justify-center items-center">
        <div className="avatar">
  <div className="w-8 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<p>Hinata</p>
        </div>
        <p>
          Summary: It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, anda reacd more.
        </p>
        <div className="card-actions justify-between items-center">
        <audio controls className="w-4/6 h-full " >
  <source src="" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
</audio>
<div className="card-actions flex gap-3c audio" >
          <Link className="btn btn-primary text-white">Read More</Link>
          {/* <button className="p-2 pl-4 pr-4 rounded-xl btn-primary  bg-blue-400 text-white min-h-6">Listen</button> */}
</div>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;
