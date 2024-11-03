import React, { useState, useEffect } from "react";
import customFetch from "@/utils/customFetch";
import { Form, redirect, useNavigate } from "react-router-dom";
import img_bg from "../../assets/images/bg_login.png";
import { Link } from "react-router-dom";

export const signinAction = async ({ request }) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  try {
    await customFetch.post("auth/login", data);
    return redirect("/posts");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SignIn = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggingIn) {
      const timer = setTimeout(() => {
        navigate("/posts");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoggingIn, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
  };

  return (
    <div className="grid grid-cols-2 max-w-5xl mx-auto my-6 align-middle">
      {isLoggingIn ? (
        <div className="w-full h-screen flex items-center justify-center bg-green-600 text-white">
          <h1 className="text-3xl">Successfully logged in, redirecting in 3 seconds...</h1>
        </div>
      ) : (
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
            className="flex flex-col gap-4 bg-[var(--primary)] shadow-lg p-8 w-full rounded-[20px]"
            onSubmit={handleSubmit}
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
              Sign In
            </button>
            <Link to='/auth/sign-in' className="text-white text-center">Create an account</Link>
            <Link to="/user/forget-password" className="text-white text-center">
              Forget Password
            </Link>
          </Form>
        </div>
      )}
      <div className="flex flex-col gap-6 py-6">
        <img
          src={img_bg}
          alt="bg-mind-img"
          className="mx-auto object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
