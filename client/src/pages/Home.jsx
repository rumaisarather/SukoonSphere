import { Fragment } from "react"
import { Hero, Stastistics, Podcasts, TopIntro, TodaysQuiz, OurStory, Infography } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";
import SectionTitle from "@/components/sharedComponents/SectionTitle";

const Home = () => {
  return (
    <Fragment>
      <TopIntro />
      <Hero></Hero>
      <OurStory></OurStory>
      <Infography></Infography>
      <TodayEssentials></TodayEssentials>
      <SectionTitle title="Recent Quizzes" />
      <TodaysQuiz></TodaysQuiz>
      {/* <Stastistics /> */}
      <Podcasts />
    </Fragment>
  )
}
export default Home;