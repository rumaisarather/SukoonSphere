import React from 'react';

const UserAvatar = ({ user, size = "small" }) => {
    const sizeClasses = {
        small: "w-4 h-4 sm:w-6 sm:h-6",
        medium: "w-8 h-8 sm:w-10 sm:h-10",
        large: "w-12 h-12 sm:w-14 sm:h-14"
    };

    return (
        <img
            src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.username || 'Anonymous')}&background=random`}
            alt={user?.username || 'User'}
            className={`${sizeClasses[size]} rounded-full`}
        />
    );
};

export default UserAvatar; 