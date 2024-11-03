import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginMessage = () => {
    const [countdown, setCountdown] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            navigate('/posts');
        }
        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div className='w-96 h-96 bg-green-600 flex items-center justify-center flex-col'>
            <h1 className='text-white text-2xl'>Successfully logged in</h1>
            <p className='text-white'>Redirecting in {countdown}...</p>
        </div>
    );
};

export default LoginMessage;
