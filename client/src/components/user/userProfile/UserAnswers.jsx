import React, { useEffect, useState } from 'react'
import { useUser } from '@/context/UserContext';
import customFetch from '@/utils/customFetch';

const UserAnswers = () => {
    const { user } = useUser();
    const [answers, setAnswers] = useState([]);
    const fetchUserPosts = async () => {
        const { data } = await customFetch.get(`/answers/user/${user._id}`);
        setAnswers(data.answers);
        console.log({ dat: data.answers })
    }
    useEffect(() => {
        fetchUserPosts();
    }, [])

    return (

        <div className='bg-white shadow rounded-lg p-4 space-y-4'>
            <h2 className="text-xl font-bold mb-4 text-black text-center" >Answers Given</h2>
            <div className="divide-y divide-gray-200 space-y-4">
                {answers?.length === 0 ? (
                    <p className="text-[var(--primary)] text-center py-4">No answers given yet !</p>
                ) : (
                    answers.map((answer) => (
                        <h1 key={answer._id} className='text-xl '>{answer.answerText}</h1>
                    ))
                )}
            </div>
        </div>
    )
}

export default UserAnswers
