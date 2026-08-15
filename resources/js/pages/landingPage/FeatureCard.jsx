export default function FeatureCard({
    icon,
    title,
    description,
    type,
}) {

    const styles = {
        blue: {
            icon: 'bg-blue-50 text-blue-400',
            button: 'border-blue-300 text-blue-400',
        },

        purple: {
            icon: 'bg-purple-50 text-purple-400',
            button: 'border-purple-300 text-purple-400',
        },

        cyan: {
            icon: 'bg-cyan-50 text-cyan-400',
            button: 'border-cyan-300 text-cyan-400',
        },

        green: {
            icon: 'bg-green-50 text-green-400',
            button: 'border-green-300 text-green-400',
        },

        yellow: {
            icon: 'bg-yellow-50 text-yellow-500',
            button: 'border-yellow-300 text-yellow-500',
        },

        red: {
            icon: 'bg-red-50 text-red-400',
            button: 'border-red-300 text-red-400',
        },
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div
                className={`mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-sm ${styles[type].icon}`}
            >
                {icon}
            </div>

            <h3 className="text-[11px] font-bold text-slate-800">
                {title}
            </h3>

            <p className="mt-2 min-h-[42px] text-[7px] leading-4 text-slate-500">
                {description}
            </p>

            <button
                className={`mt-3 rounded-md border bg-white px-3 py-1.5 text-[7px] font-bold ${styles[type].button}`}
            >
                Learn More →
            </button>

        </div>
    );
}