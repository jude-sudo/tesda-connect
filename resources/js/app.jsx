import React from 'react';
import { createRoot } from 'react-dom/client';


import LandingPage from './pages/landingPage/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';

const path = window.location.pathname;

const App = () => {

    if (path === '/dashboard') {
        return <Dashboard />;
    }

    return <LandingPage />;
};

createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);