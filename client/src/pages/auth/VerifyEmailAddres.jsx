// src/pages/auth/VerifyEmailAddres.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import customFetch from '@/utils/customFetch';

export const VerifyEmailAddres = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Extract query parameters from the URL
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const email = params.get('email');

        if (token && email) {
            const verifyEmail = async () => {
                try {
                    const response = await customFetch.post('verify-email', {
                        email,
                        verificationToken: token,
                    });
                    setMessage(response.data.msg);
                } catch (err) {
                    setError(err.response?.data?.msg || 'Verification failed');
                }
            };
            verifyEmail();
        } else {
            setError('Invalid verification link');
        }
    }, [location]);

    return (
        <div className="email-verification p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {message && <p className="text-green-500 text-center mb-4">{message}</p>}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            </div>
        </div>
    );
};

export default VerifyEmailAddres;
