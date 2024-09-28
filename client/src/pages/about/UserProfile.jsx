import { GroupsSidebar, HeaderImg, ProfileCard, ProfileDetails } from '@/components'
import React from 'react'
import bgImg from '../../assets/images/bg_podcast.jpg'


const UserProfile = () => {
    const userData = {
        username: "Sartaj Ashraf",
        bio: "Look up at the stars, not down at your feet.",
        followers: "15.9k",
        following: "1.9k",
        questionPosted: '150',
        answersPosted: '20',
        posts: "345",
        likes: "1.2k",
        avatar: "https://picsum.photos/200/300?random=4",
        coverImage: "https://picsum.photos/200/300?random=1"
    };
    const groups = [
        {
            id: 1,
            name: 'Mindfulness Practices 🧘‍♂️',
            image: 'https://example.com/image_mindfulness.jpg',
        },
        {
            id: 2,
            name: 'Coping with Anxiety 💭',
            image: 'https://example.com/image_anxiety.jpg',
        },
        {
            id: 3,
            name: 'Therapy Techniques 📖',
            image: 'https://example.com/image_therapy.jpg',
        },
        {
            id: 4,
            name: 'Depression Support Group ❤️',
            image: 'https://example.com/image_depression.jpg',
        },
        {
            id: 5,
            name: 'Stress Management Workshops 🌱',
            image: 'https://example.com/image_stress.jpg',
        }
    ];
    return (
        <>
            <HeaderImg currentPage="Profile" bgImg={bgImg} />
            <div className='relative grid  sm:grid-cols-12 grid-cols-12 max-w-7xl mx-auto'>
                <div className="sticky top-[12%] h-screen col-span-3 ">
                    <ProfileCard {...userData} />
                </div>
                <div className='col-span-6 px-4 flex flex-col gap-2 bg-white'>
                    <ProfileDetails
                        images={userData.images}
                    />
                </div>
                <div className='sticky top-[12%] h-screen col-span-3'>
                    <GroupsSidebar groups={groups} />
                </div>
            </div>
        </>
    )
}

export default UserProfile