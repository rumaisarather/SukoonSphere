import React, { useState } from "react";
import customFetch from "@/utils/customFetch";
import { Form, redirect, useNavigate } from "react-router-dom";
import img_bg from "../../assets/images/bg_login.png";
import { Link } from "react-router-dom";
import { GrLogin } from "react-icons/gr";
import { InputComponent } from "@/components/sharedComponents/FormRow";

export const signinAction = async ({ request }) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  try {
    const response = await customFetch.post("auth/login", data);
    if (response.data.success) {
      return redirect("/posts");
    }
    return { error: "Invalid credentials" };
  } catch (error) {
    return { error: error?.response?.data?.msg || "Something went wrong" };
  }
};

const SignIn = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await customFetch.post("auth/login", Object.fromEntries(formData));
      console.log({ response })
      if (response.data.success) {
        navigate("/posts");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError(err?.response?.data?.msg || "Something went wrong");
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
            <h1 className="font-bold text-[var(--white-color)] text-center text-2xl">Sign In</h1>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                {error}
              </div>
            )}
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
