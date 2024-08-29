import React from 'react';
import LinkButton from '../sharedComponents/Buttons/LinkButton';

function QuizSummary({ SummaryTitle, SummarySubtitle, ShortDescription, ContentTitle, ContentSubtitle }) {
    return (
        <div className="p-4 md:p-2 lg:p-0">
            <div>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{SummaryTitle}</h1>
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
                <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-700">Sartaj Ashraf</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-700">Published On: 20-12-2002</span>
            </div>

            <div className="mb-4">
<<<<<<< Updated upstream
                <div className="flex flex-col sm:flex-row items-center overflow-hidden rounded-lg">
                    <img
                        src="https://www.verywellmind.com/thmb/dLVX1N9D4xTj5sXz4q4bCYcFT_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWlove_separationanxiety_final_nologo-58e76ae2348443329a1bb5f860a21221.jpg"
                        alt="Quiz Image"
                        className="w-full sm:w-60 h-40 sm:h-auto object-cover mb-4 sm:mb-0"
                    />
                    <h3 className="text-sm md:text-base lg:text-lg text-gray-400 font-medium sm:ml-4 text-center sm:text-left">
=======
                <div className="mb-6 overflow-hidden rounded-lg flex flex-col md:flex-row " >
                    <img
                        src="https://www.verywellmind.com/thmb/dLVX1N9D4xTj5sXz4q4bCYcFT_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWlove_separationanxiety_final_nologo-58e76ae2348443329a1bb5f860a21221.jpg"
                        alt="Quiz Image"
                        className="md:w-60  object-cover"
                    />
                    <h3 className="text-lg text-gray-400 font-medium my-3 md:mx-4">
>>>>>>> Stashed changes
                        {ShortDescription}
                    </h3>
                </div>

                <div className="mt-4">
                    <h1 className="text-xl md:text-xl lg:text-3xl font-bold text-gray-900 mb-2">{ContentTitle}</h1>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-400 font-medium">{ContentSubtitle}</h4>
                </div>

                <div className="mt-4 flex justify-center sm:justify-start">
                    <LinkButton size="large" variant="primary" className="text-sm md:text-base font-semibold" to="#">
                        Read more
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default QuizSummary;
