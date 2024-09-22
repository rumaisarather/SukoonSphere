import React from 'react';

const ProfileSidebar = ({
    username,
    userTag,
    questionsPosted,
    answersPosted,
    recentItems,
    groups,
    followedHashtags,
    events,
}) => {
    return (
        <div className="bg-white text-gray-800 shadow rounded-lg p-4">
            <div className="flex items-center space-x-4 p-2">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXzCSPkpN-TPug9XIsssvBxZQHkZEhjoGfg&s"
                    alt={`${username}`}
                    className="rounded-full h-14 w-14"
                />
                <div>
                    <div className="font-semibold text-lg text-[var(--primary)]">{username}</div>
                    <div className="text-sm text-gray-500">{userTag}</div>
                </div>
            </div>
            <div className="py-4 border-t border-gray-300">
                <div className="flex justify-between text-sm">
                    <div>Questions Posted</div>
                    <div>{questionsPosted}</div>
                </div>
                <div className="flex justify-between text-sm pt-2">
                    <div>Answer Posted</div>
                    <div>{answersPosted}</div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[var(--black-color)]">Recent</h3>
                <ul>
                    {recentItems.map(item => (
                        <li key={item} className={'text-[var(--primary)]'}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-[var(--black-color)]">Groups</h3>
                <ul>
                    {groups.map(group => (
                        <li key={group} className={'text-[var(--primary)]'}>{group}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-[var(--black-color)]">Followed Hashtags</h3>
                <ul>
                    {followedHashtags.map(tag => (
                        <li key={tag} className={'text-[var(--primary)]'}>{tag}</li>
                    ))}
                </ul>
            </div>
            {events && (
                <div>
                    <h3 className="font-semibold text-[var(--black-color)]">Events</h3>
                    <ul>
                        {events.map(event => (
                            <li key={event} className={'text-[var(--primary)]'}>{event}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileSidebar;
