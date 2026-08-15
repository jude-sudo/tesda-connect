import { useState } from 'react';

export default function Announcements() {

    const [showModal, setShowModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    const [activeFilter, setActiveFilter] = useState('all');

    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        title: '',
        category: 'Schedule',
        priority: 'Normal',
        message: '',
        audience: 'All Trainees',
    });

    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            category: 'Schedule',
            title: 'Batch 4 Orientation Rescheduled',
            priority: 'Urgent',
            message:
                'Batch 4 orientation has been moved to January 25, 2025 at 8:00 AM. All trainees must be present. Please bring a valid ID and your TESDA registration form.',
            author: 'Administrator',
            date: 'Jan 20, 2025, 9:00 AM',
            audience: 'Batch 4',
        },

        {
            id: 2,
            category: 'Schedule',
            title: 'Batch 3 Final Assessment Schedule',
            priority: 'Normal',
            message:
                'The final competency assessment for all Batch 3 trainees is scheduled on February 5–7, 2025. Please review your modules and prepare all required materials.',
            author: 'Focal Person',
            date: 'Jan 18, 2025, 2:30 PM',
            audience: 'Batch 3',
        },

        {
            id: 3,
            category: 'Deadline',
            title: 'Submission of Incomplete Documents',
            priority: 'Urgent',
            message:
                'All trainees with incomplete documents must submit the required documents by January 31, 2025. Failure to comply may result in disqualification from the TESDA training program.',
            author: 'Registrar',
            date: 'Jan 17, 2025, 11:00 AM',
            audience: 'All Trainees',
        },

        {
            id: 4,
            category: 'General',
            title: 'TESDA Scholarship Renewal',
            priority: 'Normal',
            message:
                'Scholars who are eligible for TESDA scholarship renewal for the next enrollment period should coordinate with the Focal Person at the earliest convenience.',
            author: 'Administrator',
            date: 'Jan 15, 2025, 8:00 AM',
            audience: 'All Trainees',
        },

        {
            id: 5,
            category: 'Schedule',
            title: 'Batch 5 Training Schedule Released',
            priority: 'Normal',
            message:
                "Batch 5 training officially starts on February 10, 2025. The full training schedule is now available at the Registrar's office. Trainees are advised to secure their copies.",
            author: 'Focal Person',
            date: 'Jan 14, 2025, 4:00 PM',
            audience: 'Batch 5',
        },
    ]);


    /* =====================================================
       FILTER
    ===================================================== */

    const filteredAnnouncements =
        activeFilter === 'all'
            ? announcements
            : announcements.filter(
                (announcement) =>
                    announcement.category === activeFilter
            );


    /* =====================================================
       FORM
    ===================================================== */

    const resetForm = () => {

        setForm({
            title: '',
            category: 'Schedule',
            priority: 'Normal',
            message: '',
            audience: 'All Trainees',
        });

        setEditingId(null);
    };


    const openCreateModal = () => {

        resetForm();
        setShowModal(true);
    };


    const closeModal = () => {

        setShowModal(false);
        resetForm();
    };


    const handleChange = (field, value) => {

        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };


    /* =====================================================
       CREATE / UPDATE
    ===================================================== */

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !form.title.trim() ||
            !form.message.trim()
        ) {
            return;
        }


        if (editingId) {

            setAnnouncements((prev) =>
                prev.map((announcement) =>
                    announcement.id === editingId
                        ? {
                            ...announcement,
                            title: form.title,
                            category: form.category,
                            priority: form.priority,
                            message: form.message,
                            audience: form.audience,
                        }
                        : announcement
                )
            );

        } else {

            const newAnnouncement = {

                id: Date.now(),

                category: form.category,

                title: form.title,

                priority: form.priority,

                message: form.message,

                author: 'Administrator',

                date: 'Just now',

                audience: form.audience,
            };


            setAnnouncements((prev) => [
                newAnnouncement,
                ...prev,
            ]);
        }


        closeModal();
    };


    /* =====================================================
       EDIT
    ===================================================== */

    const handleEdit = (announcement) => {

        setEditingId(announcement.id);

        setForm({
            title: announcement.title,
            category: announcement.category,
            priority: announcement.priority,
            message: announcement.message,
            audience: announcement.audience,
        });

        setShowModal(true);
    };


    /* =====================================================
       DELETE
    ===================================================== */

    const handleDelete = (id) => {

        const confirmed = window.confirm(
            'Are you sure you want to delete this announcement?'
        );

        if (!confirmed) {
            return;
        }

        setAnnouncements((prev) =>
            prev.filter(
                (announcement) =>
                    announcement.id !== id
            )
        );
    };


    /* =====================================================
       CATEGORY ICON
    ===================================================== */

    const getCategoryIcon = (category) => {

        switch (category) {

            case 'Schedule':
                return '📅';

            case 'Deadline':
                return '⏰';

            case 'Important':
                return '🚨';

            default:
                return '📢';
        }
    };


    /* =====================================================
       CATEGORY STYLE
    ===================================================== */

    const getCategoryStyle = (category) => {

        switch (category) {

            case 'Schedule':
                return 'bg-blue-50 text-blue-600';

            case 'Deadline':
                return 'bg-amber-50 text-amber-600';

            case 'Important':
                return 'bg-red-50 text-red-600';

            default:
                return 'bg-slate-100 text-slate-600';
        }
    };


    
    return (
    <div className="pb-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

                <h1 className="text-3xl font-bold text-[#12284a] dark:text-white">
                    📢 Announcements
                </h1>

                <p className="mt-1 text-base text-[#66809f] dark:text-slate-400">
                    Post and manage training announcements for trainees and staff
                </p>

            </div>


            <button
                onClick={openCreateModal}
                className="
                    rounded-xl
                    bg-[#10285d]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    transition
                    hover:bg-[#173778]
                "
            >
                ➕ Post New Announcement
            </button>

        </div>


        {/* =================================================
            FILTERS
        ================================================= */}

        <div className="mb-6 flex flex-wrap gap-2">

            <FilterButton
                active={activeFilter === 'all'}
                onClick={() => setActiveFilter('all')}
            >
                All
            </FilterButton>

            <FilterButton
                active={activeFilter === 'Schedule'}
                onClick={() => setActiveFilter('Schedule')}
            >
                📅 Schedules
            </FilterButton>

            <FilterButton
                active={activeFilter === 'Deadline'}
                onClick={() => setActiveFilter('Deadline')}
            >
                ⏰ Deadlines
            </FilterButton>

            <FilterButton
                active={activeFilter === 'Important'}
                onClick={() => setActiveFilter('Important')}
            >
                🚨 Important
            </FilterButton>

        </div>


        {/* =================================================
            ANNOUNCEMENT CARDS
        ================================================= */}

        <div className="space-y-5">

            {filteredAnnouncements.map((announcement) => (

                <div
                    key={announcement.id}
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                        transition
                        hover:shadow-md

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:shadow-none
                        dark:hover:bg-slate-800/90
                    "
                >

                    {/* TOP */}

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                        <div className="flex items-start gap-4">

                            <div
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${getCategoryStyle(
                                    announcement.category
                                )}`}
                            >
                                {getCategoryIcon(
                                    announcement.category
                                )}
                            </div>


                            <div>

                                <div className="mb-2 flex flex-wrap items-center gap-2">

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-bold ${getCategoryStyle(
                                            announcement.category
                                        )}`}
                                    >
                                        {announcement.category}
                                    </span>


                                    {announcement.priority === 'Urgent' && (

                                        <span className="
                                            rounded-full
                                            bg-red-50
                                            px-3
                                            py-1
                                            text-xs
                                            font-bold
                                            text-red-600

                                            dark:bg-red-950/40
                                            dark:text-red-400
                                        ">
                                            🔴 Urgent
                                        </span>

                                    )}

                                </div>


                                <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                                    {announcement.title}
                                </h2>

                            </div>

                        </div>


                        {/* ACTIONS */}

                        <div className="flex gap-2">

                            <button
                                onClick={() =>
                                    handleEdit(announcement)
                                }
                                className="
                                    rounded-lg
                                    border
                                    border-slate-200
                                    px-3
                                    py-2
                                    text-sm
                                    transition
                                    hover:bg-slate-50

                                    dark:border-slate-600
                                    dark:bg-slate-700
                                    dark:hover:bg-slate-600
                                "
                                title="Edit"
                            >
                                ✏️
                            </button>


                            <button
                                onClick={() =>
                                    handleDelete(
                                        announcement.id
                                    )
                                }
                                className="
                                    rounded-lg
                                    border
                                    border-red-200
                                    px-3
                                    py-2
                                    text-sm
                                    text-red-500
                                    transition
                                    hover:bg-red-50

                                    dark:border-red-900
                                    dark:bg-red-950/20
                                    dark:hover:bg-red-950/40
                                "
                                title="Delete"
                            >
                                🗑️
                            </button>

                        </div>

                    </div>


                    {/* MESSAGE */}

                    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">

                        {announcement.message.length > 220
                            ? `${announcement.message.substring(
                                0,
                                220
                            )}...`
                            : announcement.message}

                        {announcement.message.length > 220 && (

                            <button
                                onClick={() =>
                                    setSelectedAnnouncement(
                                        announcement
                                    )
                                }
                                className="
                                    ml-2
                                    font-bold
                                    text-[#10285d]
                                    hover:underline

                                    dark:text-blue-400
                                "
                            >
                                Read more
                            </button>

                        )}

                    </p>


                    {/* FOOTER */}

                    <div className="
                        mt-5
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-slate-100
                        pt-4
                        text-sm
                        sm:flex-row
                        sm:items-center
                        sm:justify-between

                        dark:border-slate-700
                    ">

                        <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400">

                            <span>
                                📌 {announcement.author}
                            </span>

                            <span>
                                🕒 {announcement.date}
                            </span>

                        </div>


                        <span className="
                            rounded-full
                            bg-slate-100
                            px-3
                            py-1
                            text-xs
                            font-bold
                            text-slate-600

                            dark:bg-slate-700
                            dark:text-slate-300
                        ">
                            {announcement.audience}
                        </span>

                    </div>

                </div>

            ))}


            {filteredAnnouncements.length === 0 && (

                <div className="
                    rounded-2xl
                    border
                    border-dashed
                    border-slate-300
                    bg-white
                    p-12
                    text-center

                    dark:border-slate-600
                    dark:bg-slate-800
                ">

                    <div className="text-4xl">
                        📢
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-[#12284a] dark:text-white">
                        No announcements found
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        There are no announcements under this category.
                    </p>

                </div>

            )}

        </div>


        {/* =================================================
            COMPOSE MODAL
        ================================================= */}

        {showModal && (

            <div
                className="
                    fixed
                    inset-0
                    z-[100]
                    flex
                    items-center
                    justify-center
                    bg-slate-950/60
                    p-4
                    backdrop-blur-sm
                "
                onClick={closeModal}
            >

                <div
                    className="
                        max-h-[92vh]
                        w-full
                        max-w-3xl
                        overflow-y-auto
                        rounded-2xl
                        bg-white
                        shadow-2xl

                        dark:bg-slate-800
                    "
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* MODAL HEADER */}

                    <div className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        px-7
                        py-5

                        dark:border-slate-700
                    ">

                        <div>

                            <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                                ✍️ {editingId
                                    ? 'Edit Announcement'
                                    : 'Compose Announcement'}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Create an announcement for trainees and staff.
                            </p>

                        </div>


                        <button
                            onClick={closeModal}
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                text-slate-400
                                transition
                                hover:bg-slate-100
                                hover:text-slate-700

                                dark:hover:bg-slate-700
                                dark:hover:text-white
                            "
                        >
                            ✕
                        </button>

                    </div>


                    {/* FORM */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-7"
                    >

                        {/* TITLE */}

                        <div>

                            <label className="mb-2 block text-sm font-bold text-[#12284a] dark:text-slate-200">
                                Title *
                            </label>

                            <input
                                type="text"
                                value={form.title}
                                onChange={(e) =>
                                    handleChange(
                                        'title',
                                        e.target.value
                                    )
                                }
                                placeholder="Enter announcement title"
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-[#10285d]
                                    focus:ring-2
                                    focus:ring-[#10285d]/10

                                    dark:border-slate-600
                                    dark:bg-slate-700
                                    dark:text-white
                                    dark:placeholder:text-slate-400
                                    dark:focus:border-blue-500
                                "
                                required
                            />

                        </div>


                        {/* CATEGORY + PRIORITY */}

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <div>

                                <label className="mb-2 block text-sm font-bold text-[#12284a] dark:text-slate-200">
                                    Category
                                </label>

                                <select
                                    value={form.category}
                                    onChange={(e) =>
                                        handleChange(
                                            'category',
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        px-4
                                        py-3
                                        text-sm
                                        text-slate-700
                                        outline-none
                                        focus:border-[#10285d]

                                        dark:border-slate-600
                                        dark:bg-slate-700
                                        dark:text-white
                                        dark:focus:border-blue-500
                                    "
                                >

                                    <option value="Schedule">
                                        Schedule
                                    </option>

                                    <option value="Deadline">
                                        Deadline
                                    </option>

                                    <option value="General">
                                        General
                                    </option>

                                    <option value="Important">
                                        Important Notice
                                    </option>

                                </select>

                            </div>


                            <div>

                                <label className="mb-2 block text-sm font-bold text-[#12284a] dark:text-slate-200">
                                    Priority
                                </label>

                                <select
                                    value={form.priority}
                                    onChange={(e) =>
                                        handleChange(
                                            'priority',
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        px-4
                                        py-3
                                        text-sm
                                        text-slate-700
                                        outline-none
                                        focus:border-[#10285d]

                                        dark:border-slate-600
                                        dark:bg-slate-700
                                        dark:text-white
                                        dark:focus:border-blue-500
                                    "
                                >

                                    <option value="Normal">
                                        Normal
                                    </option>

                                    <option value="Urgent">
                                        🔴 Urgent
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* MESSAGE */}

                        <div>

                            <label className="mb-2 block text-sm font-bold text-[#12284a] dark:text-slate-200">
                                Message *
                            </label>

                            <textarea
                                rows="6"
                                value={form.message}
                                onChange={(e) =>
                                    handleChange(
                                        'message',
                                        e.target.value
                                    )
                                }
                                placeholder="Write your announcement..."
                                className="
                                    w-full
                                    resize-none
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-[#10285d]
                                    focus:ring-2
                                    focus:ring-[#10285d]/10

                                    dark:border-slate-600
                                    dark:bg-slate-700
                                    dark:text-white
                                    dark:placeholder:text-slate-400
                                    dark:focus:border-blue-500
                                "
                                required
                            />

                        </div>


                        {/* TARGET AUDIENCE */}

                        <div>

                            <label className="mb-2 block text-sm font-bold text-[#12284a] dark:text-slate-200">
                                Target Audience
                            </label>

                            <select
                                value={form.audience}
                                onChange={(e) =>
                                    handleChange(
                                        'audience',
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    focus:border-[#10285d]

                                    dark:border-slate-600
                                    dark:bg-slate-700
                                    dark:text-white
                                    dark:focus:border-blue-500
                                "
                            >

                                <option>
                                    All Trainees
                                </option>

                                <option>
                                    Batch 1
                                </option>

                                <option>
                                    Batch 2
                                </option>

                                <option>
                                    Batch 3
                                </option>

                                <option>
                                    Batch 4
                                </option>

                                <option>
                                    Batch 5
                                </option>

                                <option>
                                    Batch 6
                                </option>

                                <option>
                                    All Staff
                                </option>

                            </select>

                        </div>


                        {/* BUTTONS */}

                        <div className="
                            flex
                            justify-end
                            gap-3
                            border-t
                            border-slate-100
                            pt-5

                            dark:border-slate-700
                        ">

                            <button
                                type="button"
                                onClick={closeModal}
                                className="
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-5
                                    py-3
                                    text-sm
                                    font-bold
                                    text-slate-600
                                    transition
                                    hover:bg-slate-50

                                    dark:border-slate-600
                                    dark:bg-slate-700
                                    dark:text-slate-200
                                    dark:hover:bg-slate-600
                                "
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="
                                    rounded-xl
                                    bg-[#10285d]
                                    px-5
                                    py-3
                                    text-sm
                                    font-bold
                                    text-white
                                    transition
                                    hover:bg-[#173778]
                                "
                            >
                                📢 {editingId
                                    ? 'Update Announcement'
                                    : 'Post Announcement'}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        )}


        {/* =================================================
            READ MORE MODAL
        ================================================= */}

        {selectedAnnouncement && (

            <div
                className="
                    fixed
                    inset-0
                    z-[110]
                    flex
                    items-center
                    justify-center
                    bg-slate-950/60
                    p-4
                    backdrop-blur-sm
                "
                onClick={() =>
                    setSelectedAnnouncement(null)
                }
            >

                <div
                    className="
                        w-full
                        max-w-2xl
                        rounded-2xl
                        bg-white
                        shadow-2xl

                        dark:bg-slate-800
                    "
                    onClick={(e) =>
                        e.stopPropagation()
                    }
                >

                    <div className="
                        border-b
                        border-slate-200
                        p-6

                        dark:border-slate-700
                    ">

                        <div className="flex items-start justify-between">

                            <div>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-bold ${getCategoryStyle(
                                        selectedAnnouncement.category
                                    )}`}
                                >
                                    {getCategoryIcon(
                                        selectedAnnouncement.category
                                    )}{' '}
                                    {selectedAnnouncement.category}
                                </span>

                                {selectedAnnouncement.priority === 'Urgent' && (

                                    <span className="
                                        ml-2
                                        rounded-full
                                        bg-red-50
                                        px-3
                                        py-1
                                        text-xs
                                        font-bold
                                        text-red-600

                                        dark:bg-red-950/40
                                        dark:text-red-400
                                    ">
                                        🔴 Urgent
                                    </span>

                                )}

                                <h2 className="mt-4 text-2xl font-bold text-[#12284a] dark:text-white">
                                    {selectedAnnouncement.title}
                                </h2>

                            </div>


                            <button
                                onClick={() =>
                                    setSelectedAnnouncement(
                                        null
                                    )
                                }
                                className="
                                    text-slate-400
                                    hover:text-slate-700

                                    dark:hover:text-white
                                "
                            >
                                ✕
                            </button>

                        </div>

                    </div>


                    <div className="p-6">

                        <p className="whitespace-pre-line text-sm leading-7 text-slate-600 dark:text-slate-300">
                            {selectedAnnouncement.message}
                        </p>


                        <div className="
                            mt-6
                            rounded-xl
                            bg-slate-50
                            p-4
                            text-sm

                            dark:bg-slate-700/60
                        ">

                            <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-300">

                                <span>
                                    📌 {selectedAnnouncement.author}
                                </span>

                                <span>
                                    🕒 {selectedAnnouncement.date}
                                </span>

                                <span>
                                    👥 {selectedAnnouncement.audience}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )}

    </div>
);
}


/* =========================================================
   FILTER BUTTON
========================================================= */

function FilterButton({
    children,
    active,
    onClick,
}) {

    return (

        <button
            onClick={onClick}
            className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                active
                    ? 'bg-[#10285d] text-white shadow-sm'
                    : `
                        border
                        border-slate-200
                        bg-white
                        text-slate-500
                        hover:bg-slate-50
                        hover:text-slate-700

                        dark:border-slate-600
                        dark:bg-slate-800
                        dark:text-slate-300
                        dark:hover:bg-slate-700
                        dark:hover:text-white
                    `
            }`}
        >
            {children}
        </button>

    );

}