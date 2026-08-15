export default function QuickActions({ children }) {

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-lg font-bold text-[#17345b]">
                ⚡ Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

                <button className="rounded-xl bg-[#10285d] px-5 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[#173778]">
                    ＋ &nbsp; Add Trainee
                </button>

                <button className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-[#17345b] shadow-sm hover:shadow-md">
                    📢 &nbsp; Post Announcement
                </button>

                <button className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-[#17345b] shadow-sm hover:shadow-md">
                    🗓️ &nbsp; Add Schedule
                </button>

                <button className="rounded-xl bg-[#f5a016] px-5 py-4 text-sm font-bold text-white shadow-md hover:bg-[#e8930b]">
                    📊 &nbsp; View Report
                </button>

            </div>

            {children}

        </div>
    );
}