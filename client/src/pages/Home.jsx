import { Fragment } from "react"
import { Hero, Stastistics, Podcasts, TopIntro, TodaysQuiz, OurStory, Infography, TrendingVideos } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";

const Home = () => {
  return (
    <Fragment>
      <TopIntro />
      <Hero></Hero>
      <OurStory></OurStory>
      <Infography></Infography>
      <TodayEssentials></TodayEssentials>
      <TodaysQuiz></TodaysQuiz>
      <TrendingVideos></TrendingVideos>
      {/* <Stastistics /> */}
      <Podcasts />
    </Fragment>
  )
}
export default Home;