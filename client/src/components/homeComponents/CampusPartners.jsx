import React from 'react';
import '../../assets/styles/CampusPartners.css';
import camp1 from '../../assets/images/CampusPartners/asset_21.png';
import camp2 from '../../assets/images/CampusPartners/asset_22.jpeg';
import camp3 from '../../assets/images/CampusPartners/asset_23.png';
import camp4 from '../../assets/images/CampusPartners/asset_24.png';
import camp5 from '../../assets/images/CampusPartners/asset_25.png';
import camp6 from '../../assets/images/CampusPartners/asset_26.jpeg';
import camp7 from '../../assets/images/CampusPartners/asset_27.png';
import camp8 from '../../assets/images/CampusPartners/asset_28.png';
import SectionTitle from '../sharedComponents/SectionTitle';

const PartnersData = [
    { id: 1, name: 'IIT Delhi', url: camp1 },
    { id: 2, name: 'BITS Pilani', url: camp2 },
    { id: 3, name: 'IISc', url: camp3 },
    { id: 4, name: 'NSUT', url: camp4 },
    { id: 5, name: 'SRM', url: camp5 },
    { id: 6, name: 'AIIMS', url: camp6 },
    { id: 7, name: 'DTU', url: camp7 },
    { id: 8, name: 'IIT Bombay', url: camp8 }
];

const duplicatedPartnersData = [...PartnersData, ...PartnersData];

function CampusPartners() {
    return (
        <>
            <div className='max-w-7xl mx-auto mb-20'>
                <SectionTitle title={"Our Partners"}></SectionTitle>
                <div className="carousel-wrapper">
                    <p className="text-sm uppercase tracking-wide text-[var(--black-color)] text-center">Great practice means great health care</p>
                    <h1 className='text-3xl text-[var(--black-color)] text-center '>Our Partners</h1>


                    <div className="carousel-content pb-10">
                        {duplicatedPartnersData.map((logo) => (
                            <img key={logo.id} src={logo.url} alt={logo.name} className="logo" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampusPartners;



// const PartnersData = [
//     { id: 1, name: 'IIT Delhi', url: "../../assets/images/CampusPartners/asset_21.png" },
//     { id: 2, name: 'BITS Pilani', url: '../../assets/images/Campus Partners/asset_22.jpeg' },
//     { id: 3, name: 'IISc', url: '../../assets/images/Campus Partners/asset_23.png' },
//     { id: 4, name: 'NSUT', url: '../../assets/images/Campus Partners/asset_24.png' },
//     { id: 5, name: 'SRM', url: '../../assets/images/Campus Partners/asset_25.png' },
//     { id: 6, name: 'AIIMS', url: '../../assets/images/Campus Partners/asset_26.png' },
//     { id: 7, name: 'DTU', url: '../../assets/images/Campus Partners/asset_27.png' },
//     { id: 8, name: 'IIT Bombay', url: '../../assets/images/Campus Partners/asset_28.png' }

// ];