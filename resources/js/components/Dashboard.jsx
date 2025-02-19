// resources/js/Pages/Dashboard.jsx
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navigation from '@/Components/Navigation';
// Update these imports for Heroicons v2
import { EyeIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export default function Dashboard({ properties }) {
    const [uploading, setUploading] = useState(false);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('/api/properties/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Upload started successfully');
        } catch (error) {
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <Head title="Dashboard" />
            <Navigation />
            
            <div className="min-h-screen bg-gray-100">
                {/* Hero Section */}
                <div className="relative h-64">
                    <div className="absolute inset-0">
                        <img 
                            src="/images/modern-house.jpg" 
                            alt="Modern House" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                    </div>
                    <div className="relative h-full flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white">
                            Admin Dashboard
                        </h1>
                    </div>
                </div>

                {/* Data Table Section */}
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="mb-4">
                            <label 
                                className={`
                                    inline-flex items-center px-4 py-2 bg-blue-500 
                                    text-white rounded-md hover:bg-blue-600 cursor-pointer
                                    ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                            >
                                <ArrowUpTrayIcon className="w-5 h-5 mr-2" /> {/* Changed from UploadIcon */}
                                Bulk Upload
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    onChange={handleFileUpload}
                                    accept=".xlsx,.xls"
                                    disabled={uploading}
                                />
                            </label>
                        </div>

                        {/* Rest of your table code remains the same */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                {/* ... table code ... */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}