import { useState } from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatsCards from './StatsCards';
import EnrollmentChart from './EnrollmentChart';
import RecordCompleteness from './RecordCompleteness';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import BatchStatus from './BatchStatus';

export default function Dashboard() {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-[#eef3f9]">

            {/* Sidebar */}
            <Sidebar
                collapsed={sidebarCollapsed}
            />

            {/* Main Area */}
            <div
                className={`
                    min-h-screen
                    transition-all
                    duration-300
                    ${sidebarCollapsed ? 'ml-[80px]' : 'ml-[300px]'}
                `}
            >

                {/* Topbar */}
                <Topbar
                    collapsed={sidebarCollapsed}
                    onToggle={() =>
                        setSidebarCollapsed(!sidebarCollapsed)
                    }
                />

               

                <main className="pt-[74px] p-6">

                
                
                    {/* Page Header */}
                    <div className="mb-7 flex items-center justify-between">

                        <div>
                            <div className="flex h-[42px] items-center border-b border-emerald-100 bg-[#e5f7f2] text-sm font-medium text-emerald-700">
                                <span className="mr-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)]"></span>
                                Online — All features available
                            </div>
                            <h1 className="text-3xl font-bold text-[#12284a]">
                                Dashboard
                            </h1>

                            <p className="mt-1 text-base text-[#66809f]">
                                Welcome back! Here's an overview of your TESDA
                                training operations.
                            </p>
                        </div>

                        <div className="flex gap-3">

                            <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#16345f] shadow-sm transition hover:shadow-md">
                                🔄 Reset Data
                            </button>

                            <button className="rounded-xl bg-[#10285d] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#173778]">
                                📊 View Report
                            </button>

                        </div>

                    </div>

                    {/* Statistics */}
                    <StatsCards />

                    {/* Charts */}
                    <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-3">

                        <div className="xl:col-span-2">
                            <EnrollmentChart />
                        </div>

                        <RecordCompleteness />

                    </div>

                    {/* Bottom Section */}
                    <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-2">

                        <RecentActivity />

                        <QuickActions>
                            <BatchStatus />
                        </QuickActions>

                    </div>

                </main>

                {/* Footer */}
                <footer className="border-t border-slate-200 bg-white px-7 py-4 text-center text-sm text-[#8295ad]">
                    Balli School of Technology &amp; Mamburao Integrated Farm
                    <span className="mx-2">·</span>
                    Brgy. Tangkalan, Mamburao, Occidental Mindoro
                    <span className="mx-2">|</span>
                    Powered by TESDAConnect
                    <span className="mx-2">|</span>
                    AY 2024–2025
                </footer>

            </div>
        </div>
    );
}