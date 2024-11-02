import { adminNavLinks } from '@/utils/adminNavLinks'
import React, { useState } from 'react'
import { FaCircleDot, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

const AdminNavbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} bg-[var(--primary)] text-white flex-shrink-0`}>
            <nav>
                <div className="flex items-center justify-between p-2">
                    <h2 className={`text-lg font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Admin Panel</h2>
                    <button onClick={toggleNavbar} className="p-1">
                        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
                    </button>
                </div>
                <div className="flex flex-col gap-3 sm:justify-between text-white mt-2">
                    <ul className="flex flex-col gap-3 sm:justify-between mt-2 mx-4">
                        {adminNavLinks.map((link, index) => (
                            <li
                                className={`text-base font-extrabold ${isCollapsed ? 'text-center' : 'text-left'}`}
                                key={`${link.name}-${index}`}
                            >
                                <NavLink
                                    to={link.address}
                                    className="text-[var(--white-color)] hover:text-[var(--ternery)]"
                                >
                                    {link.name}
                                </NavLink>

                                {link.sublinks && !isCollapsed && (
                                    <ul>
                                        {link.sublinks.map((sublink) => (
                                            <li key={sublink.name} className="flex gap-2 font-normal items-center ml-4">
                                                <FaCircleDot className="text-[.6rem]" />
                                                <NavLink to={sublink.address}>
                                                    <span className='text-[var(--white-color)] hover:text-[var(--ternery)]'>{sublink.name}</span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default AdminNavbar;
