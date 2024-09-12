import React from 'react'
import { FaRegCirclePlay } from 'react-icons/fa6';

function RelatedVideoCard() {
    return (
        <div className="relative flex flex-row border-b-2">
            <div className={`w-full flex items-center justify-center `}>
                <img src="https://www.verywellmind.com/thmb/vpCJ7huBZN7bNeG44BBWOTT1d-M=/868x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HowtoEndaConversation_final-b4b6ce5dbb3b417789dcb2bf195bd257.png" alt="" />
            </div>
            <div className="px-4">
                <h3 className="text-sm font-bold text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur vel aliquid facere,</h3>
                <p className="text-sm text-gray-500">20-10-2024</p>
                <button className='flex items-center'>Watch <FaRegCirclePlay size={20} style={{ marginLeft: '1rem' }} /></button>
            </div>
        </div>
    )
}
export default RelatedVideoCard
