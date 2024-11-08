import { useUser } from '@/context/UserContext';
import React, { useEffect, useState } from 'react'


const UserQuestions = () => {
    const { user } = useUser();
    const [questions, setQuestions] = useState([]);
    const fetchUserPosts = async () => {
        const { data } = await customFetch.get(`/questions/user/${user._id}`);
        setQuestions(data.questions);
        console.log({ dat: data.questions })
    }
    useEffect(() => {
        fetchUserPosts();
    }, [])

    return (

        <div className='bg-white shadow rounded-lg p-4 space-y-4'>
            <h2 className="text-xl font-bold mb-4 text-black text-center" >Question Posted</h2>
            <div className="divide-y divide-gray-200 space-y-4">
                {questions?.length === 0 ? (
                    <p className="text-[var(--primary)] text-center py-4">No questions asked yet !</p>
                ) : (
                    questions.map((question) => (
                        <h1 key={question._id} className='text-xl '>{question.questionText}</h1>
                    ))
                )}
            </div>
        </div>
    )
}

export default UserQuestions
