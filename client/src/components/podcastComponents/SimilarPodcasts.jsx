
import SideBarPodcast from "./SideBarPodcast";

const SimilarPodcasts = ({ title }) => {
  console.log(title)
  return (
    <div className="card grid ">
      <h1 className="card-title text-black">{title}</h1>
      <SideBarPodcast />
      <div className="grid"></div>
    </div>
  );
};
export default SimilarPodcasts