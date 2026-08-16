import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function AppLayout({ children, user }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-[#eef3f9] transition-colors duration-300 dark:bg-slate-950">

            {/* =========================
                SIDEBAR
            ========================= */}
            <Sidebar
                collapsed={sidebarCollapsed}
                user={user}
            />


            {/* =========================
                MAIN AREA
            ========================= */}
            <div
                className={`
                    flex
                    min-h-screen
                    flex-col
                    transition-all
                    duration-300
                    ${
                        sidebarCollapsed
                            ? 'ml-[80px]'
                            : 'ml-[300px]'
                    }
                `}
            >

                {/* =========================
                    TOPBAR
                ========================= */}
                <Topbar
                    collapsed={sidebarCollapsed}
                    user={user}
                    onToggle={() =>
                        setSidebarCollapsed(!sidebarCollapsed)
                    }
                />


                {/* =========================
                    PAGE CONTENT
                ========================= */}
                <main className="flex-1 bg-[#eef3f9] pt-[74px] p-6 transition-colors duration-300 dark:bg-slate-950">

                    {/* =========================
                        ONLINE STATUS BAR
                    ========================= */}
                    <div
                        className="
                            -mx-6
                            mb-6
                            flex
                            h-[38px]
                            items-center
                            border-b
                            border-emerald-100
                            bg-[#e5f7f2]
                            px-5
                            text-sm
                            font-medium
                            text-emerald-700
                            transition-colors
                            duration-300
                            dark:border-emerald-900
                            dark:bg-emerald-950/40
                            dark:text-emerald-400
                        "
                    >

                        <span
                            className="
                                mr-2
                                h-3
                                w-3
                                rounded-full
                                bg-emerald-400
                                shadow-[0_0_8px_rgba(52,211,153,.6)]
                            "
                        />

                        Online — All features available

                    </div>


                    {/* =========================
                        PAGE
                    ========================= */}
                    {children}

                </main>


                {/* =========================
                    FOOTER
                ========================= */}
                <footer
                    className="
                        mt-auto
                        border-t
                        border-slate-200
                        bg-white
                        px-7
                        py-4
                        text-center
                        text-sm
                        text-[#8295ad]
                        transition-colors
                        duration-300
                        dark:border-slate-800
                        dark:bg-slate-900
                        dark:text-slate-400
                    "
                >

                    Balli School of Technology &amp; Mamburao Integrated Farm

                    <span className="mx-2">
                        ·
                    </span>

                    Brgy. Tangkalan, Mamburao, Occidental Mindoro

                    <span className="mx-2">
                        |
                    </span>

                    Powered by TESDAConnect

                    <span className="mx-2">
                        |
                    </span>

                    AY 2024–2025

                </footer>

            </div>

        </div>
    );
}