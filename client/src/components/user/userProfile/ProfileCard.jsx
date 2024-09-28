// import React from 'react';

// const ProfileCard = ({ username, avatar, posts, followers, following, answersPosted, questionsPosted, bio, additionalInfo }) => {
//     return (
//         <div className='p-6 m-auto max-w-7xl mx-auto bg-[var(--light-bg)]'>
//             <div className="flex items-center p-6 rounded-lg shadow-md max-w-4xl mx-auto">
//                 <div className="flex-shrink-0 ">
//                     <img
//                         src={avatar}
//                         alt={"User Image loading..."}
//                         className="h-48 object-cover "
//                     />
//                 </div>
//                 <div className="ml-6 flex space-x-12">
//                     <div className='space-y-8'>
//                         <div>
//                             <h2 className="text-2xl font-bold text-[var(--black-color)]">
//                                 {username}
//                             </h2>
//                             <p className="text-gray-600 flex items-center">
//                                 <span className="mr-2 text-green-600">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </span>
//                                 {bio}
//                             </p>
//                         </div>
//                         <div className="mt-2 flex gap-12 border-l">
//                             <div>
//                                 <p className="font-semibold text-[var(--black-color)]">Posts</p>
//                                 <p className="text-gray-700">{posts}</p>
//                             </div>
//                             <div>
//                                 <p className="font-semibold text-[var(--black-color)]">Following</p>
//                                 <p className="text-gray-700">{following}</p>
//                             </div>
//                             <div >
//                                 <p className="font-semibold text-[var(--black-color)]">Followers</p>
//                                 <p className="text-gray-700">{followers}</p>
//                             </div>
//                         </div>

//                     </div>
//                     <div>
//                         <div className="mt-2">
//                             <p className="font-semibold text-[var(--black-color)]">Answers Posted:</p>
//                             <p className="text-gray-700">{answersPosted}</p>
//                         </div>

//                         <div className="mt-2">
//                             <p className="font-semibold text-[var(--black-color)]">Questions Posted</p>

//                             <p className="text-gray-700">{questionsPosted}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 { }
//             </div>
//         </div>
//     );
// }


// export default ProfileCard;

import React from 'react';

const ProfileCard = ({
    coverImage,
    avatar,
    username,
    bio,
    followers,
    following,
    questionPosted,
    answersPosted,
    posts,
    likes,
    images
}) => {
    return (
        <div className="bg-white shadow rounded-lg ">
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex flex-col items-center">
                    <img src={avatar} alt="Profile" className="rounded-full w-20 h-20 border-2 border-gray-200" />
                    <h1 className="text-lg font-bold mt-2 text-[var(--black-color)]">{username}</h1>
                    <p className="text-sm text-[var(--black-color)]">_sartajAshraf</p>
                </div>
                <p className="text-sm text-center mt-2 px-1 text-[var(--black-color)]">{bio}</p>
                <div className="grid grid-cols-2 mt-3 text-left p-1 gap-2">
                    <div className='text-[var(--black-color)]'><strong>{followers}</strong> Followers</div>
                    <div className='text-[var(--black-color)]'><strong>{following}</strong> Following</div>
                    <div className='text-[var(--black-color)]'><strong>{questionPosted}</strong> Answers </div>
                    <div className='text-[var(--black-color)]'><strong>{posts}</strong> Posts</div>
                    <div className='text-[var(--black-color)]'><strong>{answersPosted}</strong> Questions </div>
                </div>
                <div className="mt-4 p-2 bg-gray-100 rounded text-sm">
                    <p>🔔 Subscribed </p>
                    <p>🔴 Expires </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
