import { Fragment } from "react"
import { Hero, Stastistics } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";

const Home = () => {
  return (
    <Fragment>
      <Hero></Hero>
      <TodayEssentials></TodayEssentials>
      <Stastistics />
    </Fragment>
  )
}
export default Home;