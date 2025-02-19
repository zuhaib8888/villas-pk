import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Import Ziggy
import { Ziggy } from './ziggy';

createInertiaApp({
    title: (title) => `${title} - My App`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        
        // Add Ziggy to our props
        return root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});