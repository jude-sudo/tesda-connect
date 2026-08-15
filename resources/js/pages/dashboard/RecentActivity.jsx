const activities = [
    {
        icon: '♟',
        text: 'New trainee record added — Juan Dela Cruz',
        time: '2 mins ago',
        color: 'text-purple-600',
    },
    {
        icon: '📢',
        text: 'Announcement posted — Schedule for Batch 4',
        time: '1 hour ago',
        color: 'text-pink-500',
    },
    {
        icon: '⚠',
        text: 'Document incomplete flagged — Maria Santos',
        time: '3 hours ago',
        color: 'text-orange-500',
    },
    {
        icon: '📊',
        text: 'Report summary generated for Batch 3',
        time: 'Yesterday',
        color: 'text-purple-500',
    },
    {
        icon: '🗓️',
        text: 'Schedule updated — Batch 5 orientation',
        time: 'Yesterday',
        color: 'text-blue-500',
    },
    {
        icon: '☑',
        text: 'Trainee verified — Eduardo Cruz (T-2024-009)',
        time: '2 days ago',
        color: 'text-green-500',
    },
    {
        icon: '📋',
        text: 'New intake form submitted — Josephine Bautista',
        time: '2 days ago',
        color: 'text-orange-500',
    },
];

export default function RecentActivity() {

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-4 flex items-center justify-between">

                <h2 className="text-lg font-bold text-[#17345b]">
                    🕘 Recent Activity
                </h2>

                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#17345b] shadow-sm">
                    View All
                </button>

            </div>

            <div>

                {activities.map((activity, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-b-0"
                    >

                        <div className={`w-6 text-xl ${activity.color}`}>
                            {activity.icon}
                        </div>

                        <div>

                            <div className="text-sm font-medium text-[#19355c]">
                                {activity.text}
                            </div>

                            <div className="mt-1 text-xs text-[#8ba0b9]">
                                {activity.time}
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}