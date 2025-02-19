import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function AuthenticatedLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // Replace route() calls with direct URLs or use router.get()
    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                {/* Update navigation links */}
                <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
                    Dashboard
                </Link>
                <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                    Profile
                </Link>
                <button onClick={handleLogout} className="text-gray-700 hover:text-gray-900">
                    Log Out
                </button>
                {/* Rest of your navigation */}
            </nav>

            {/* Rest of your layout */}
            {children}
        </div>
    );
}