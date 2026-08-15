function EngineItem({
    icon,
    title,
    description,
    status,
    type,
}) {
    const colors = {
        green: 'bg-green-400/10 text-green-400',
        red: 'bg-red-400/10 text-red-400',
        purple: 'bg-purple-400/10 text-purple-400',
    };

    return (
        <div className="mb-2 flex items-center gap-2 rounded-lg bg-white/[0.025] p-2">

            <div
                className={`flex h-6 w-6 items-center justify-center rounded-md text-[5px] font-bold ${colors[type]}`}
            >
                {icon}
            </div>

            <div className="min-w-0 flex-1">

                <div className="text-[7px] font-bold">
                    {title}
                </div>

                <div className="truncate text-[5px] text-white/30">
                    {description}
                </div>

            </div>

            <span className={`text-[5px] font-bold ${colors[type]}`}>
                {status}
            </span>

        </div>
    );
}


export default function EngineCard() {
    return (
        <div className="mx-auto w-[255px] rounded-2xl border border-white/10 bg-[#132a2c]/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">

                <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="text-[6px] font-bold tracking-widest text-white/30">
                    TESDACONNECT DECISION ENGINE
                </div>

                <span className="rounded-full bg-green-400/10 px-2 py-1 text-[5px] font-bold text-green-400">
                    ONLINE
                </span>

            </div>

            {/* Sync */}
            <div className="mt-3 rounded-lg bg-white/5 p-3">

                <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/20 text-xs">
                        ◈
                    </div>

                    <div>

                        <div className="text-[8px] font-bold">
                            Sync Engine active
                        </div>

                        <div className="text-[5px] text-white/40">
                            Local-first synchronized with cloud repository
                        </div>

                    </div>

                </div>

            </div>

            {/* Logs */}
            <div className="mt-3">

                <div className="mb-2 text-[6px] font-bold uppercase tracking-widest text-white/30">
                    Decision Support & Engine Logs
                </div>

                <EngineItem
                    icon="DE"
                    title="Double-Enrollment Rule"
                    description="No training registered yet"
                    status="Inactive"
                    type="green"
                />

                <EngineItem
                    icon="RR"
                    title="Report Readiness Check"
                    description="Regularly validated & currently empty"
                    status="Empty"
                    type="red"
                />

                <EngineItem
                    icon="SW"
                    title="Service Worker Cache"
                    description="LocalStorage initialized for Mamburao"
                    status="Synced"
                    type="purple"
                />

            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2">

                <div className="rounded-md bg-white/5 p-2">

                    <div className="text-[5px] text-white/30">
                        Report Readiness Score
                    </div>

                    <div className="mt-1 text-lg font-bold">
                        0%
                    </div>

                    <div className="mt-1 h-1 rounded-full bg-white/10">
                        <div className="h-full w-0 rounded-full bg-cyan-400" />
                    </div>

                </div>

                <div className="rounded-md bg-white/5 p-2">

                    <div className="text-[5px] text-white/30">
                        Intake Validation
                    </div>

                    <div className="mt-1 text-lg font-bold">
                        0 Flags
                    </div>

                    <div className="text-[5px] text-green-400">
                        All Trainees Validated
                    </div>

                </div>

            </div>

            <div className="mt-3 flex justify-between text-[5px] text-white/25">

                <span>
                    Decision Engine Active
                </span>

                <span>
                    Storage Status: Synchronized
                </span>

            </div>

        </div>
    );
}