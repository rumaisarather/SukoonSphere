import customFetch from "@/utils/customFetch";
import React from "react";
import { Form, useActionData } from "react-router-dom";
import img_bg from "../../assets/images/bg_signup.png";
import { Link } from "react-router-dom";
import { useNavigation } from "react-router-dom";
export const signupAction = async ({ request }) => {
  const result = await request.formData();
  const user = Object.fromEntries(result);
  try {
    const response = await customFetch.post("auth/register", user);
    return { success: response.data.msg };
  } catch (error) {
    console.log({ error })
    return { error: error?.response?.data?.msg || "An error occurred during signup." };
  }
};
const SignUp = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();
  console.log({ data })
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto my-6 align-middle">

      <div className="flex flex-col gap-6 py-6">
        <h2 className="font-bold text-[3rem] text-[var(--grey--900)] text-left">
          Welcome to SukoonSphere
        </h2>
        <p className="text-[1.2rem]">
          Through personalized resources, expert guidance, and a compassionate
          community, we empower you to overcome challenges, foster growth, and
          lead a balanced, fulfilling life.
        </p>
        <img src={img_bg} alt="bg-mind-img" className="mx-auto object-cover" />
      </div>
      <div className="flex flex-col p-6 items-center gap-4">
        <Form
          method="post"
          className="flex flex-col gap-4 bg-[var(--primary)] shadow-lg p-8 w-full rounded-[20px]"
        >
          <h1 className="font-bold text-white text-center">Signup</h1>
          {data?.success && (
            <p className="text-[var(--white-color)] text-center">{data.success}</p>
          )}
          <p className="text-red-400 text-center">
            {data?.error && data.error.split(",")[0]}
          </p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type name here.."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />


          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter an email.."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password.."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />

          <button type="submit" disabled={isSubmitting} className="btn w-full action-button">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <Link to="/auth/sign-in" className="text-white text-center">
            Already have an account!
          </Link>
          <Link to="/user/forget-password" className="text-white text-center">
            Forget Passowrd
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
