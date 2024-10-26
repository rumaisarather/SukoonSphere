import { Link } from "react-router-dom";

const SideBarArticle = ({ article }) => {
  const { title, description } = article;
  return (
    <div className="grid grid-cols-3 gap-x-4 border-b pl-4 pb-8 ">
      <div className="col-span-1">
        <Link to="#">
          <img
            className="rounded object-cover h-[100px]"
            src="data:image/jpeg;base64,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"
            alt="category"
          />
        </Link>
      </div>
      <div className="col-span-2">
        <Link to="#">
          <h1 className="text-[var(--primary)] hover:text-[var(--ternery)] text-lg">
            {title}
          </h1>
        </Link>
      </div>
    </div>
  );
}
export default SideBarArticle