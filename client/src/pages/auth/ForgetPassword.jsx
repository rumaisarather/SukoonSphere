import { InputComponent } from "@/components/sharedComponents/FormRow";
import customFetch from "@/utils/customFetch";
import React from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
export const forgetPasswordAction = async ({ request }) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  try {
    const response = await customFetch.post("auth/forget-password", data);
    console.log({ response });
    return { success: response.data.msg };
  } catch (error) {
    console.log({ error });
    return {
      error: error?.response?.data?.msg || "An error occurred during signup.",
    };
  }
};
const ForgetPassword = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <Form
        method="post"
        className="flex flex-col bg-[var(--primary)] gap-4  rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-[var(--white-color)] ">Enter Your Email.</h1>
        {data?.success && (
          <p className="text-[var(--btn-secondary)] text-center">
            {data.success}
          </p>
        )}
        <p className="text-red-400 text-center">
          {data?.error && data.error.split(",")[0]}
        </p>
        <InputComponent
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
        />
        <button type="submit" disabled={isSubmitting} className="btn-2 w-full">
          {isSubmitting ? "Plase wait..." : "Send email"}
        </button>
      </Form>
    </div>
  );
};

export default ForgetPassword;
