import React, { useState, useEffect } from 'react';
import { FaExclamationCircle, FaSadTear, FaPrescriptionBottle, FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Infography() {
    const mentalHealthStats = [
        {
            category: 'Anxiety Disorders',
            percentage: 31.1,
            description: 'Anxiety disorders affect over 31% of adults globally at some point in their lives, making it one of the most common mental health challenges.',
            icon: <FaExclamationCircle className="text-white text-2xl" />,
        },
        {
            category: 'Depression',
            percentage: 4.4,
            description: 'Over 264 million people of all ages suffer from depression worldwide, representing approximately 4.4% of the global population.',
            icon: <FaSadTear className="text-white text-2xl" />,
        },
        {
            category: 'Substance Abuse',
            percentage: 2.5,
            description: 'Around 2.5% of the global population is affected by substance abuse disorders, often leading to other mental health issues.',
            icon: <FaPrescriptionBottle className="text-white text-2xl" />,
        },
        {
            category: 'Bipolar Disorder',
            percentage: 1.3,
            description: 'Approximately 1-3% of the global population suffers from bipolar disorder, which is characterized by extreme mood swings.',
            icon: <FaBrain className="text-white text-2xl" />,
        },
    ];

    const useAnimatedPercentage = (finalValue) => {
        const [value, setValue] = useState(0);

        useEffect(() => {
            let current = 0;
            const interval = setInterval(() => {
                if (current < finalValue) {
                    current += 1;
                    setValue(current);
                } else {
                    clearInterval(interval);
                }
            }, 30);
            return () => clearInterval(interval);
        }, [finalValue]);

        return value;
    };

    return (
        <div className='relative'>
            <div className="max-w-7xl mx-auto text-white relative py-16 px-6">
                <div className="space-y-4 max-w-7xl mx-auto relative text-center">
                    <p className="text-sm uppercase tracking-wide text-black">Great practice means great health care</p>
                    <h1 className="text-5xl font-bold my-4 text-black">Raising Mental Health Issues</h1>
                    <p className="text-lg font-light text-black">
                        Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                    {mentalHealthStats.map((stats, index) => {
                        const animatedValue = useAnimatedPercentage(stats.percentage);
                        return (
                            <div key={index} className="border-r-2 border-l-2 p-3 text-center">
                                <div className="flex justify-center mt-4">
                                    <div className="bg-blue-800 rounded-full p-8">
                                        {stats.icon}
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm text-gray-500">{stats.category}</p>
                                    <h1 className="text-3xl font-semibold text-blue-800">{animatedValue}%</h1>
                                    <p className="mt-2 text-gray-600">{stats.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='float-right pr-10'>
                    <Link to="about/mental-health">
                        <button type='button' className='btn'>Read more --</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Infography;
