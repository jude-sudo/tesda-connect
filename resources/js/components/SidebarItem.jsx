export default function SidebarItem({
    icon,
    label,
    active = false,
    badge,
    collapsed = false,
    to,
}) {

    const handleClick = () => {
        if (to) {
            window.location.href = to;
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            title={collapsed ? label : ''}
            className={`
                group
                flex
                w-full
                items-center
                rounded-lg
                px-3
                py-3

                transition-all
                duration-200

                ${collapsed ? 'justify-center' : ''}

                ${
                    active
                        ? `
                            bg-slate-700/90
                            text-orange-400
                            shadow-sm

                            dark:bg-slate-700
                            dark:text-orange-400
                        `
                        : `
                            text-slate-300

                            hover:bg-white/10
                            hover:text-white

                            dark:text-slate-300
                            dark:hover:bg-white/10
                            dark:hover:text-white
                        `
                }
            `}
        >

            {/* =================================================
                ICON
            ================================================= */}

            <span
                className={`
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center

                    transition-colors
                    duration-200

                    ${
                        active
                            ? 'text-orange-400'
                            : 'text-slate-300 group-hover:text-white'
                    }
                `}
            >
                {icon}
            </span>


            {/* =================================================
                LABEL + BADGE
            ================================================= */}

            {!collapsed && (

                <>

                    {/* LABEL */}

                    <span
                        className={`
                            ml-3
                            flex-1
                            text-left
                            text-sm
                            font-semibold

                            transition-colors
                            duration-200

                            ${
                                active
                                    ? 'text-orange-400'
                                    : 'text-slate-300 group-hover:text-white'
                            }
                        `}
                    >
                        {label}
                    </span>


                    {/* BADGE */}

                    {badge && (

                        <span
                            className="
                                ml-auto
                                rounded-full
                                bg-red-500

                                px-2
                                py-0.5

                                text-xs
                                font-bold
                                text-white

                                shadow-sm
                            "
                        >
                            {badge}
                        </span>

                    )}

                </>

            )}

        </button>
    );
}