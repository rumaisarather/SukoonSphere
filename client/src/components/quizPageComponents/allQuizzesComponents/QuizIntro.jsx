import React from 'react'

function QuizIntro({ title, description }) {
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-[#0c2b64] mb-4">{title}</h2>
                <div className="border-l-4 border-green-600 bg-[#e8f5f9] p-4 mb-6 rounded-lg">
                    <p className="italic text-gray-700">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuizIntro
