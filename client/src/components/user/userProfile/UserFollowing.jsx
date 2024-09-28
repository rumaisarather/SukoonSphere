import React from 'react'

const UserFollowing = () => {
    const followingData = [
        { name: 'Thomas Alan White', details: '278 followers', buttonText: 'Unfollow' },
        { name: 'R.K.Sharma, My View Point', details: '362 followers', buttonText: 'Unfollow' },
        { name: 'Jorge Rivera, knows Catalan', details: '176 followers', buttonText: 'Unfollow' },
        { name: 'Rhea Manua', details: '0 followers', buttonText: 'Unfollow' },
        { name: 'Abdul Rahim', details: '5 followers', buttonText: 'Unfollow' },
        { name: 'Ravinder Arora, Educationist at Schools (2006-present)', details: '1.2k followers', buttonText: 'Unfollow' },
        { name: 'Zeshan Mehmood, New Technology Gadgets Makes Our Everyday Life Easier', details: '50 followers', buttonText: 'Unfollow' },
        { name: 'Maria Gonzales, Lifestyle Blogger', details: '987 followers', buttonText: 'Unfollow' },
        { name: 'John Doe, Software Engineer at Tech Inc', details: '450 followers', buttonText: 'Unfollow' },
        { name: 'Jane Smith, Health & Wellness Enthusiast', details: '689 followers', buttonText: 'Unfollow' },
        { name: 'Emily Chang, Digital Marketer', details: '322 followers', buttonText: 'Unfollow' },
        { name: 'Michael Brown, Photographer', details: '856 followers', buttonText: 'Unfollow' },
        { name: 'Sarah Parker, Freelance Writer', details: '234 followers', buttonText: 'Unfollow' },
        { name: 'Chen Wu, AI Researcher', details: '422 followers', buttonText: 'Unfollow' },
        { name: 'Carlos Alvarado, History Professor', details: '287 followers', buttonText: 'Unfollow' },
        { name: 'Alice Johnson, Graphic Designer', details: '540 followers', buttonText: 'Unfollow' },
        { name: 'Terry Brooks, Science Fiction Author', details: '1k followers', buttonText: 'Unfollow' },
        { name: 'Nora Roberts, Novelist', details: '2.3k followers', buttonText: 'Unfollow' },
        { name: 'Samantha Bee, Comedian', details: '780 followers', buttonText: 'Unfollow' },
        { name: 'Derek Murphy, Indie Musician', details: '350 followers', buttonText: 'Unfollow' },
    ];

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-[var(--black-color)] text-center">Following</h2>
            <div className="divide-y divide-gray-200">
                {followingData.map((follower, index) => (
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
    )
}

export default UserFollowing
