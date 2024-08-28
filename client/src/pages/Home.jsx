import { Fragment } from "react"
import { Hero, Stastistics, Podcasts, Quiz } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";

const Home = () => {
  return (
    <Fragment>
      <Hero></Hero>
      <TodayEssentials></TodayEssentials>
      <Quiz></Quiz>
      <Stastistics />
      <Podcasts />
    </Fragment>
  )
}
export default Home;