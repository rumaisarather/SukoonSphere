import React from 'react';

function Intro({ name, image, fullTitle, role, specialty, expertise }) {
    console.log({ expertise })
    return (
        <div className='p-6 m-auto max-w-7xl mx-auto bg-[#e8f5f9]'>
            <div className="flex items-center p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <div className="flex-shrink-0 ">
                    <img
                        src={image}
                        alt={name}
                        className="h-48 object-cover rounded-full"
                    />
                </div>
                <div className="ml-6 flex space-x-12">
                    <div>
                        <h2 className="text-2xl font-bold text-[#0c2b64]">
                            {name}
                        </h2>
                        <p className="text-gray-600 flex items-center">
                            <span className="mr-2 text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            {role}
                        </p>
                        <div className="mt-2">
                            <p className="font-semibold text-[#0c2b64]">Full Title:</p>
                            <p className="text-gray-700">{fullTitle}</p>
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <p className="font-semibold text-[#0c2b64]">Specialty:</p>
                            <p className="text-gray-700">{specialty}</p>
                        </div>
                        {expertise && (
                            <div className="mt-2">
                                <p className="font-semibold text-[#0c2b64]">Expertise:</p>
                                {expertise.map((exp, index) => (
                                    <p key={index} className="text-gray-700 italic">"{exp}"</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
