import React from 'react';

// Example Prop Data Structure
const followersData = [
    { name: 'Anika Roy', details: '150 followers', buttonText: 'Follow' },
    { name: 'Sanjay Gupta, Tech Blogger', details: '410 followers', buttonText: 'Follow' },
    { name: 'Emily Zhang, Architect', details: '305 followers', buttonText: 'Follow' },
    { name: 'Carlos Medina, Coffee Enthusiast', details: '89 followers', buttonText: 'Follow' },
    { name: 'Sarah Connor, AI Researcher', details: '800 followers', buttonText: 'Follow' },
    { name: 'Michael Reese, Urban Planner', details: '476 followers', buttonText: 'Follow' },
    { name: 'Natasha Romanov, Freelance Writer', details: '690 followers', buttonText: 'Follow' },
    { name: 'Jordan Wilde, Financial Analyst', details: '265 followers', buttonText: 'Follow' },
    { name: 'Grace Lin, Educational Reformer', details: '350 followers', buttonText: 'Follow' },
    { name: 'Fiona Cheng, Digital Marketer', details: '428 followers', buttonText: 'Follow' },
    { name: 'Omar Siddiqui, Environmentalist', details: '223 followers', buttonText: 'Follow' },
    { name: 'Heather Joy, Nutrition Expert', details: '589 followers', buttonText: 'Follow' },
    { name: 'Derek Muller, Science Communicator', details: '780 followers', buttonText: 'Follow' },
    { name: 'Isabella Torres, Art Historian', details: '340 followers', buttonText: 'Follow' },
    { name: 'Tony Fabrizio, Fashion Designer', details: '312 followers', buttonText: 'Follow' },
    { name: 'Yuki Tanaka, Chef', details: '150 followers', buttonText: 'Follow' },
    { name: 'Liam Scott, Software Developer', details: '925 followers', buttonText: 'Follow' },
    { name: 'Sophia Bernard, Event Planner', details: '302 followers', buttonText: 'Follow' },
    { name: 'Aaron Hill, Music Producer', details: '500 followers', buttonText: 'Follow' },
    { name: 'Zoe Foster, Travel Blogger', details: '1.3k followers', buttonText: 'Follow' }
];


const UserFollowers = () => {
    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-[var(--black-color)] text-center">Followers</h2>
            <div className="divide-y divide-gray-200">
                {followersData.map((follower, index) => (
                    <div key={index} className="py-2 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg">
                                <h1 className='text-xl text-[var(--primary)]'>
                                    {follower.name[0]}
                                </h1>
                            </div>
                            <div>
                                <p className="font-semibold text-base text-[var(--primary)]">{follower.name}</p>
                                <p className="text-sm text-gray-600">{follower.details}</p>
                            </div>
                        </div>
                        <button className="action-button btn-sm">
                            {follower.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default UserFollowers;
