import { Fragment } from "react"
import { Hero, Podcasts, TopIntro, TodaysQuiz, OurStory, Infography, TrendingVideos, CampusPartners, DisorderTags } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";

const Home = () => {
  return (
    <Fragment>
      <TopIntro />
      <Hero></Hero>
      <OurStory></OurStory>
      <DisorderTags></DisorderTags>
      <Infography></Infography>
      <TodayEssentials></TodayEssentials>
      <TodaysQuiz></TodaysQuiz>
      <TrendingVideos></TrendingVideos>
      <Podcasts />
      <CampusPartners />
    </Fragment>
  )
}
export default Home;