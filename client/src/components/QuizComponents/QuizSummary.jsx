import React from 'react'
import LinkButton from '../sharedComponents/Buttons/LinkButton';

function QuizSummary({ SummaryTitle, SummarySubtitle, ShortDescription, ContentTitle, ContentSubtitle }) {

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{SummaryTitle}</h1>
            <p className="text-gray-600 mb-4">
                {SummarySubtitle}
            </p>
            <div className="flex items-center mb-6">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full mr-3"
                />
                <span className="text-sm font-semibold text-gray-700">Sartaj Ashraf</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-sm font-semibold text-gray-700">Published On: 20-12-2002</span>
            </div>
            <div className="mb-4">
                <div className="mb-6 overflow-hidden rounded-lg flex">
                    <img
                        src="https://www.verywellmind.com/thmb/dLVX1N9D4xTj5sXz4q4bCYcFT_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWlove_separationanxiety_final_nologo-58e76ae2348443329a1bb5f860a21221.jpg"
                        alt="Quiz Image"
                        className="w-60  object-cover"
                    />
                    <h3 className="text-lg text-gray-400 font-medium mx-4">
                        {ShortDescription}
                    </h3>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900 mb-2'>{ContentTitle}</h1>
                    <h4>{ContentSubtitle}
                        <LinkButton size="small" variant="secondary" className="text-sm font-semibold" to='#'>Read more</LinkButton>
                    </h4>

                </div>
            </div>

        </>
    )
}

export default QuizSummary
