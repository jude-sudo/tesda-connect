import React from 'react';
import { createRoot } from 'react-dom/client';

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


    switch (path) {

        

        case '/dashboard':

            return (
                <AppLayout>
                    <Dashboard />
                </AppLayout>
            );


         

        case '/trainee-intake':

            return (
                <AppLayout>
                    <TraineeIntake />
                </AppLayout>
            );


        

        case '/profiles-records':

            return (
                <AppLayout>
                    <ProfilesRecords />
                </AppLayout>
            );


        

        case '/announcements':

            return (
                <AppLayout>
                    <Announcements />
                </AppLayout>
            );


     

        case '/schedule-coordination':

            return (
                <AppLayout>
                    <ScheduleCoordination />
                </AppLayout>
            );


   

        case '/report-readiness':

            return (
                <AppLayout>
                    <ReportReadiness />
                </AppLayout>
            );


       

        case '/settings':

            return (
                <AppLayout>
                    <Settings />
                </AppLayout>
            );


      

        default:

            return <LandingPage />;

    }

};


createRoot(document.getElementById('app')).render(

    <React.StrictMode>
        <App />
    </React.StrictMode>

);