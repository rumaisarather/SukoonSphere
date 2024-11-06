import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { AdminHeader, AdminNavbar, Header } from '@/components';

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header className="w-full" />

            {/* Main Layout */}
            <div className="flex flex-1">
                <AdminNavbar className="w-64 bg-primary text-white flex-shrink-0" />
                {/* Sidebar */}

                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    <ScrollRestoration />
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
