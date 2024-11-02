import { AvatarIcon } from '@radix-ui/react-icons'
import React from 'react'
import { MdNotifications } from 'react-icons/md'

const AdminHeader = () => {
    return (
        <header className=" flex bg-white sticky top-0 items-center justify-between shadow-[0px_1px_10px_rgba(0,0,0,0.1)] w-full z-50 transition-all ease-in-out p-2 h-[65px]">
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search..." className="p-2 border rounded-md" />
                <MdNotifications className='color-[var(--black-color)] size-8' />
                <avatar className="p-2 rounded-full bg-gray-300">
                    {/* <img className='w-8 h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcrbceM909qLtIOOkUhgeGM2pTTjiRb27xglvNoepeIkq3NH4P_zinYAkZp-PRtHx-UU&usqp=CAU" alt="Admin Image..." /> */}
                    <AvatarIcon className='size-6' />
                </avatar>
            </div>
        </header>
    )
}

export default AdminHeader
