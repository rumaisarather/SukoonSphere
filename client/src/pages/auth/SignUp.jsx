import customFetch from "@/utils/customFetch";
import React from "react";
import { Form, useActionData } from "react-router-dom";
import img_bg from "../../assets/images/bg_signup.png";
import { Link } from "react-router-dom";
import { useNavigation } from "react-router-dom";
export const signupAction = async ({ request }) => {
  const result = await request.formData();
  const user = Object.fromEntries(result);

  // Validation logic
  const errors = {};
  if (!user.name || user.name.trim() === "") {
    errors.name = "Name is required.";
  }
  if (!user.email || user.email.trim() === "") {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Invalid email format.";
  }
  if (!user.password || user.password.trim() === "") {
    errors.password = "Password is required.";
  } else if (user.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return { errors };
  } 

  try {
    const data = await customFetch.post("auth/register", user);
    return data.data;
  } catch (error) {
    console.log({error})
    return { error: error?.response?.data?.message || "An error occurred during signup." };
  }
};

const SignUp = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();

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

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type name here.."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />
          {data?.errors?.name && <p className="text-red-500 text-sm">{data.errors.name}</p>}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter an email.."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />
          {data?.errors?.email && <p className="text-red-500 text-sm">{data.errors.email}</p>}

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password.."
            className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
          />
          {data?.errors?.password && <p className="text-red-500 text-sm">{data.errors.password}</p>}

          <button type="submit" disabled={isSubmitting} className="btn w-full action-button">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <Link to="/auth/sign-in" className="text-white text-center">
            Already have an account!
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
