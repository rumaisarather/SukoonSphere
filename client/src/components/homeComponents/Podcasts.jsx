import React from "react";
import PodcastCard from "../sharedComponents/podcastCard";
import SectionTitle from "../sharedComponents/SectionTitle";
import { SectionWrapper } from "@/assets/styles/HomeLayout";
import { podcasts } from "@/utils/Podcast";

function Podcasts() {
  return (
    <SectionWrapper>
      <div className="space-y-4 max-w-7xl mx-auto bg-white">
        <SectionTitle title="Recent Podcasts" />
        <div className="space-y-8">
          {podcasts.slice(0, 3).map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Podcasts;
