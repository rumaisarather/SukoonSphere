import { Outlet } from "react-router-dom"
import { Wrapper } from "../assets/styles/HomeLayout"
import { Footer, Header } from "../components"
const HomeLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  )
}
export default HomeLayout