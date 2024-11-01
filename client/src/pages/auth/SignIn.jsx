import React from "react";
import customFetch from "@/utils/customFetch";
import { Form } from "react-router-dom";
import img_bg from "../../assets/images/bg_login.png";
import { Link } from "react-router-dom";
export const signinAction = async ({ request }) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  try {
    const response = await customFetch.post("auth/login", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const SignIn = () => {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto my-6 align-middle">
      <div className="flex flex-col p-6 items-center gap-4 my-auto mr-4">
      <h2 className="font-bold text-5xl text-[var(--grey--900)] text-left leading">
          Welcome to Your Sanctuary of Peace
        </h2>
        <p className="text-[1.2rem]">
          Log in to unlock your path to mindfulness, connect with a
          compassionate community, and continue your journey towards inner
          balance and personal growth.
        </p>
        <Form
          method="post"
          className=" flex flex-col gap-4 bg-[var(--primary)] shadow-lg p-8 w-full rounded-[20px]"
        >
        <h1 className="font-bold text-white text-center">Sign In</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />

          <button type="submit" className="btn w-full action-button">
            SignIn
          </button>
          <Link to='/' className="text-white  text-center"> Create an account </Link>
        </Form>
      </div>
      <div className="flex flex-col gap-6 py-6  ">
    
        <img
          src={img_bg}
          alt="bg-mind-img"
          className="  mx-auto object-cover "
        />
      </div>
    </div>
  );
};

export default SignIn;
