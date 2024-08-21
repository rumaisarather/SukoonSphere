import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import sliderImage1 from '../../assets/images/testimonial-bg.jpeg';


// Register the chart components and plugins
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

function Hero() {
    const data = {
        labels: ['Depressive Disorders', 'Anxiety Disorders', 'Other Disorders'],
        datasets: [
            {
                data: [45.7, 44.9, 106.7], // in millions
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'var(--white-color)', // Make the labels white
                    usePointStyle: true, // Use circles instead of boxes
                    boxWidth: 15,
                    padding: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        let value = context.raw || 0;
                        return `${label}: ${value} million`;
                    },
                },
            },
            datalabels: {
                color: 'var(--white-color)',
                font: {
                    size: 14,
                },
                formatter: (value) => `${value}M`,
                anchor: 'end',
                align: 'start',
                offset: 10,
            },
        },
    };

    return (
        <section className="relative w-full h-screen overflow-hidden" style={{ height: 'calc(100vh - 70px)' }}>
            <div className="grid grid-cols-2 h-full">
                <div
                    className="relative h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${sliderImage1})`, width: "1400px" }}
                >
                    <div className="flex items-center justify-between h-full w-full">
                        <div className="text-left pl-12 py-4 max-w-3xl text-white">
                            <div className="text-2xl font-bold mb-4" style={{ color: 'var(--black-color)' }}>For a Brighter Future</div>
                            <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--sky-blue-color)' }}>
                                Helping You Find Clarity <br />
                                <span style={{ color: 'var(--sky-blue-color)' }}>and Balance</span>
                            </h1>
                            <p className="text-lg mb-6" style={{ color: 'var(--black-color)' }}>
                                Understanding and improving mental health can be complex, but our resources and support are designed to make it simpler. With professional guidance and compassionate care, we are here to help you navigate your path to well-being.
                            </p>
                            <div className="space-x-4">
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--blue-color)', color: 'var(--white-color)' }}>Discover more</a>
                            </div>
                        </div>
                        {/* <div className="max-w-sm mx-auto">
                            <div className="text-center mb-1">
                                <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black-color)' }}>Mental Health Statistics</h2>
                            </div>

                            <div>
                                

                            </div>
                            <div>
                                <Pie data={data} options={options} />
                            </div>
                        </div> */}

                        <button className="btn">Button</button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
