import customFetch from '@/utils/customFetch';
import React from 'react'
import { Form } from 'react-router-dom'
export const signupAction = async ({ request }) => {
    const result = await request.formData();
    const data = Object.fromEntries(result);
    try {
        const response = await customFetch.post("auth/register", data)
        console.log({ response })
        return response;

    } catch (error) {
        console.log(error)
        return error;
    }

}

const SignUp = () => {
    return (
        <div>
            <h1>Signup</h1>
            <Form method='post'>
                <input type="email" name="email" id="email" placeholder='email' />
                <input type="text" name="name" id="name" placeholder='Type name here..' />
                <input type="password" name="password" id="password" placeholder='Password here..' />
                <button type="submit">SignUp</button>
            </Form>

        </div >
    )
}

export default SignUp
