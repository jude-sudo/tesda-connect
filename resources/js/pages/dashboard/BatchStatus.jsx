const batches = [
    { name: 'Batch 1', percentage: 96 },
    { name: 'Batch 2', percentage: 84 },
    { name: 'Batch 3', percentage: 72 },
    { name: 'Batch 4', percentage: 60 },
    { name: 'Batch 5', percentage: 80 },
    { name: 'Batch 6', percentage: 70 },
];

export default function BatchStatus() {

    return (
        <div
            className="
                mt-6
                border-t
                border-slate-200
                pt-5

                dark:border-slate-700
            "
        >

            {/* =================================================
                TITLE
            ================================================= */}

            <h3
                className="
                    mb-4
                    text-lg
                    font-bold

                    text-[#17345b]

                    dark:text-white
                "
            >
                📦 Batch Status Overview
            </h3>


            {/* =================================================
                BATCH LIST
            ================================================= */}

            <div className="space-y-3">

                {batches.map((batch) => {

                    let color = 'bg-green-500';
                    let textColor = 'text-green-500';

                    if (batch.percentage < 70) {

                        color = 'bg-red-500';
                        textColor = 'text-red-500';

                    } else if (batch.percentage < 80) {

                        color = 'bg-orange-400';
                        textColor = 'text-orange-500';

                    }

                    return (

                        <div
                            key={batch.name}
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            {/* =================================================
                                BATCH NAME
                            ================================================= */}

                            <span
                                className="
                                    w-16
                                    text-sm

                                    text-[#607996]

                                    dark:text-slate-400
                                "
                            >
                                {batch.name}
                            </span>


                            {/* =================================================
                                PROGRESS BAR
                            ================================================= */}

                            <div
                                className="
                                    h-2
                                    flex-1
                                    overflow-hidden
                                    rounded-full

                                    bg-slate-200

                                    dark:bg-slate-700
                                "
                            >

                                <div
                                    className={`
                                        h-full
                                        rounded-full
                                        ${color}
                                    `}
                                    style={{
                                        width: `${batch.percentage}%`,
                                    }}
                                />

                            </div>


                            {/* =================================================
                                PERCENTAGE
                            ================================================= */}

                            <span
                                className={`
                                    w-10
                                    text-right
                                    text-sm
                                    font-bold
                                    ${textColor}
                                `}
                            >
                                {batch.percentage}%
                            </span>

                        </div>

                    );

                })}

            </div>

        </div>
    );
}