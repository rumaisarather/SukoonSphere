import React from 'react'
import bgImg from "../../assets/images/Articles.jpg";
import { HeaderImg, SimilarArticles } from '@/components';

const Article = () => {
    const data = {
        title: "In July, the Earth experienced the hottest days in recorded history.",
        date: "On average, the Earth is now 1.35°C (2.43°F) hotter than pre-industrial times.",
        temperature: "With the record set on July 22 at 17.16°C (62.89°F).",
        content: [
            "It can be challenging to understand opaque climate numbers. '400 parts per million of CO2,' 'preventing 'two degrees of warming,' or 'one foot of sea level rise' mean little to most people, making climate change easy to ignore or deny. For most of my life, growing up in the suburbs of Houston, Texas, I was privileged not to experience the impacts of fossil fuel use. But eventually, the impacts hit home.",
            "My uncle used to work at the Bokaro Steel Plant in Bihar, India, first on the plant's floor and eventually as a manager. Steel production requires a lot of coal, and with coal comes dust and particulates that workers inhale.",
            "A few years ago, my uncle started experiencing lung problems and was diagnosed with pneumoconiosis (also known as black lung). Despite this, he opted for a lung transplant, but complications arose, and he passed away a few weeks later.",
            "Unfortunately, my uncle’s death was not an isolated incident. In 2023, over 5 million people died globally due to air pollution from fossil fuel use. Within the US, certain regions and demographics are more affected than others. Driving just 30 minutes outside of downtown Houston to Deer Park, or neighborhoods near the Houston Ship Channel, one encounters rows and rows of oil refineries and families where nearly everyone has cancer or respiratory issues. ",
            "These families are often people of color. They are exposed to 30% more particulate matter than the general population. Beyond the direct impacts of air pollution, increased heat waves can result in more excess deaths than COVID-19. It is undeniable that pollution and extreme heat have real human health impacts.",
        ]
    };

    return (
        <>
            <HeaderImg currentPage="Article" bgImg={bgImg} />
            <div className='relative max-w-7xl mx-auto grid grid-cols-12 gap-6'>

                <div className="col-span-8">
                    <div className=' space-y-4'>
                        <h1 className="text-4xl font-bold mb-4 text-[var(--black-color)]">Our mission is to help you prioritize your mental health and find balance.</h1>
                        <p className="mb-4 text-[var(--black-color)]">
                            Here at SukoonSphere, we know that there’s no one-size-fits-all approach when it comes to mental health and wellness because we’re living it every day with you. That’s why we’re the only dedicated mental health and wellness platform that’s there for you in all aspects of your life—whether you’re living with a mental health condition, managing day-to-day stressors, looking to level up your relationships, or tapping into fascinating psychology theories, we hope you’ll leave feeling empowered to take the next steps toward showing up as your best self.
                        </p>
                        <img src={bgImg} alt="" />
                        <p className="mb-4 text-[var(--black-color)]">
                            As research in this space constantly evolves, so does our understanding of these topics. You can count on us to sift through the noise that too often makes mental health advice confusing or misinformed, bringing it back down to earth through clear and actionable guidance. To earn your trust, we have a powerhouse team of experts, licensed therapists, board-certified psychiatrists, and the latest studies to back everything you’re reading with a stamp of approval.
                        </p>
                        <p className='text-[var(--black-color)]'>
                            But we also acknowledge that research is never the whole story and has implicit gaps and biases that don’t capture the full spectrum of lived experiences. Societal shifts and cultural awareness are bound to any conversation around mental health. We promise to never stop learning and putting diverse voices front and center to help us fill in those gaps. We want you to see yourself in the communities we reach and in the stories we share.
                        </p>
                    </div>
                    <div className='mt-3'>
                        <h2 className="text-2xl font-bold mb-2 text-[var(--black-color)]">{data.title}</h2>
                        <p className="text-sm mb-4 text-gray-500">{data.date}</p>
                        <p className="text-sm mb-2">{data.temperature}</p>
                        <div className="text-justify text-gray-800">
                            {data.content.map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-4 sticky top-[10%] h-svh overflow-auto">
                    <div
                        className="bg-white shadow-xl p-4 rounded flex flex-col gap-8 order-3"
                        style={{ height: "max-content" }}
                    >
                        {/* Similar articles */}
                        <SimilarArticles title="Recent Articles" />
                        {/* Recent articles */}
                        <SimilarArticles title="Similar Articles" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Article;
