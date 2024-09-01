
import { podcasts } from "@/utils/Podcast";
import SideBarPodcast from "./SideBarPodcast";

const SimilarPodcasts = ({ title }) => {
  console.log(title)
  return (
    <div className="card grid ">
      <h1 className="card-title text-black">{title}</h1>
      {
        podcasts.slice(0,4).map((_podcast)=>{
return <SideBarPodcast podcast={_podcast}/>;
        })
      }
    </div>
  );
};
export default SimilarPodcasts