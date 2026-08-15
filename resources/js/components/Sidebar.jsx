import SidebarItem from './SidebarItem';

export default function Sidebar({ collapsed }) {
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

                dark:bg-[#081b43]

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

                    dark:border-white/10
                "
            >

                <div className="flex items-center gap-3">

                    {/* LOGO CIRCLE */}

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


                    {/* LOGO TEXT */}

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

                            dark:text-white/30
                        "
                    >
                        Main Menu
                    </div>

                )}


                {/* =================================================
                    DASHBOARD
                ================================================= */}

                <SidebarItem
                    label="Dashboard"
                    to="/dashboard"
                    active={
                        window.location.pathname === '/dashboard'
                    }
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


                {/* =================================================
                    TRAINEE INTAKE
                ================================================= */}

                <SidebarItem
                    label="Trainee Intake"
                    to="/trainee-intake"
                    active={
                        window.location.pathname === '/trainee-intake'
                    }
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


                {/* =================================================
                    PROFILES & RECORDS
                ================================================= */}

                <SidebarItem
                    label="Profiles & Records"
                    to="/profiles-records"
                    active={
                        window.location.pathname === '/profiles-records'
                    }
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


                {/* =================================================
                    OPERATIONS
                ================================================= */}

                {!collapsed && (

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

                            dark:text-white/30
                        "
                    >
                        Operations
                    </div>

                )}


                {/* =================================================
                    ANNOUNCEMENTS
                ================================================= */}

                <SidebarItem
                    label="Announcements"
                    to="/announcements"
                    active={
                        window.location.pathname === '/announcements'
                    }
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


                {/* =================================================
                    SCHEDULE COORDINATION
                ================================================= */}

                <SidebarItem
                    label="Schedule Coordination"
                    to="/schedule-coordination"
                    active={
                        window.location.pathname ===
                        '/schedule-coordination'
                    }
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


                {/* =================================================
                    REPORT READINESS
                ================================================= */}

                <SidebarItem
                    label="Report Readiness"
                    to="/report-readiness"
                    active={
                        window.location.pathname === '/report-readiness'
                    }
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


                {/* =================================================
                    SYSTEM
                ================================================= */}

                {!collapsed && (

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

                            dark:text-white/30
                        "
                    >
                        System
                    </div>

                )}


                {/* =================================================
                    SETTINGS
                ================================================= */}

                <SidebarItem
                    label="Settings"
                    to="/settings"
                    active={
                        window.location.pathname === '/settings'
                    }
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
                                d="M10.5 6h3l.6-2h-4.2l.6 2zM7.5 9l-1.7-1.7L4 8.9l1.7 1.7M6 14H3v-2h3m1.5 3L5 17.7l1.4 1.4 2.5-2.5M12 18v3m4.5-3l2.5 2.5 1.4-1.4-2.5-2.5M18 14h3v-2h-3m-1.5-3L19 8.5l-1.4-1.4-2.5 2.5"
                            />

                            <circle
                                cx="12"
                                cy="13"
                                r="3"
                            />

                        </svg>
                    }
                />

            </nav>


            {/* =====================================================
                USER
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

                    dark:border-white/10
                "
            >

                <div className="flex items-center gap-3">

                    {/* USER AVATAR */}

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

                            shadow-sm
                        "
                    >
                        AD
                    </div>


                    {/* USER INFORMATION */}

                    {!collapsed && (

                        <div className="min-w-0">

                            <div
                                className="
                                    truncate
                                    text-sm
                                    font-bold
                                    text-white
                                "
                            >
                                Administrator
                            </div>

                            <div
                                className="
                                    truncate
                                    text-xs
                                    text-white/50
                                "
                            >
                                Administrator
                            </div>

                        </div>

                    )}

                </div>

            </div>

        </aside>
    );
}