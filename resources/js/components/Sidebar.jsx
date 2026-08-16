import SidebarItem from './SidebarItem';
import { useEffect, useState } from 'react';

export default function Sidebar({ collapsed }) {

    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    /*
    |--------------------------------------------------------------------------
    | Get authenticated user
    |--------------------------------------------------------------------------
    */

useEffect(() => {

    fetch('/api/me', {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(async response => {

            /*
            |--------------------------------------------------------------------------
            | Session Expired
            |--------------------------------------------------------------------------
            */

            if (response.status === 401) {

                window.location.href = '/';

                return null;
            }


            /*
            |--------------------------------------------------------------------------
            | Other Error
            |--------------------------------------------------------------------------
            */

            if (!response.ok) {

                throw new Error(
                    `Failed to fetch user: ${response.status}`
                );

            }


            return response.json();
        })
        .then(data => {

            if (!data) {
                return;
            }

            console.log('SIDEBAR USER:', data.user);

            setUser(data.user);

        })
        .catch(error => {

            console.error(
                'Failed to load authenticated user:',
                error
            );

            window.location.href = '/';

        })
        .finally(() => {

            setLoadingUser(false);

        });

}, []);


    /*
    |--------------------------------------------------------------------------
    | Role
    |--------------------------------------------------------------------------
    */

    const role = user?.role;


    /*
    |--------------------------------------------------------------------------
    | Permission Structure
    |--------------------------------------------------------------------------
    */

    const permissions = {

        Administrator: [
            'dashboard',
            'trainee-intake',
            'profiles-records',
            'announcements',
            'schedule-coordination',
            'report-readiness',
            'settings',
        ],

        Registrar: [
            'dashboard',
            'trainee-intake',
            'profiles-records',
            'settings',
        ],

        'Focal Person': [
            'dashboard',
            'announcements',
            'schedule-coordination',
            'report-readiness',
            'settings',
        ],

        Trainer: [
            'dashboard',
            'schedule-coordination',
            'settings',
        ],

        Trainee: [
            'dashboard',
            'announcements',
            'schedule-coordination',
            'settings',
        ],

        Scholar: [
            'dashboard',
            'announcements',
            'schedule-coordination',
            'settings',
        ],
    };


    /*
    |--------------------------------------------------------------------------
    | Permission Checker
    |--------------------------------------------------------------------------
    */

    const can = (permission) => {

        /*
         * Administrator = EVERYTHING
         */
        if (role === 'Administrator') {
            return true;
        }

        return permissions[role]?.includes(permission) ?? false;
    };


    /*
    |--------------------------------------------------------------------------
    | Current Path
    |--------------------------------------------------------------------------
    */

    const currentPath = window.location.pathname;


    /*
    |--------------------------------------------------------------------------
    | User Initial
    |--------------------------------------------------------------------------
    */

    const userInitial =
        user?.name?.trim()?.charAt(0)?.toUpperCase() ?? '?';


    /*
    |--------------------------------------------------------------------------
    | Operations
    |--------------------------------------------------------------------------
    */

    const hasOperations =
        can('announcements') ||
        can('schedule-coordination') ||
        can('report-readiness');


    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <aside
            className={`
                fixed
                left-0
                top-0
                z-50
                h-screen
                overflow-hidden

                bg-[#0d2559]
                text-white

                shadow-xl

                transition-all
                duration-300

                ${collapsed ? 'w-[80px]' : 'w-[300px]'}
            `}
        >

            {/* =====================================================
                LOGO
            ===================================================== */}

            <div
                className="
                    flex
                    h-[74px]
                    items-center
                    border-b
                    border-white/10
                    px-5
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-xs
                            font-bold
                            text-[#0d2559]
                            shadow-sm
                        "
                    >
                        AD
                    </div>

                    {!collapsed && (
                        <div className="whitespace-nowrap">

                            <div className="text-lg font-bold">
                                TESDA
                                <span className="text-orange-400">
                                    Connect
                                </span>
                            </div>

                            <div className="text-xs text-white/50">
                                Mamburao Integrated Farm
                            </div>

                        </div>
                    )}

                </div>

            </div>


            {/* =====================================================
                MENU
            ===================================================== */}

            <nav className="px-3 py-6">

                {/* MAIN MENU */}

                {!collapsed && (
                    <div
                        className="
                            mb-3
                            px-3
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-white/30
                        "
                    >
                        Main Menu
                    </div>
                )}


                {/* =================================================
                    DASHBOARD
                ================================================= */}

                {can('dashboard') && (
                    <SidebarItem
                        label="Dashboard"
                        to="/dashboard"
                        active={currentPath === '/dashboard'}
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l9-9 9 9M5 10v10h14V10"
                                />
                            </svg>
                        }
                    />
                )}


                {/* =================================================
                    TRAINEE INTAKE
                ================================================= */}

                {can('trainee-intake') && (
                    <SidebarItem
                        label="Trainee Intake"
                        to="/trainee-intake"
                        active={currentPath.startsWith('/trainee-intake')}
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5h6M9 9h6M9 13h6M9 17h6"
                                />
                            </svg>
                        }
                    />
                )}


                {/* =================================================
                    PROFILES & RECORDS
                ================================================= */}

                {can('profiles-records') && (
                    <SidebarItem
                        label="Profiles & Records"
                        to="/profiles-records"
                        active={currentPath.startsWith('/profiles-records')}
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-9a4 4 0 11-8 0 4 4 0 018 0zm6 2a3 3 0 100-6 3 3 0 000 6z"
                                />
                            </svg>
                        }
                    />
                )}


                {/* =================================================
                    OPERATIONS
                ================================================= */}

                {hasOperations && !collapsed && (
                    <div
                        className="
                            mb-3
                            mt-7
                            px-3
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-white/30
                        "
                    >
                        Operations
                    </div>
                )}


                {/* =================================================
                    ANNOUNCEMENTS
                ================================================= */}

                {can('announcements') && (
                    <SidebarItem
                        label="Announcements"
                        to="/announcements"
                        active={currentPath.startsWith('/announcements')}
                        badge="5"
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 17h5l-1.5-2V9a6.5 6.5 0 00-13 0v6L4 17h5"
                                />
                            </svg>
                        }
                    />
                )}


                {/* =================================================
                    SCHEDULE COORDINATION
                ================================================= */}

                {can('schedule-coordination') && (
                    <SidebarItem
                        label="Schedule Coordination"
                        to="/schedule-coordination"
                        active={currentPath.startsWith('/schedule-coordination')}
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
                                />
                            </svg>
                        }
                    />
                )}


                {/* =================================================
                    REPORT READINESS
                ================================================= */}

                {can('report-readiness') && (
                    <SidebarItem
                        label="Report Readiness"
                        to="/report-readiness"
                        active={currentPath.startsWith('/report-readiness')}
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 19V5m0 14h16M8 16v-4m4 4V8m4 8V5"
                                />
                            </svg>
                        }
                    />
                )}


                {/* =================================================
                    SYSTEM
                ================================================= */}

                {can('settings') && !collapsed && (
                    <div
                        className="
                            mb-3
                            mt-7
                            px-3
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-white/30
                        "
                    >
                        System
                    </div>
                )}


                {/* =================================================
                    SETTINGS
                ================================================= */}

                {can('settings') && (
                    <SidebarItem
                        label="Settings"
                        to="/settings"
                        active={currentPath.startsWith('/settings')}
                        collapsed={collapsed}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6h3l.6-2h-4.2l.6 2zM7.5 9l-1.7-1.7L4 8.9l1.4 1.4M6 14H3v-2h3m1.5 3L5 17.7l1.4 1.4 2.5-2.5M12 18v3m4.5-3l2.5 2.5 1.4-1.4-2.5-2.5M18 14h3v-2h-3m-1.5-3L19 8.5l-1.4-1.4-2.5 2.5"
                                />

                                <circle
                                    cx="12"
                                    cy="13"
                                    r="3"
                                />
                            </svg>
                        }
                    />
                )}

            </nav>


            {/* =====================================================
                AUTHENTICATED USER
            ===================================================== */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    border-t
                    border-white/10
                    p-4
                "
            >

                <div className="flex items-center gap-3">

                    {/* USER INITIAL */}

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-cyan-400
                            font-bold
                            text-white
                        "
                    >
                        {loadingUser ? '...' : userInitial}
                    </div>


                    {!collapsed && (
                        <div className="min-w-0">

                            <div className="truncate text-sm font-bold">
                                {loadingUser
                                    ? 'Loading...'
                                    : user?.name ?? 'Unknown User'}
                            </div>

                            <div className="truncate text-xs text-white/50">
                                {loadingUser
                                    ? '...'
                                    : user?.role ?? 'Unknown Role'}
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </aside>
    );
}