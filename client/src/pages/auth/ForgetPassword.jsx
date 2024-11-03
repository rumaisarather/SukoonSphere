
import customFetch from '@/utils/customFetch';
import React from 'react'
import { Form, useActionData, useNavigation } from 'react-router-dom'
export const forgetPasswordAction = async ({ request }) => {
    const result = await request.formData();
    const data = Object.fromEntries(result);
    try {
        const response = await customFetch.post("auth/forget-password", data);
        console.log({ response })
        return { success: response.data.msg };
    } catch (error) {
        console.log({ error })
        return { error: error?.response?.data?.msg || "An error occurred during signup." };
    }
};
const ForgetPassword = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const data = useActionData();
    return (
        <div>
            <Form method='post'>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email..."
                    className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
                />
                <button type="submit" disabled={isSubmitting} className="btn w-full action-button">
                    {isSubmitting ? "Plase wait..." : "Send email"}
                </button>
            </Form>

        </div>
    )
}

export default ForgetPassword
