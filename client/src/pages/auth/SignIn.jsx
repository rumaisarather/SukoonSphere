import React, { useState } from "react";
import customFetch from "@/utils/customFetch";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import img_bg from "../../assets/images/bg_login.png";
import { Link } from "react-router-dom";
import { GrLogin } from "react-icons/gr";
import { InputComponent } from "@/components/sharedComponents/FormRow";
import { useUser } from '@/context/UserContext';

export const signinAction = async ({ request }) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  try {
    const response = await customFetch.post("auth/login", data);
    console.log({ response })
    return redirect("/posts");

  } catch (error) {
    return { error: error?.response?.data?.msg || "Something went wrong" };
  }
};

const SignIn = () => {
  const { login, isLoading, error } = useUser();
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    const result = await login(userData);
    if (result.success) {
      navigate("/posts")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 rounded-[10px]">
      <div className="bg-white shadow-xl max-w-6xl flex">
        {/* Form Section - Light Half */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center bg-[var(--primary)]">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="logo" className="w-14  h-14" />
          </div>
          <Form
            method="post"
            className="flex flex-col gap-4 p-4 rounded-[10px] w-full max-w-[500px] mx-auto"
            onSubmit={handleSubmit}
          >
            <p className="text-red-400 text-center">
              {error && error.split(",")[0]}
            </p>
            <h1 className="font-bold text-[var(--white-color)] text-center text-2xl">Sign In</h1>

            <InputComponent type="email" name="email" placeholder="Enter an email.." />
            <InputComponent type="password" name="password" placeholder="Enter password.." />
            <button type="submit" className="btn-2 w-full flex items-center justify-center gap-2">
              Sign In
              <GrLogin />
            </button>
            <Link to="/auth/sign-up" className="text-[var(--white-color)] text-center">
              Create an account
            </Link>
            <Link to="/user/forget-password" className="text-[var(--white-color)] text-center">
              Forget Password
            </Link>
          </Form>
        </div>
        {/* Image Section - Right Half */}
        <div className="w-1/2 p-4 pt-12 flex flex-col justify-center items-center bg-gray-50 rounded-r-lg">
          <h2 className="font-bold text-[2.5rem] text-[var(--gray--900)] text-center mb-4">
            SukoonSphere
          </h2>
          <p className="text-center mb-6 max-w-[400px] text-[var(--grey--800)]">
          </p>
          <img
            src={img_bg}
            alt="bg-mind-img"
            className="w-full max-w-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
