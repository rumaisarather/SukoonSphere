import { Outlet } from "react-router-dom"
import { Wrapper } from "../assets/styles/HomeLayout"
import { Footer, Header } from "../components"
import { ScrollRestoration } from "react-router-dom"
const HomeLayout = () => {
  return (
    <Wrapper>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />

    </Wrapper>
  )
}
export default HomeLayout