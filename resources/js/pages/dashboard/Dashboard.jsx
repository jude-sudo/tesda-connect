import StatsCards from './StatsCards';
import EnrollmentChart from './EnrollmentChart';
import RecordCompleteness from './RecordCompleteness';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import BatchStatus from './BatchStatus';

export default function Dashboard() {

    return (
        <>

            {/* Page Header */}
            <div className="mb-7 flex items-center justify-between">

                <div>

                     
                    <h1 className="text-3xl font-bold text-[#12284a]">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-base text-[#66809f]">
                        Welcome back! Here's an overview of your TESDA
                        training operations.
                    </p>

                </div>


                <div className="flex gap-3">

                    <button
                        className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#16345f] shadow-sm transition hover:shadow-md"
                    >
                        🔄 Reset Data
                    </button>

                    <button
                        className="rounded-xl bg-[#10285d] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#173778]"
                    >
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


            {/* Bottom */}
            <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-2">

                <RecentActivity />

                <QuickActions>
                    <BatchStatus />
                </QuickActions>

            </div>

        </>
    );
}