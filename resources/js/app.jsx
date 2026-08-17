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


/*
|--------------------------------------------------------------------------
| Service Worker / PWA
|--------------------------------------------------------------------------
|
| Register the Service Worker from the public root.
|
*/

if ('serviceWorker' in navigator) {

    window.addEventListener('load', () => {

        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {

                console.log(
                    'Service Worker registered:',
                    registration.scope
                );

            })
            .catch((error) => {

                console.error(
                    'Service Worker registration failed:',
                    error
                );

            });

    });

}


/*
|--------------------------------------------------------------------------
| Main React Application
|--------------------------------------------------------------------------
*/

const App = () => {

    const path = window.location.pathname;


    /*
    |--------------------------------------------------------------------------
    | Authentication State
    |--------------------------------------------------------------------------
    */

    const [user, setUser] = useState(null);

    const [authChecked, setAuthChecked] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | Check Authenticated User
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

                    cache: 'no-store',

                });


                /*
                |--------------------------------------------------------------------------
                | Not Authenticated
                |--------------------------------------------------------------------------
                */

                if (!response.ok) {

                    setUser(null);

                    return;

                }


                /*
                |--------------------------------------------------------------------------
                | Get User Data
                |--------------------------------------------------------------------------
                */

                const data = await response.json();

                console.log(
                    'AUTH USER:',
                    data.user
                );


                setUser(
                    data.user ?? null
                );


            } catch (error) {

                console.error(
                    'Failed to get authenticated user:',
                    error
                );

                setUser(null);


            } finally {

                /*
                |--------------------------------------------------------------------------
                | Authentication Check Complete
                |--------------------------------------------------------------------------
                */

                setAuthChecked(true);

            }

        };


        getAuthenticatedUser();

    }, []);


    /*
    |--------------------------------------------------------------------------
    | Landing Page
    |--------------------------------------------------------------------------
    |
    | The landing page is public.
    |
    | It can be viewed whether the user is logged in or logged out.
    |
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
    | Wait Until Authentication Is Checked
    |--------------------------------------------------------------------------
    |
    | This prevents the Dashboard or another protected page from
    | flashing for a few seconds when the session has expired.
    |
    */

    if (!authChecked) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-[#eef3f9] dark:bg-slate-950">

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            mb-4
                            h-10
                            w-10
                            animate-spin
                            rounded-full
                            border-4
                            border-slate-300
                            border-t-[#17cbbd]
                        "
                    />

                    <p className="text-sm text-slate-500 dark:text-slate-400">

                        Checking session...

                    </p>

                </div>

            </div>

        );

    }


    /*
    |--------------------------------------------------------------------------
    | Not Authenticated
    |--------------------------------------------------------------------------
    |
    | User tried to access a protected page directly without
    | an active Laravel session.
    |
    */

    if (!user) {

        window.location.replace('/');

        return null;

    }


    /*
    |--------------------------------------------------------------------------
    | Protected Pages
    |--------------------------------------------------------------------------
    */

    const renderPage = () => {

        switch (path) {


            /*
            |--------------------------------------------------------------------------
            | Dashboard
            |--------------------------------------------------------------------------
            */

            case '/dashboard':

                return <Dashboard />;


            /*
            |--------------------------------------------------------------------------
            | Trainee Intake
            |--------------------------------------------------------------------------
            */

            case '/trainee-intake':

                return <TraineeIntake />;


            /*
            |--------------------------------------------------------------------------
            | Profiles & Records
            |--------------------------------------------------------------------------
            */

            case '/profiles-records':

                return <ProfilesRecords />;


            /*
            |--------------------------------------------------------------------------
            | Announcements
            |--------------------------------------------------------------------------
            */

            case '/announcements':

                return <Announcements />;


            /*
            |--------------------------------------------------------------------------
            | Schedule Coordination
            |--------------------------------------------------------------------------
            */

            case '/schedule-coordination':

                return <ScheduleCoordination />;


            /*
            |--------------------------------------------------------------------------
            | Report Readiness
            |--------------------------------------------------------------------------
            */

            case '/report-readiness':

                return <ReportReadiness />;


            /*
            |--------------------------------------------------------------------------
            | Settings
            |--------------------------------------------------------------------------
            */

            case '/settings':

                return <Settings />;


            /*
            |--------------------------------------------------------------------------
            | Unknown Protected Route
            |--------------------------------------------------------------------------
            */

            default:

                return <Dashboard />;

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Application Layout
    |--------------------------------------------------------------------------
    */

    return (

        <AppLayout user={user}>

            {renderPage()}

        </AppLayout>

    );

};


/*
|--------------------------------------------------------------------------
| React Root
|--------------------------------------------------------------------------
*/

createRoot(
    document.getElementById('app')
).render(

    <React.StrictMode>

        <App />

    </React.StrictMode>

);

