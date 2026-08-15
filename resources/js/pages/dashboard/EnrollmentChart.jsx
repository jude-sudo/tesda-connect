const batches = [
    { name: 'Batch 1', value: 25, color: 'bg-[#405577]' },
    { name: 'Batch 2', value: 25, color: 'bg-[#935be7]' },
    { name: 'Batch 3', value: 25, color: 'bg-[#3ba8bd]' },
    { name: 'Batch 4', value: 25, color: 'bg-[#ca3f78]' },
    { name: 'Batch 5', value: 25, color: 'bg-[#429861]' },
    { name: 'Batch 6', value: 23, color: 'bg-[#cc653c]' },
];

export default function EnrollmentChart() {

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-lg font-bold text-[#17345b]">
                📈 Trainee Enrollment per Batch
            </h2>

            <div className="relative h-[280px]">

                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between">

                    {[30, 25, 20, 15, 10, 5, 0].map((number) => (
                        <div
                            key={number}
                            className="flex items-center"
                        >
                            <span className="w-8 text-xs text-[#8093ab]">
                                {number}
                            </span>

                            <div className="h-px flex-1 bg-slate-100" />
                        </div>
                    ))}

                </div>

                {/* Bars */}
                <div className="absolute bottom-0 left-10 right-0 top-0 flex items-end justify-around">

                    {batches.map((batch) => (

                        <div
                            key={batch.name}
                            className="flex h-full flex-1 flex-col items-center justify-end px-3"
                        >

                            <div
                                className={`w-full max-w-[75px] rounded-t-lg ${batch.color}`}
                                style={{
                                    height: `${(batch.value / 30) * 100}%`,
                                }}
                            />

                            <div className="mt-3 text-xs text-[#647b98]">
                                {batch.name}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}