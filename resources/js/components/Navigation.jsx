import React from 'react';
import { Link } from '@inertiajs/react';

export default function Navigation() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold">Villas.PK</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
                            Pricing
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-gray-900">
                            Services
                        </Link>
                        <Link 
                            href="/contact" 
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}