
import { TbWorldUpload } from "react-icons/tb";

import LinkButton from "../sharedComponents/Buttons/LinkButton";
import { SectionWrapper } from "@/assets/styles/HomeLayout";
import SectionTitle from "../sharedComponents/SectionTitle";
import { articles } from "@/utils/Articles";
import Article from "../articleComponents/Article";
import { Link } from 'react-router-dom';
import { ProfessionalsDetails } from "@/utils/ProfessionalsDetails";


const TodayEssentials = () => {
    return (
        <section className="max-w-7xl mx-auto bg-white">
            <SectionWrapper>
                <SectionTitle title={'recent articles'}></SectionTitle>
                <div className="grid lg:grid-cols-12 gap-3  ">

                    {/* Left Side Content */}
                    <div className="col-span-4 flex flex-col justify-between shadow-lg" >
                        <div className="w-full p-3 pt-4 sticky top-20">

                            <div className="space-y-4 flex flex-col text-center">
                                <h2 className="text-2xl font-bold text-[#0c2b64]">Our Review Board</h2>
                                <p className="text-gray-800">
                                    Our team of board-certified physicians and other mental health professionals ensures our content is accurate, up-to-date, and inclusive.
                                </p>
                                <h2 className="text-sm font-bold text-[#0c2b64] pt-10">
                                    Meet the Board Members
                                </h2>
                            </div>
                            <div className="grid grid-cols-3 gap-3 p-2 place-items-center">
                                {ProfessionalsDetails.map((professional) => (
                                    <Link
                                        to={`/user-profile/${professional.userId}`}
                                        key={professional.userId}
                                        className="block"
                                    >
                                        <div className="text-center">
                                            <img
                                                src={professional.profile.image}
                                                alt={`${professional.profile.name}'s profile`}
                                                width={'150px'}
                                                className="rounded-full"
                                            />
                                            <span className="text-xs font-bold text-gray-900 block mt-2">
                                                {professional.profile.fullTitle}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>


                    </div>
                    {/* Right Side Cards */}
                    <div className="col-span-8 flex flex-col space-y-12">
                        {articles.slice(0, 3).map((article) => (
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
