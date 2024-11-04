import { Outlet, redirect } from "react-router-dom"
import { Wrapper } from "../assets/styles/HomeLayout"
import { Footer, Header } from "../components"
import { ScrollRestoration } from "react-router-dom"
import customFetch from "@/utils/customFetch"
export const logoutAction = async () => {
  try {
    const response = await customFetch.get("/auth/logout")
    console.log({ response })
    return redirect("/")
  } catch (error) {
    console.log({ error })
  }

}
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