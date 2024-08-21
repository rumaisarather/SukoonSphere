import { Fragment } from "react"
import { Hero, Stastistics,Podcasts } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";

const Home = () => {
  return (
    <Fragment>
      <Hero></Hero>

      <TodayEssentials></TodayEssentials>
      <Stastistics />
      <Podcasts/>
    </Fragment>
  )
}
export default Home;