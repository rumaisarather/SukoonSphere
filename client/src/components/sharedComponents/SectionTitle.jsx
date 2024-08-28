import React from 'react'

function SectionTitle({ title }) {
    return (
        <div className="sectionHeader flex items-center pt-12 pb-6">
            <h3 className="text-lg font-normal uppercase" style={{ fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: 'normal' }}>
                {title}
            </h3>
            <div className="flex-grow h-0.5 bg-[var(--sec-color)] ml-4"></div>
        </div>
    )
}

export default SectionTitle
