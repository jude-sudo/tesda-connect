import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import '../css/app.css';

import LandingPage from './pages/landingPage/LandingPage';
import AppLayout from './layouts/AppLayout';

import Dashboard from './pages/dashboard/Dashboard';
import TraineeIntake from './pages/traineeIntake/TraineeIntake';
import ProfilesRecords from './pages/profilesRecords/ProfilesRecords';
import Announcements from './pages/announcements/Announcements';
import ScheduleCoordination from './pages/scheduleCoordination/ScheduleCoordination';
import ReportReadiness from './pages/reportReadiness/ReportReadiness';
import Settings from './pages/settings/Settings';

const App = () => {

    const path = window.location.pathname;

    const [user, setUser] = useState(null);

    const [authChecked, setAuthChecked] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | Check Authentication
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        
        const getAuthenticatedUser = async () => {

            try {

                const response = await fetch('/api/me', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                    credentials: 'same-origin',
                });


                if (!response.ok) {

                    setUser(null);

                    return;
                }


                const data = await response.json();

                console.log('AUTH USER:', data.user);

                setUser(data.user ?? null);

            } catch (error) {

                console.error(
                    'Failed to get authenticated user:',
                    error
                );

                setUser(null);

            } finally {

                setAuthChecked(true);

            }

        };


        getAuthenticatedUser();

    }, []);


    /*
    |--------------------------------------------------------------------------
    | Landing Page
    |--------------------------------------------------------------------------
    */

    if (path === '/') {

        return (
            <LandingPage
                user={user}
                authChecked={authChecked}
            />
        );

    }


    /*
    |--------------------------------------------------------------------------
    | Protected Pages
    |--------------------------------------------------------------------------
    */

    const renderPage = () => {

        switch (path) {

            case '/dashboard':
                return <Dashboard />;

            case '/trainee-intake':
                return <TraineeIntake />;

            case '/profiles-records':
                return <ProfilesRecords />;

            case '/announcements':
                return <Announcements />;

            case '/schedule-coordination':
                return <ScheduleCoordination />;

            case '/report-readiness':
                return <ReportReadiness />;

            case '/settings':
                return <Settings />;

            default:
                return <Dashboard />;

        }

    };


    /*
    |--------------------------------------------------------------------------
    | App Layout
    |--------------------------------------------------------------------------
    */

    return (
        <AppLayout user={user}>
            {renderPage()}
        </AppLayout>
    );

};


createRoot(
    document.getElementById('app')
).render(

    <React.StrictMode>

        <App />

    </React.StrictMode>

);