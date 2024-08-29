
import { TbWorldUpload } from "react-icons/tb";
import Button from "../sharedComponents/Buttons/ActionButton";
import Card from "../sharedComponents/Card";
import ArticleCard from "../sharedComponents/ArticleCard";
import LinkButton from "../sharedComponents/Buttons/LinkButton";
import { SectionWrapper } from "@/assets/styles/HomeLayout";
import SectionTitle from "../sharedComponents/SectionTitle";
import { articles } from "@/utils/Articles";
import Article from "../articleComponents/Article";

import CompanyLogo from "../../assets/images/SukoonSphere_Logo.png";

const TodayEssentials = () => {
    return (
<<<<<<< Updated upstream
        <section className=" px-4  bg-white mt-28">
=======
        <section className=" mx-auto px-4  bg-white md:mt-8">
>>>>>>> Stashed changes
            <SectionWrapper>
                <SectionTitle title={'recent articles'}></SectionTitle>
                <div className="grid  lg:grid-cols-12 gap-2  ">

                    {/* Left Side Content */}
                    <div className="col-span-4 flex flex-col justify-between pr-4 shadow-lg" >

                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-gray-900 ">Read what’s new</h2>
                            <p className="text-gray-600 mt-4 mb-4">
                                Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
                                Veniam elit magna anim ipsum eiusmod eu
                            </p>
                        </div>
                        <div className="artboard phone-2">
                            <div>
                                <div className="space-y-4 flex flex-col items-center  ">
                                    <h1 className="uppercase text-xl text-bold text-[var(--black-color)]">Official Articles of </h1>
                                    <img src={CompanyLogo} alt="Logo Loading..." width={'150px'} />
                                    <h2 className="uppercase text-xl text-bold text-[var(--black-color)]">The chefs</h2>
                                </div>
                                <div className="grid grid-cols-4 gap-3 p-2 place-items-center grayscale">
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' className="grayscale-0" alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />
                                    <img src='https://secure.gravatar.com/avatar/5a5be2e85a4d89ae4c64a45bd7d82846?s=96&d=mm&r=g' alt="Logo Loading..." width={'150px'} />

                                </div>

                            </div>
                        </div>

                        {/* <LinkButton to="/#" variant="primary" size="small" className="uppercase">Read more</LinkButton> */}
                    </div>
                    {/* Right Side Cards */}
                    <div className="col-span-8 flex flex-col space-y-12">

                        {/* <ArticleCard
                            title="Anim sint Lorem excepteur commodo"
                            subtile=" Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem et quaerat quos repudiandae quod deleniti nulla illum mollitia illo."
                            avatarUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            name="John Doe"
                            date="Oct 12, 2022"
                            buttonLabel="View Details"
                        /> */}

                        {
                            articles.slice(0, 3).map((article) => (
                                <Article key={article.id} article={article} />
                            ))
                        }

                    </div>
                </div>
            </SectionWrapper>
        </section >
    );
};
export default TodayEssentials
