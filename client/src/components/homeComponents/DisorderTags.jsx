// import React from 'react';
// import "../../assets/styles/DisorderTags.css"
// const DisorderTags = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef7f0] p-8">
//             <h1 className="text-4xl text-gray-700 font-serif mb-6">
//                 Monitor for early indicators of <span className="text-orange-500 italic">thousands of diseases</span>
//             </h1>

//             {/* Top tagline (left to right) */}
//             <div className="w-full overflow-hidden my-4">
//                 <div className="animate-scrollLeftToRight whitespace-nowrap">
//                     <span className="tag">Gout</span>
//                     <span className="tag">Stroke</span>
//                     <span className="tag">Hyperthyroidism</span>
//                     <span className="tag">PCOS</span>
//                     <span className="tag">Thyroid</span>
//                     <span className="tag">Environmental Toxins</span>
//                 </div>
//             </div>

//             {/* Middle tagline (right to left) */}
//             <div className="w-full overflow-hidden my-4">
//                 <div className="animate-scrollRightToLeft whitespace-nowrap">
//                     <span className="tag">Eyes</span>
//                     <span className="tag">PCOS</span>
//                     <span className="tag">Smell</span>
//                     <span className="tag">Thyroid</span>
//                 </div>
//             </div>

//             {/* Bottom tagline (left to right) */}
//             <div className="w-full overflow-hidden my-4">
//                 <div className="animate-scrollLeftToRight whitespace-nowrap">
//                     <span className="tag">Environmental Toxins</span>
//                     <span className="tag">PCOS</span>
//                     <span className="tag">Gout</span>
//                     <span className="tag">Hyperthyroidism</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DisorderTags;


import React from 'react';
import camp1 from '../../assets/images/CampusPartners/asset_28.png';
import camp2 from '../../assets/images/CampusPartners/asset_22.jpeg';
import camp3 from '../../assets/images/CampusPartners/asset_23.png';
import camp4 from '../../assets/images/CampusPartners/asset_24.png';
import camp5 from '../../assets/images/CampusPartners/asset_25.png';
import camp6 from '../../assets/images/CampusPartners/asset_26.jpeg';
import camp7 from '../../assets/images/CampusPartners/asset_27.png';
import camp8 from '../../assets/images/CampusPartners/asset_28.png';
import '../../assets/styles/DisorderTags.css';

const DisorderTags = () => {
    const anxietyDisorders = [
        { type: 'image', src: camp1, alt: 'Image 1' },
        { type: 'text', label: 'Generalized Anxiety Disorder' },
        { type: 'text', label: 'Panic Disorder' },
        { type: 'image', src: camp2, alt: 'Image 1' },
        { type: 'text', label: 'Social Anxiety Disorder' },
        { type: 'text', label: 'Obsessive-Compulsive Disorder (OCD)' },
        { type: 'image', src: camp3, alt: 'Image 1' },
        { type: 'text', label: 'Post-Traumatic Stress Disorder (PTSD)' },
        { type: 'text', label: 'Agoraphobia' },
    ];
    const moodDisorders = [
        { type: 'text', label: 'Major Depressive Disorder' },
        { type: 'image', src: camp4, alt: 'Image 1' },
        { type: 'text', label: 'Bipolar Disorder' },
        { type: 'text', label: 'Dysthymia' },
        { type: 'image', src: camp5, alt: 'Image 1' },
        { type: 'text', label: 'Seasonal Affective Disorder' },
        { type: 'text', label: 'Mood Disorder' },
        { type: 'image', src: camp6, alt: 'Image 1' },
    ];
    const personalityDisorders = [
        { type: 'text', label: 'Borderline Personality Disorder' },
        { type: 'image', src: camp7, alt: 'Image 1' },
        { type: 'text', label: 'Narcissistic Personality Disorder' },
        { type: 'text', label: 'Histrionic Personality Disorder' },
        { type: 'text', label: 'Paranoid Personality Disorder' },
        { type: 'image', src: camp8, alt: 'Image 1' },
        { type: 'text', label: 'Avoidant Personality Disorder' },
    ];



    const repeatedAnxietyDisorders = [...anxietyDisorders, ...anxietyDisorders];
    const repeatedmoodDisorders = [...moodDisorders, ...moodDisorders];
    const repeatedpersonalityDisorders = [...personalityDisorders, ...personalityDisorders];

    return (
        <div className="max-w-7xl mx-auto m-32">
            <h1 className="text-4xl text-gray-700 font-serif mb-6 text-center">
                Monitor for early indicators of <span className="text-[var(--primary)] italic">thousands of diseases</span>
            </h1>
            <div className="carousel-wrapper">
                <div className="flex gap-12 p-4 justify-center items-center content-right-left w-fit">
                    {repeatedAnxietyDisorders.map((tag, index) =>
                        tag.type === 'text' ? (
                            <span
                                key={`${tag.label}-${index}`}
                                className="bg-[#fff] whitespace-nowrap text-3xl text-gray-700  font-medium border-2 border-gray-400 rounded-full px-6 py-6 text-center"
                            >
                                {tag.label}
                            </span>
                        ) : (
                            <div key={`${tag.src}-${index}`} className="w-48 h-20 rounded-full overflow-hidden">
                                <img
                                    src={tag.src}
                                    alt={tag.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )
                    )}
                </div>
                <div className="flex gap-12 p-4 justify-center items-center  content-left-right w-fit">
                    {repeatedmoodDisorders.map((tag, index) =>
                        tag.type === 'text' ? (
                            <span
                                key={`${tag.label}-${index}`}
                                className="bg-[#fff] whitespace-nowrap text-3xl text-gray-700 font-medium border-2 border-gray-400 rounded-full px-6 py-6"
                            >
                                {tag.label}
                            </span>
                        ) : (
                            <div key={`${tag.src}-${index}`} className="w-48 h-20  rounded-full overflow-hidden">
                                <img
                                    src={tag.src}
                                    alt={tag.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )
                    )}
                </div>
                <div className="flex gap-12 p-4 justify-center items-center  content-right-left w-fit">
                    {repeatedpersonalityDisorders.map((tag, index) =>
                        tag.type === 'text' ? (
                            <span
                                key={`${tag.label}-${index}`}
                                className="bg-[#fff] text-gray-700 whitespace-nowrap text-3xl font-medium border-2 border-gray-400 rounded-full px-6 py-6"
                            >
                                {tag.label}
                            </span>
                        ) : (
                            <div key={`${tag.src}-${index}`} className="w-48 h-20  rounded-full overflow-hidden">
                                <img
                                    src={tag.src}
                                    alt={tag.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default DisorderTags;
