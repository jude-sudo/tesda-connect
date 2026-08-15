const stats = [
    {
        icon: '♙',
        number: '148',
        label: 'Total Trainees Enrolled',
        change: '↑ 8.3% this month',
        color: 'blue',
        changeColor: 'text-green-500',
    },
    {
        icon: '▤',
        number: '12',
        label: 'Pending Intake Forms',
        change: '↓ 4 from last week',
        color: 'orange',
        changeColor: 'text-red-500',
    },
    {
        icon: '⚠',
        number: '21',
        label: 'Incomplete Records',
        change: '↓ 2 resolved today',
        color: 'red',
        changeColor: 'text-red-500',
    },
    {
        icon: '□',
        number: '3',
        label: 'Upcoming Batches',
        change: '↑ Batch 5, 6 & new',
        color: 'green',
        changeColor: 'text-green-500',
    },
    {
        icon: '◷',
        number: '78%',
        label: 'Report Readiness Score',
        change: '↑ 5% from last batch',
        color: 'cyan',
        changeColor: 'text-green-500',
    },
];

const colors = {
    blue: {
        border: 'border-l-[#10285d]',
        icon: 'bg-blue-50 text-blue-500',
    },
    orange: {
        border: 'border-l-orange-500',
        icon: 'bg-orange-50 text-orange-500',
    },
    red: {
        border: 'border-l-red-500',
        icon: 'bg-red-50 text-red-500',
    },
    green: {
        border: 'border-l-emerald-400',
        icon: 'bg-emerald-50 text-emerald-500',
    },
    cyan: {
        border: 'border-l-orange-400',
        icon: 'bg-cyan-50 text-cyan-500',
    },
};

export default function StatsCards() {

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">

            {stats.map((stat) => {

                const style = colors[stat.color];

                return (
                    <div
                        key={stat.label}
                        className={`rounded-xl border border-slate-200 border-l-[5px] ${style.border} bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
                    >

                        <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${style.icon}`}>
                            {stat.icon}
                        </div>

                        <div className="text-4xl font-bold text-[#10243f]">
                            {stat.number}
                        </div>

                        <div className="mt-1 text-sm text-[#4e6b8c]">
                            {stat.label}
                        </div>

                        <div className={`mt-2 text-sm font-semibold ${stat.changeColor}`}>
                            {stat.change}
                        </div>

                    </div>
                );
            })}

        </div>
    );
}