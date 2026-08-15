export default function RecordCompleteness() {

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-4 text-lg font-bold text-[#17345b]">
                📁 Record Completeness
            </h2>

            <div className="flex flex-col items-center justify-center">

                <div
                    className="relative flex h-[245px] w-[245px] items-center justify-center rounded-full"
                    style={{
                        background:
                            'conic-gradient(#20c55a 0deg 277deg, #f44343 277deg 360deg)',
                    }}
                >

                    <div className="flex h-[155px] w-[155px] items-center justify-center rounded-full bg-white">
                        <div className="text-center">

                            <div className="text-3xl font-bold text-[#17345b]">
                                77%
                            </div>

                            <div className="text-xs text-slate-400">
                                Complete
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-5 flex gap-7 text-sm text-[#71849c]">

                    <div className="flex items-center gap-2">
                        <span className="h-3 w-12 bg-green-500" />
                        Complete
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-3 w-12 bg-red-500" />
                        Incomplete
                    </div>

                </div>

            </div>

        </div>
    );
}