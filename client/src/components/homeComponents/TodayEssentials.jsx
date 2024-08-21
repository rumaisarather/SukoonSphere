
import { TbWorldUpload } from "react-icons/tb";
import Button from "../sharedComponents/ActionButton";
import Card from "../sharedComponents/Card";
import ArticleCard from "../sharedComponents/ArticleCard";
import LinkButton from "../sharedComponents/LinkButton";
const TodayEssentials = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 bg-white mt-44">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Side Content */}
                <div className="col-span-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Read what’s new</h2>
                        <p className="text-gray-600 mt-4">
                            Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
                            Veniam elit magna anim ipsum eiusmod eu
                        </p>
                    </div>
                    <button className="btn btn-outline mt-6">Explore more</button>
                </div>

                {/* Right Side Cards */}
                <div className="col-span-2 flex flex-col">
                    <div className="flex space-x-4">


                        <ArticleCard
                            title="Anim sint Lorem excepteur commodo"
                            imagePlaceholderText="Image Placeholder"
                            avatarUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            name="John Doe"
                            date="Oct 12, 2022"
                            buttonLabel="View Details"
                        />
                        <ArticleCard
                            title="Anim sint Lorem excepteur commodo"
                            imagePlaceholderText="Image Placeholder"
                            avatarUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            name="John Doe"
                            date="Oct 12, 2022"
                            buttonLabel="View Details"
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-end mt-4 space-x-2">


                        <LinkButton variant="primary" size="small" > Primary Button </LinkButton>
                    </div>
                </div>

            </div>
        </section >
    );
};
export default TodayEssentials
