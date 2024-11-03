
import customFetch from '@/utils/customFetch';
import React, { useState } from 'react'
import { Form, useActionData, useLocation, useNavigation } from 'react-router-dom'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

// const { token, email, password } = req.body
const ResetPassword = () => {
    const [password, setPassoword] = useState('')
    const query = useQuery();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const data = useActionData();
    const resetPassword = async () => {
        try {
            const { data } = await customFetch.post("/auth/reset-email", {
                token: query.get("token"),
                email: query.get("email"),
                password
            });
            console.log({ data });
        } catch (error) {
            console.log({ error })
        }
    };
    return (
        <div>
            <form>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassoword(e.target.value)}
                    placeholder="New password..."
                    className="input input-bordered w-full bg-gray-100 text-[var(--black-color)]"
                />
                <button disabled={isSubmitting} className="btn w-full action-button" onClick={resetPassword}>
                    {isSubmitting ? "Plase wait..." : "Reset Password"}
                </button>
            </form>

        </div>
    )
}

export default ResetPassword
