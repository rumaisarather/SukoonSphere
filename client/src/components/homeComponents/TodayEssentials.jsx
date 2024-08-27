
import { TbWorldUpload } from "react-icons/tb";
import Button from "../sharedComponents/Buttons/ActionButton";
import Card from "../sharedComponents/Card";
import ArticleCard from "../sharedComponents/ArticleCard";
import LinkButton from "../sharedComponents/Buttons/LinkButton";
import { SectionWrapper } from "@/assets/styles/HomeLayout";
const TodayEssentials = () => {
    return (
        <section className=" mx-auto px-4  bg-white mt-28">
            <SectionWrapper>
                <div className="sectionHeader flex items-center pb-6">
                    <h3 className="text-lg font-normal" style={{ fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: 'normal' }}>
                        RECENT ARTICLES
                    </h3>
                    <div className="flex-grow h-0.5 bg-[var(--sec-color)] ml-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">

                    {/* Left Side Content */}
                    <div className="col-span-1 flex flex-col justify-between pr-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Read what’s new</h2>
                            <p className="text-gray-600 mt-4 mb-4">
                                Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
                                Veniam elit magna anim ipsum eiusmod eu
                            </p>
                            <LinkButton to="/#" variant="primary" size="small" className="uppercase">Read more</LinkButton>

                        </div>
                    </div>

                    {/* Right Side Cards */}
                    <div className="col-span-2 flex flex-col space-y-12">

                        <ArticleCard
                            title="Anim sint Lorem excepteur commodo"
                            subtile=" Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo."
                            avatarUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            name="John Doe"
                            date="Oct 12, 2022"
                            buttonLabel="View Details"
                        />
                        <ArticleCard
                            title="Anim sint Lorem excepteur commodo"
                            subtile=" Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo."
                            avatarUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            name="John Doe"
                            date="Oct 12, 2022"
                            buttonLabel="View Details"
                        />
                        <ArticleCard
                            title="Anim sint Lorem excepteur commodo"
                            subtile=" Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo."
                            avatarUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            name="John Doe"
                            date="Oct 12, 2022"
                            buttonLabel="View Details"
                        />
                        {/* <ArticleCard
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
                            /> */}
                    </div>
                </div>
            </SectionWrapper>
        </section >
    );
};
export default TodayEssentials
