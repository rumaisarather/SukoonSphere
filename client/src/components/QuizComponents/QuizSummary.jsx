import React from 'react';
import LinkButton from '../sharedComponents/Buttons/LinkButton';

function QuizSummary({ SummaryTitle, SummarySubtitle, ShortDescription, ContentTitle, ContentSubtitle }) {
    return (
        <div className="p-4 md:p-2 lg:p-0">
            <div>
                <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-2">{SummaryTitle}</h1>
                <p className="text-gray-600 mb-4 text-sm md:text-base lg:text-base">
                    {SummarySubtitle}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center mb-6">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Avatar"
                    className="w-8 h-8  rounded-full mr-3"
                />
                <span className="text-sm md:text-base lg:text-base font-semibold text-gray-700">Sartaj Ashraf</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-sm md:text-base lg:text-base font-semibold text-gray-700">Published On: 20-12-2002</span>
            </div>

            <div className="mb-4">
                <div className="mb-6 overflow-hidden rounded-lg flex flex-col md:flex-row " >
                    <img
                        src="https://www.verywellmind.com/thmb/vpCJ7huBZN7bNeG44BBWOTT1d-M=/868x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HowtoEndaConversation_final-b4b6ce5dbb3b417789dcb2bf195bd257.png"
                        alt="Quiz Image"
                        className="md:w-60  object-cover"
                    />
                    <h3 className="text-lg text-gray-400 font-medium my-3 md:mx-4">
                        {ShortDescription}
                    </h3>
                </div>

                <div className="mt-4">
                    <h1 className="text-xl md:text-xl lg:text-1xl font-bold text-gray-900 mb-2">{ContentTitle}</h1>
                    <h4 className="text-sm md:text-base lg:text-base text-gray-400 font-medium">{ContentSubtitle}</h4>
                </div>

                <div className="mt-4 flex justify-center sm:justify-start">
                    <LinkButton size="large" variant="primary" to='quiz' className="text-sm md:text-base font-semibold" >
                        Read more
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default QuizSummary;
