import StatsCards from './StatsCards';
import EnrollmentChart from './EnrollmentChart';
import RecordCompleteness from './RecordCompleteness';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import BatchStatus from './BatchStatus';

export default function Dashboard() {

    return (
        <div className="text-slate-700 dark:text-slate-200">

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-[#12284a] dark:text-white">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-base text-[#66809f] dark:text-slate-400">
                        Welcome back! Here's an overview of your TESDA
                        training operations.
                    </p>

                </div>


                {/* =================================================
                    HEADER BUTTONS
                ================================================= */}

                <div className="flex gap-3">

                    {/* RESET DATA */}

                    <button
                        type="button"
                        className="
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-[#16345f]
                            shadow-sm
                            transition

                            hover:bg-slate-50
                            hover:shadow-md

                            dark:border-slate-600
                            dark:bg-slate-800
                            dark:text-slate-200
                            dark:hover:bg-slate-700
                        "
                    >
                        🔄 Reset Data
                    </button>


                    {/* VIEW REPORT */}

                    <button
                        type="button"
                        className="
                            rounded-xl
                            bg-[#10285d]
                            px-5
                            py-3
                            text-sm
                            font-bold
                            text-white
                            shadow-md
                            transition

                            hover:bg-[#173778]

                            dark:bg-blue-700
                            dark:hover:bg-blue-600
                        "
                    >
                        📊 View Report
                    </button>

                </div>

            </div>


            {/* =================================================
                STATISTICS
            ================================================= */}

            <StatsCards />


            {/* =================================================
                CHARTS
            ================================================= */}

            <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-3">

                <div className="xl:col-span-2">
                    <EnrollmentChart />
                </div>

                <RecordCompleteness />

            </div>


            {/* =================================================
                BOTTOM SECTION
            ================================================= */}

            <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-2">

                <RecentActivity />

                <QuickActions>
                    <BatchStatus />
                </QuickActions>

            </div>

        </div>
    );
}