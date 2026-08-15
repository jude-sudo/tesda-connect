export default function SidebarItem({
    icon,
    label,
    active = false,
    badge,
    collapsed = false,
}) {
    return (
        <button
            className={`
                group flex w-full items-center rounded-lg px-3 py-3
                transition-all duration-200
                ${active
                    ? 'bg-slate-700/80 text-orange-400'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
                ${collapsed ? 'justify-center' : ''}
            `}
            title={collapsed ? label : ''}
        >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                {icon}
            </span>

            {!collapsed && (
                <>
                    <span className="ml-3 flex-1 text-left text-sm font-semibold">
                        {label}
                    </span>

                    {badge && (
                        <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                            {badge}
                        </span>
                    )}
                </>
            )}
        </button>
    );
}