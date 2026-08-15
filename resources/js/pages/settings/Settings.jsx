import { useEffect, useState } from 'react';

export default function Settings() {

    // =========================================================
    // ACCOUNT
    // =========================================================

    const [user, setUser] = useState(null);

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] =
        useState('');

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    // =========================================================
    // SYSTEM SETTINGS
    // =========================================================

    
    const [notifications, setNotifications] = useState(true);
    const [offlineMode, setOfflineMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    // =========================================================
    // LOAD CURRENT USER
    // =========================================================



const [darkMode, setDarkMode] = useState(() => {
return localStorage.getItem('darkMode') === 'true';
});

useEffect(() => {
const html = document.documentElement;


if (darkMode) {
    html.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
} else {
    html.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
}


}, [darkMode]);




    useEffect(() => {

        const loadUser = async () => {

            try {

                const response = await fetch('/user', {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        Accept: 'application/json',
                    },
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || 'Unable to load user.'
                    );
                }

                setUser(data.user);

                setDisplayName(data.user.name ?? '');
                setEmail(data.user.email ?? '');

            } catch (error) {

                console.error(
                    'Load user error:',
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        // IMPORTANT:
        // Do NOT put useEffect() here.
        loadUser();

    }, []);

    // =========================================================
    // SAVE ACCOUNT CHANGES
    // =========================================================

    const saveChanges = async () => {

        // -----------------------------------------------------
        // BASIC VALIDATION
        // -----------------------------------------------------

        if (!displayName.trim()) {
            alert('Display Name is required.');
            return;
        }

        if (!email.trim()) {
            alert('Email Address is required.');
            return;
        }

        // -----------------------------------------------------
        // PASSWORD VALIDATION
        // -----------------------------------------------------

        if (newPassword) {

            if (!currentPassword) {

                alert(
                    'Please enter your current password before changing your password.'
                );

                return;
            }

            if (!newPasswordConfirmation) {

                alert(
                    'Please confirm your new password.'
                );

                return;
            }

            if (
                newPassword !==
                newPasswordConfirmation
            ) {

                alert(
                    'New password and confirmation do not match.'
                );

                return;
            }
        }

        setSaving(true);
        setSaved(false);

        try {

            const response = await fetch(
                '/user/profile',
                {
                    method: 'PUT',

                    credentials: 'same-origin',

                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',

                        'X-CSRF-TOKEN':
                            document
                                .querySelector(
                                    'meta[name="csrf-token"]'
                                )
                                ?.getAttribute('content'),
                    },

                    body: JSON.stringify({

                        name:
                            displayName.trim(),

                        email:
                            email.trim(),

                        current_password:
                            currentPassword || null,

                        new_password:
                            newPassword || null,

                        new_password_confirmation:
                            newPasswordConfirmation || null,

                    }),
                }
            );

            const data =
                await response.json();

            // -------------------------------------------------
            // SERVER ERROR
            // -------------------------------------------------

            if (!response.ok) {

                console.error(
                    'Update account error:',
                    data
                );

                // Laravel validation errors
                if (data.errors) {

                    const messages =
                        Object.values(
                            data.errors
                        )
                            .flat()
                            .join('\n');

                    alert(messages);

                    return;
                }

                alert(
                    data.message ||
                    'Unable to update account settings.'
                );

                return;
            }

            // -------------------------------------------------
            // SUCCESS
            // -------------------------------------------------

            if (data.user) {

                setUser(data.user);

                setDisplayName(
                    data.user.name ?? ''
                );

                setEmail(
                    data.user.email ?? ''
                );
            }

            // Clear password fields
            setCurrentPassword('');
            setNewPassword('');
            setNewPasswordConfirmation('');

            // Show success message
            setSaved(true);

            setTimeout(() => {
                setSaved(false);
            }, 3000);

        } catch (error) {

            console.error(
                'Save account error:',
                error
            );

            alert(
                'Something went wrong while saving your account.'
            );

        } finally {

            setSaving(false);

        }
    };

    // =========================================================
    // RESET DEMO DATA
    // =========================================================

    const resetDemoData = () => {

        const confirmed =
            window.confirm(
                'Are you sure you want to reset all demo data?'
            );

        if (!confirmed) {
            return;
        }

        alert(
            'Demo data has been reset.'
        );
    };

    // =========================================================
    // EXPORT ALL DATA
    // =========================================================

    const exportAllData = () => {

        const data = [

            ['Module', 'Status'],

            ['Trainees', 'Available'],

            ['Instructors', 'Available'],

            ['Announcements', 'Available'],

            ['Schedules', 'Available'],

            ['Reports', 'Available'],

        ];

        const csv = data
            .map((row) =>
                row
                    .map(
                        (value) =>
                            `"${String(value).replace(
                                /"/g,
                                '""'
                            )}"`
                    )
                    .join(',')
            )
            .join('\n');

        const blob = new Blob(
            [csv],
            {
                type:
                    'text/csv;charset=utf-8;',
            }
        );

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement('a');

        link.href = url;

        link.download =
            'tesdaconnect-all-data.csv';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };

    // =========================================================
    // RENDER
    // =========================================================

    
   return (
    <div className="space-y-7 text-slate-700 dark:text-slate-200">

        {/* =================================================
            HEADER
        ================================================= */}

        <div>

            <h1 className="text-3xl font-bold text-[#12284a] dark:text-white">
                ⚙️ Settings
            </h1>

            <p className="mt-1 text-base text-[#66809f] dark:text-slate-400">
                Manage your account and application preferences
            </p>

        </div>


        {/* =================================================
            ACCOUNT SETTINGS
        ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">

            <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-700">

                <h2 className="text-lg font-bold text-[#12284a] dark:text-white">
                    👤 Account Settings
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Update your profile and change your password.
                </p>

            </div>


            <div className="p-6">

                {loading ? (

                    <div className="py-8 text-center text-sm text-slate-400">
                        Loading account information...
                    </div>

                ) : (

                    <>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* DISPLAY NAME */}

                            <div>

                                <label
                                    htmlFor="display-name"
                                    className="text-sm font-bold text-slate-600 dark:text-slate-300"
                                >
                                    Display Name
                                </label>

                                <input
                                    id="display-name"
                                    type="text"
                                    value={displayName}
                                    onChange={(e) =>
                                        setDisplayName(
                                            e.target.value
                                        )
                                    }
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#10285d] focus:ring-2 focus:ring-[#10285d]/10 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                />

                            </div>


                            {/* EMAIL */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold text-slate-600 dark:text-slate-300"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#10285d] focus:ring-2 focus:ring-[#10285d]/10 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                />

                            </div>


                            {/* CURRENT PASSWORD */}

                            <div>

                                <label
                                    htmlFor="current-password"
                                    className="text-sm font-bold text-slate-600 dark:text-slate-300"
                                >
                                    Current Password
                                </label>

                                <input
                                    id="current-password"
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) =>
                                        setCurrentPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter current password"
                                    autoComplete="current-password"
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#10285d] focus:ring-2 focus:ring-[#10285d]/10 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                />

                            </div>


                            {/* NEW PASSWORD */}

                            <div>

                                <label
                                    htmlFor="new-password"
                                    className="text-sm font-bold text-slate-600 dark:text-slate-300"
                                >
                                    New Password
                                </label>

                                <input
                                    id="new-password"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Leave blank to keep current password"
                                    autoComplete="new-password"
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#10285d] focus:ring-2 focus:ring-[#10285d]/10 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                />

                            </div>


                            {/* CONFIRM NEW PASSWORD */}

                            {newPassword && (

                                <div>

                                    <label
                                        htmlFor="new-password-confirmation"
                                        className="text-sm font-bold text-slate-600 dark:text-slate-300"
                                    >
                                        Confirm New Password
                                    </label>

                                    <input
                                        id="new-password-confirmation"
                                        type="password"
                                        value={
                                            newPasswordConfirmation
                                        }
                                        onChange={(e) =>
                                            setNewPasswordConfirmation(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Confirm new password"
                                        autoComplete="new-password"
                                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#10285d] focus:ring-2 focus:ring-[#10285d]/10 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
                                    />

                                </div>

                            )}

                        </div>


                        {/* SAVE BUTTON */}

                        <div className="mt-6">

                            <button
                                type="button"
                                onClick={saveChanges}
                                disabled={saving}
                                className="rounded-xl bg-[#10285d] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#173778] disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                {saving
                                    ? 'Saving...'
                                    : '💾 Save Changes'}

                            </button>

                        </div>

                    </>

                )}

            </div>

        </div>


        {/* =================================================
            SYSTEM SETTINGS
        ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">

            <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-700">

                <h2 className="text-lg font-bold text-[#12284a] dark:text-white">
                    🖥️ System Settings
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Customize your application experience.
                </p>

            </div>


            <div className="divide-y divide-slate-100 dark:divide-slate-700">

                {/* DARK MODE */}

                <SettingToggle
                    icon="🌙"
                    title="Dark Mode"
                    description="Switch between light and dark themes"
                    checked={darkMode}
                    onChange={() =>
                        setDarkMode((value) => !value)
                    }
                />


                {/* NOTIFICATIONS */}

                <SettingToggle
                    icon="🔔"
                    title="Push Notifications"
                    description="Receive in-app notifications"
                    checked={notifications}
                    onChange={() =>
                        setNotifications(
                            (value) => !value
                        )
                    }
                />


                {/* OFFLINE MODE */}

                <SettingToggle
                    icon="📵"
                    title="Offline Mode (Demo)"
                    description="Simulate offline/online toggle"
                    checked={offlineMode}
                    onChange={() =>
                        setOfflineMode(
                            (value) => !value
                        )
                    }
                />


                {/* AUTO SAVE */}

                <SettingToggle
                    icon="💾"
                    title="Auto-Save Drafts"
                    description="Automatically save form drafts"
                    checked={autoSave}
                    onChange={() =>
                        setAutoSave(
                            (value) => !value
                        )
                    }
                />

            </div>

        </div>


        {/* =================================================
            ABOUT TESDACONNECT
        ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">

            <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-700">

                <h2 className="text-lg font-bold text-[#12284a] dark:text-white">
                    ℹ️ About TESDAConnect
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Application information and credits.
                </p>

            </div>


            <div className="p-6">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <InfoItem
                        label="Application Name"
                        value="TESDAConnect v1.0.0"
                    />

                    <InfoItem
                        label="Institution"
                        value="Balli School of Technology & Mamburao Integrated Farm"
                    />

                    <InfoItem
                        label="Location"
                        value="Brgy. Tangkalan, Mamburao, Occidental Mindoro"
                    />

                    <InfoItem
                        label="Academic Year"
                        value="2024–2025"
                    />

                </div>


                {/* DEVELOPERS */}

                <div className="mt-6">

                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400">
                        Developers
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">

                        <Developer
                            initials="BA"
                            name="Bautista"
                        />

                        <Developer
                            initials="TT"
                            name="Tipon-tipon"
                        />

                        <Developer
                            initials="LI"
                            name="Liwade"
                        />

                        <Developer
                            initials="RI"
                            name="Rivas"
                        />

                    </div>

                </div>


                {/* ADVISER */}

                <div className="mt-6">

                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400">
                        Adviser
                    </h3>

                    <div className="mt-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-[#12284a] dark:bg-slate-700 dark:text-white">
                        Hanz C. Bausa
                    </div>

                </div>

            </div>

        </div>


        {/* =================================================
            DATA MANAGEMENT
        ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                    <h2 className="text-lg font-bold text-[#12284a] dark:text-white">
                        Data Management
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Manage demo data and export application records.
                    </p>

                </div>


                <div className="flex flex-wrap gap-3">

                    <button
                        type="button"
                        onClick={resetDemoData}
                        className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60"
                    >
                        🔄 Reset Demo Data
                    </button>


                    <button
                        type="button"
                        onClick={exportAllData}
                        className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#10285d] transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                    >
                        ⬇️ Export All Data (CSV)
                    </button>

                </div>

            </div>

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="pb-4 text-center text-sm text-slate-400 dark:text-slate-500">
            Capstone Project · June 2025
        </div>


        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {saved && (

            <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg">
                ✅ Changes saved successfully.
            </div>

        )}

    </div>
);


/* =========================================================
   SETTING TOGGLE
========================================================= */

function SettingToggle({
    icon,
    title,
    description,
    checked,
    onChange,
}) {

    return (

        <div className="flex items-center justify-between gap-5 px-6 py-5">

            <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl dark:bg-slate-700">
                    {icon}
                </div>

                <div>

                    <h3 className="text-sm font-bold text-[#12284a] dark:text-white">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {description}
                    </p>

                </div>

            </div>


            <button
                type="button"
                onClick={onChange}
                aria-pressed={checked}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    checked
                        ? 'bg-[#10285d]'
                        : 'bg-slate-300 dark:bg-slate-600'
                }`}
            >

                <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                        checked
                            ? 'left-6'
                            : 'left-1'
                    }`}
                />

            </button>

        </div>
    );
}


/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
    label,
    value,
}) {

    return (

        <div>

            <div className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {label}
            </div>

            <div className="mt-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                {value}
            </div>

        </div>
    );
}


/* =========================================================
   DEVELOPER
========================================================= */

function Developer({
    initials,
    name,
}) {

    return (

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-colors dark:border-slate-600 dark:bg-slate-700">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10285d] text-xs font-bold text-white">
                {initials}
            </div>

            <span className="text-sm font-bold text-[#12284a] dark:text-white">
                {name}
            </span>

        </div>
    );
}
}