import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function AppLayout({ children }) {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-[#eef3f9]">

            {/* =========================
                SIDEBAR
            ========================= */}
            <Sidebar
                collapsed={sidebarCollapsed}
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
                    onToggle={() =>
                        setSidebarCollapsed(!sidebarCollapsed)
                    }
                />


                {/* =========================
                    PAGE CONTENT
                ========================= */}
                <main className="flex-1 pt-[74px] p-6">
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
                    {children}
                </main>


                {/* =========================
                    FOOTER
                ========================= */}
                <footer className="mt-auto border-t border-slate-200 bg-white px-7 py-4 text-center text-sm text-[#8295ad]">

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