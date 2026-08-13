import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

import Dashboard from './pages/Dashboard';

function App() {
    return <Dashboard />;
}

createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);