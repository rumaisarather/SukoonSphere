import React from 'react'
import customFetch from '@/utils/customFetch';
import { Form } from 'react-router-dom'
export const signinAction = async ({ request }) => {
    const result = await request.formData();
    const data = Object.fromEntries(result);
    try {
        const response = await customFetch.post("auth/login", data)
        console.log(response)
        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}
const SignIn = () => {
    return (
        <div>
            <div>
                <h1>Signup</h1>
                <Form method='post'>
                    <input type="email" name="email" id="email" placeholder='email' />
                    <input type="password" name="password" id="password" placeholder='Password here..' />
                    <button type="submit">SignUp</button>
                </Form>

            </div >
        </div>
    )
}

export default SignIn
