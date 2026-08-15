export default function QuickActions({ children }) {

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">

            <h2 className="mb-5 text-lg font-bold text-[#17345b] dark:text-white">
                ⚡ Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

                {/* ADD TRAINEE */}
                <button
                    className="
                        rounded-xl
                        bg-[#10285d]
                        px-5
                        py-4
                        text-sm
                        font-bold
                        text-white
                        shadow-md
                        transition
                        hover:bg-[#173778]
                    "
                >
                    ＋ &nbsp; Add Trainee
                </button>


                {/* POST ANNOUNCEMENT */}
                <button
                    className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-4
                        text-sm
                        font-bold
                        text-[#17345b]
                        shadow-sm
                        transition
                        hover:shadow-md
                        dark:border-slate-600
                        dark:bg-slate-700
                        dark:text-white
                        dark:hover:bg-slate-600
                    "
                >
                    📢 &nbsp; Post Announcement
                </button>


                {/* ADD SCHEDULE */}
                <button
                    className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-4
                        text-sm
                        font-bold
                        text-[#17345b]
                        shadow-sm
                        transition
                        hover:shadow-md
                        dark:border-slate-600
                        dark:bg-slate-700
                        dark:text-white
                        dark:hover:bg-slate-600
                    "
                >
                    🗓️ &nbsp; Add Schedule
                </button>


                {/* VIEW REPORT */}
                <button
                    className="
                        rounded-xl
                        bg-[#f5a016]
                        px-5
                        py-4
                        text-sm
                        font-bold
                        text-white
                        shadow-md
                        transition
                        hover:bg-[#e8930b]
                    "
                >
                    📊 &nbsp; View Report
                </button>

            </div>


            {/* CHILD COMPONENT */}
            {children}

        </div>
    );
}