import React from 'react';
import bgImg from '../../assets/images/bg_podcast.jpg'
import { HeaderImg, VideoCard } from '@/components';

const AllVideos = () => {
    const cards = [
        {
            title: 'Immunization: Leave no one behind - Guidance for planning and implementing catch-up vaccination',
            date: '5 September 2024',
            type: 'video',
        },
        {
            title: 'Vaccinating older adults against COVID-19',
            date: '5 September 2024',
            type: 'video',
        },
        {
            title: 'Training Video: Health Economic Assessment Tool (HEAT) for walking and cycling',
            date: '4 September 2024',
            type: 'video',
        },
        {
            title: 'WHO press conference on global health issues - 4 September 2024',
            date: '4 September 2024',
            type: 'video',
        },
        {
            title: 'Food systems community of practice',
            date: 'Infographic',
            type: 'infographic',
        },
        {
            title: 'Policy categories and subcategories for public health and social measures (PHSM Taxonomy)',
            date: 'Infographic',
            type: 'infographic',
        },
        {
            title: 'WHO Global Competency Standards e-course: provision of health services to refugees and migrants',
            date: '3 September 2024',
            type: 'video',
        },
    ];

    return (
        <>
            <HeaderImg currentPage="All Videos" bgImg={bgImg} />


            <div className="p-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <input type="text" placeholder="Search by keyword" className="input input-bordered w-full" />
                    <select className="select select-bordered w-full">
                        <option disabled selected>Health Topic</option>
                        <option>Mental Health</option>
                        <option>Vaccination</option>
                    </select>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Year</option>
                        <option>2024</option>
                        <option>2023</option>
                    </select>
                </div>

                {/* Media Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <VideoCard cards={cards}></VideoCard>
                </div>
            </div>
        </>
    );
};

export default AllVideos;
