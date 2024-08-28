import { articles } from "@/utils/Articles";
import { Article, Search, SimilarArticles } from "@/components";

const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-white mt-9">
      {/* aricles */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 grid gap-6  p-4 rounded">
          {articles.map((article, index) => {
            return <Article key={index} article={article} />;
          })}
        </div>
        {/* sidebar */}
        <div
          className="col-span-4 bg-white shadow-xl p-4 rounded flex flex-col gap-8 sticky top-4"
          style={{ height: "max-content" }}
        >
          {/* search filters*/}
          <Search />
          {/* similar articles*/}
          <SimilarArticles title="Recent Articles" />
          {/* recent articles*/}
          <SimilarArticles title="Similar Articles" />
        </div>
      </div>
    </div>
  );
}
export default Articles