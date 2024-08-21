import React from 'react'
import Card from '../sharedComponents/Card'
import { MdOutlinePermContactCalendar } from 'react-icons/md';
function Infography() {
    return (
        <div className='relative'>
            <div className='absolute inset-x-0 bottom-[-10rem]'>
                <div className='grid grid-cols-1 sm:grid-cols-4 place-items-center gap-4'>
                    <Card
                        icon={MdOutlinePermContactCalendar}
                        headingHelper="24 Hours Stream"
                        title="Card title!"
                        content="If a dog chews shoes whose shoes does he choose?"
                        buttonLabel="Explore"
                    />
                    <Card
                        icon={MdOutlinePermContactCalendar}
                        headingHelper="24 Hours Stream"
                        title="Card title!"
                        content="If a dog chews shoes whose shoes does he choose?"
                        buttonLabel="Explore"
                    />
                    <Card
                        icon={MdOutlinePermContactCalendar}
                        headingHelper="24 Hours Stream"
                        title="Card title!"
                        content="If a dog chews shoes whose shoes does he choose?"
                        buttonLabel="Explore"
                    />
                    <Card
                        icon={MdOutlinePermContactCalendar}
                        headingHelper="24 Hours Stream"
                        title="Card title!"
                        content="If a dog chews shoes whose shoes does he choose?"
                        buttonLabel="Explore"
                    />
                </div>
            </div>
        </div>

    )
}

export default Infography
