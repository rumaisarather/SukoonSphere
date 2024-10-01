import React from 'react'
import MentalHeathSummary from '@/utils/about/MentalHealth'
import bgImg from '../../assets/images/mentalHealthImg.jpg'
import { HeaderImg } from '@/components'

function MentalHealth() {
    return (
        <>
            <HeaderImg currentPage="About / Mental Health" bgImg={bgImg} />
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-5xl mx-auto">
                {/* Overview Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.overview.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.overview.description}</p>
                </section>

                {/* Symptoms Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.symptoms.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.symptoms.description}</p>
                    <ul className="list-disc list-inside mt-4" style={{ color: 'var(--black-color)' }}>
                        {MentalHeathSummary.symptoms.examples.map((symptom, index) => (
                            <li key={index}><strong>{symptom}</strong></li>
                        ))}
                    </ul>
                </section>

                {/* When to see a Doctor */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.doctor.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.doctor.description}</p>
                </section>

                {/* Suicidal Thoughts Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.suicidalThoughts.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{MentalHeathSummary.suicidalThoughts.description}</p>
                    <ul className="list-disc list-inside" style={{ color: 'var(--black-color)' }}>
                        {MentalHeathSummary.suicidalThoughts.actions.map((action, index) => (
                            <li key={index}><strong>{action}</strong></li>
                        ))}
                    </ul>
                </section>

                {/* Helping Others Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.heplingOthers.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.heplingOthers.description}</p>
                    <button className="mt-4" style={{
                        backgroundColor: 'var(--btn-primary)',
                        color: 'var(--white-color)',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        transition: 'all .3s ease-in-out'
                    }}>One-on-One counselling</button>
                </section>

                {/* Causes Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.causes.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.causes.description}</p>
                    <ul className="list-disc list-inside mt-4" style={{ color: 'var(--black-color)' }}>
                        {MentalHeathSummary.causes.factors.map((cause, index) => (
                            <li key={index}>
                                <strong>{cause.name}: </strong>{cause.description}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Risk Factors Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.riskFactors.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.riskFactors.description}</p>
                    <ul className="list-disc list-inside mt-4" style={{ color: 'var(--black-color)' }}>
                        {MentalHeathSummary.riskFactors.factors.map((factor, index) => (
                            <li key={index}><strong>{factor}</strong></li>
                        ))}
                    </ul>
                    <p className="text-gray-600 mt-4">{MentalHeathSummary.riskFactors.note}</p>
                </section>

                {/* Complications Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.complications.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.complications.description}</p>
                    <ul className="list-disc list-inside mt-4" style={{ color: 'var(--black-color)' }}>
                        {MentalHeathSummary.complications.list.map((complication, index) => (
                            <li key={index}><strong>{complication}</strong></li>
                        ))}
                    </ul>
                </section>

                {/* Prevention Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                        {MentalHeathSummary.prevention.title}
                    </h2>
                    <p className="text-gray-600">{MentalHeathSummary.prevention.description}</p>
                    <ul className="list-disc list-inside mt-4" style={{ color: 'var(--black-color)' }}>
                        {MentalHeathSummary.prevention.steps.map((step, index) => (
                            <li key={index}>
                                <strong>{step.title}: </strong>{step.description}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}

export default MentalHealth
