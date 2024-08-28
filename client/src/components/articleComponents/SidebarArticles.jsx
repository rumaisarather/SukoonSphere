import { articles } from "@/utils/Articles";
import { Link } from "react-router-dom";
import { SideBarArticle } from "..";

const SidebarArticles = () => {
  return (
    <div>
      {articles.slice(0, 4).map((article, index) => {
        return (
          <SideBarArticle key={index} article={article}/>
        );
      })}
    </div>
  );
};

export default SidebarArticles;
