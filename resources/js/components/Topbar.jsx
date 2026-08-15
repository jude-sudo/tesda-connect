import { useState } from 'react';

export default function Topbar({
    collapsed,
    onToggle,
}) {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute('content');

            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                credentials: 'same-origin',
            });

            if (!response.ok) {
                throw new Error('Logout failed.');
            }

            // Balik sa Landing Page
            window.location.href = '/';

        } catch (error) {
            console.error('Logout error:', error);
            setLoading(false);
        }
    };

    return (
        <>
            {/* =====================================================
                TOPBAR
            ===================================================== */}

            <header
                className={`
                    fixed
                    right-0
                    top-0
                    z-40
                    h-[74px]

                    border-b
                    border-slate-200
                    bg-white

                    shadow-sm

                    transition-all
                    duration-300

                    dark:border-slate-700
                    dark:bg-slate-900

                    ${
                        collapsed
                            ? 'left-[80px]'
                            : 'left-[300px]'
                    }
                `}
            >

                <div className="flex h-full items-center justify-between px-6">

                    {/* =================================================
                        LEFT
                    ================================================= */}

                    <div className="flex items-center gap-5">

                        {/* MENU BUTTON */}

                        <button
                            type="button"
                            onClick={onToggle}
                            className="
                                text-slate-600
                                transition
                                hover:text-slate-900

                                dark:text-slate-300
                                dark:hover:text-white
                            "
                        >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />

                            </svg>

                        </button>


                        {/* =================================================
                            BREADCRUMB
                        ================================================= */}

                        <div className="flex items-center gap-2 text-sm">

                            <span className="text-slate-400 dark:text-slate-500">
                                Home
                            </span>

                            <span className="text-slate-300 dark:text-slate-600">
                                ›
                            </span>

                            <span className="font-semibold text-slate-800 dark:text-white">
                                Dashboard
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT
                    ================================================= */}

                    <div className="flex items-center gap-5">

                        {/* =================================================
                            ONLINE STATUS
                        ================================================= */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full

                                border
                                border-green-200
                                bg-green-50

                                px-4
                                py-2

                                dark:border-green-900/60
                                dark:bg-green-950/40
                            "
                        >

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-green-500
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    text-green-600

                                    dark:text-green-400
                                "
                            >
                                Online
                            </span>

                        </div>


                        {/* =================================================
                            NOTIFICATION
                        ================================================= */}

                        <button
                            type="button"
                            className="
                                relative
                                text-xl
                                transition
                                hover:scale-105
                            "
                        >

                            🔔

                            <span
                                className="
                                    absolute
                                    -right-2
                                    -top-2
                                    flex
                                    h-5
                                    w-5
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-red-500
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                3
                            </span>

                        </button>


                        {/* =================================================
                            USER
                        ================================================= */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-full

                                border
                                border-slate-200

                                px-3
                                py-1.5

                                dark:border-slate-700
                                dark:bg-slate-800
                            "
                        >

                            {/* AVATAR */}

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full

                                    bg-gradient-to-br
                                    from-cyan-600
                                    to-teal-500

                                    text-sm
                                    font-bold
                                    text-white
                                "
                            >
                                AD
                            </div>


                            {/* USER NAME */}

                            <div className="hidden sm:block">

                                <div
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-800

                                        dark:text-white
                                    "
                                >
                                    Administrator
                                </div>

                                <div
                                    className="
                                        text-xs
                                        text-slate-400

                                        dark:text-slate-500
                                    "
                                >
                                    Administrator
                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            SIGN OUT
                        ================================================= */}

                        <button
                            type="button"
                            onClick={() =>
                                setShowLogoutModal(true)
                            }
                            className="
                                rounded-lg

                                border
                                border-red-200
                                bg-red-50

                                px-5
                                py-2.5

                                text-sm
                                font-semibold
                                text-red-500

                                transition
                                hover:bg-red-100

                                dark:border-red-900/60
                                dark:bg-red-950/40
                                dark:text-red-400
                                dark:hover:bg-red-950/60
                            "
                        >
                            Sign Out
                        </button>

                    </div>

                </div>

            </header>


            {/* =====================================================
                LOGOUT CONFIRMATION MODAL
            ===================================================== */}

            {showLogoutModal && (

                <div
                    className="
                        fixed
                        inset-0
                        z-[100]

                        flex
                        items-center
                        justify-center

                        bg-slate-900/60
                        px-4

                        backdrop-blur-sm
                    "
                    onClick={() =>
                        !loading &&
                        setShowLogoutModal(false)
                    }
                >

                    <div
                        className="
                            w-full
                            max-w-md

                            rounded-2xl

                            bg-white

                            p-7

                            shadow-2xl

                            dark:bg-slate-800
                            dark:shadow-black/40
                        "
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        {/* =================================================
                            ICON
                        ================================================= */}

                        <div className="flex justify-center">

                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-red-50

                                    dark:bg-red-950/40
                                "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="
                                        h-8
                                        w-8
                                        text-red-500

                                        dark:text-red-400
                                    "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"
                                    />

                                </svg>

                            </div>

                        </div>


                        {/* =================================================
                            TITLE
                        ================================================= */}

                        <div className="mt-5 text-center">

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-slate-900

                                    dark:text-white
                                "
                            >
                                Are you sure?
                            </h2>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-6
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                Are you sure you want to sign out?
                            </p>

                        </div>


                        {/* =================================================
                            BUTTONS
                        ================================================= */}

                        <div className="mt-7 flex gap-3">

                            {/* CANCEL */}

                            <button
                                type="button"
                                disabled={loading}
                                onClick={() =>
                                    setShowLogoutModal(false)
                                }
                                className="
                                    flex-1
                                    rounded-lg

                                    border
                                    border-slate-200
                                    bg-white

                                    px-4
                                    py-3

                                    text-sm
                                    font-semibold
                                    text-slate-600

                                    transition
                                    hover:bg-slate-50

                                    disabled:opacity-50

                                    dark:border-slate-600
                                    dark:bg-slate-700
                                    dark:text-slate-200
                                    dark:hover:bg-slate-600
                                "
                            >
                                Cancel
                            </button>


                            {/* YES SIGN OUT */}

                            <button
                                type="button"
                                disabled={loading}
                                onClick={handleLogout}
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-lg

                                    bg-red-500

                                    px-4
                                    py-3

                                    text-sm
                                    font-bold
                                    text-white

                                    transition
                                    hover:bg-red-600

                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >

                                {loading ? (

                                    <>

                                        <svg
                                            className="h-4 w-4 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >

                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />

                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />

                                        </svg>

                                        Signing Out...

                                    </>

                                ) : (

                                    <>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"
                                            />

                                        </svg>

                                        Yes, Sign Out

                                    </>

                                )}

                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}