import Article from "@/components/articleComponents/Article";
import { articles } from "@/utils/Articles";
const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-white">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 grid gap-6 shadow-lg p-4 ">
          {
            articles.map((article)=>{
                return<Article article={article}/>
            })
          }
        </div>
        <div className="col-span-4 bg-gray-400">sidebar</div>
      </div>
    </div>
  );
}
export default Articles