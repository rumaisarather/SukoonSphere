import React from 'react'

function QuizHeader({ title, index, length }) {
    return (
        <>
            <div className="flex justify-between items-center ">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <div className="bg-[var(--logo-primary)] text-white px-4 py-2 rounded-full text-sm">
                    {index + 1}/{length}
                </div>
            </div>
            <hr className="border-gray-300 mt-4" />
        </>
    )
}

export default QuizHeader
