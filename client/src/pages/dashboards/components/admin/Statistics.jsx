import React from 'react'

const Statistics = () => {
    return (
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold">Total Users</h2>
                    <p class="text-2xl mt-2">12,345</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold">Active Sessions</h2>
                    <p class="text-2xl mt-2">1,234</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold">Articles Published</h2>
                    <p class="text-2xl mt-2">567</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold">Workshops Held</h2>
                    <p class="text-2xl mt-2">78</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics
