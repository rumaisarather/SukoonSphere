import customFetch from "@/utils/customFetch";
import React from "react";
import { LuKeyRound } from "react-icons/lu";
import { Form, useActionData } from "react-router-dom";

// Action function for handling password change
export const changePasswordAction = async ({ request }) => {
  const result = await request.formData();
  console.log({result})
  const data = Object.fromEntries(result);
  console.log({data})
  try {
    const response = await customFetch.post("auth/change-password", data);
    console.log({response});
    return {success:response.data};
  } catch (error) {
    console.log({error:error.response.data.msg});
    return {error:error.response.data.msg};
  }
};

const ChangePassword = () => {
  const data = useActionData()
  console.log({datafromcomponent:data})
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif text-slate-800">
            Change Password
          </h1>
        </div>
        <div className="p-6 bg-white shadow-xl rounded-[6px]">
          <Form
          method='post'
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex bg-teal-100 p-4 rounded-full  ">
                <LuKeyRound className="w-12 h-12 text-teal-600" />
              </div>
              <p className="text-slate-600 text-center">
                Keep your account secure by creating a strong, unique password
              </p>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email..."
              className="input input-bordered w-full bg-white text-[var(--black-color)] p-3 rounded-[5px]"
            />
            <input
              type="password"
              name="password"
              placeholder="Current Password..."
              minLength={8}
              className="input input-bordered w-full bg-white text-[var(--black-color)] p-3 rounded-[5px]"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password..."
              minLength={8}
              className="input input-bordered w-full bg-white text-[var(--black-color)] p-3 rounded-[5px]"
            />
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New Password..."
              minLength={8}
              className="input input-bordered w-full bg-white text-[var(--black-color)] p-3 rounded-[5px]"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium p-3 rounded-[5px] transition duration-200"
            >
              Update Password
            </button>
          </Form>

          <div className="mt-4 text-center">
            <a href="#" className="text-teal-600 hover:text-teal-700 text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
