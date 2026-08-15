import { useState } from 'react';

export default function ScheduleCoordination() {

    const [view, setView] = useState('list');
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [schedules, setSchedules] = useState([
        {
            id: 1,
            title: 'Batch 3 Final Assessment',
            batch: 'Batch 3',
            date: 'Feb 5, 2025',
            time: '08:00',
            venue: 'Training Hall A',
            trainer: 'Instructor Reyes',
            type: 'Assessment',
            status: 'Published',
        },
        {
            id: 2,
            title: 'Batch 4 Orientation',
            batch: 'Batch 4',
            date: 'Jan 25, 2025',
            time: '08:00',
            venue: 'Main Hall',
            trainer: 'Administrator',
            type: 'Orientation',
            status: 'Updated',
        },
        {
            id: 3,
            title: 'Batch 5 Day 1 Training',
            batch: 'Batch 5',
            date: 'Feb 10, 2025',
            time: '07:30',
            venue: 'Workshop Area',
            trainer: 'Instructor Santos',
            type: 'Training',
            status: 'Published',
        },
        {
            id: 4,
            title: 'Batch 6 Enrollment',
            batch: 'Batch 6',
            date: 'Mar 1, 2025',
            time: '09:00',
            venue: 'Office',
            trainer: 'Registrar',
            type: 'Intake',
            status: 'Draft',
        },
        {
            id: 5,
            title: 'Batch 2 Graduation Ceremony',
            batch: 'Batch 2',
            date: 'Jan 30, 2025',
            time: '14:00',
            venue: 'Covered Court',
            trainer: 'Director',
            type: 'Event',
            status: 'Published',
        },
        {
            id: 6,
            title: 'Batch 1 Alumni Assembly',
            batch: 'Batch 1',
            date: 'Feb 15, 2025',
            time: '09:00',
            venue: 'Main Hall',
            trainer: 'Instructor Reyes',
            type: 'Event',
            status: 'Published',
        },
        {
            id: 7,
            title: 'Batch 3 Module 2 Training',
            batch: 'Batch 3',
            date: 'Jan 28, 2025',
            time: '07:30',
            venue: 'Workshop Area',
            trainer: 'Instructor Santos',
            type: 'Training',
            status: 'Published',
        },
        {
            id: 8,
            title: 'Batch 4 Module 1 Training',
            batch: 'Batch 4',
            date: 'Feb 1, 2025',
            time: '07:30',
            venue: 'Training Hall B',
            trainer: 'Instructor Marcos',
            type: 'Training',
            status: 'Published',
        },
    ]);

    const emptyForm = {
        title: '',
        batch: '',
        type: 'Training',
        date: '',
        time: '',
        duration: '',
        venue: '',
        trainer: '',
        description: '',
    };

    const [form, setForm] = useState(emptyForm);

    const openAddModal = () => {
        setEditingId(null);
        setForm(emptyForm);
        setShowModal(true);
    };

    const openEditModal = (schedule) => {
        setEditingId(schedule.id);

        setForm({
            title: schedule.title,
            batch: schedule.batch,
            type: schedule.type,
            date: schedule.date,
            time: schedule.time,
            duration: '',
            venue: schedule.venue,
            trainer: schedule.trainer,
            description: '',
        });

        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingId(null);
        setForm(emptyForm);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.title ||
            !form.batch ||
            !form.date ||
            !form.time
        ) {
            return;
        }

        if (editingId) {

            setSchedules((prev) =>
                prev.map((schedule) =>
                    schedule.id === editingId
                        ? {
                              ...schedule,
                              title: form.title,
                              batch: form.batch,
                              type: form.type,
                              date: form.date,
                              time: form.time,
                              venue: form.venue,
                              trainer: form.trainer,
                          }
                        : schedule
                )
            );

        } else {

            const newSchedule = {
                id: Date.now(),
                title: form.title,
                batch: form.batch,
                date: form.date,
                time: form.time,
                venue: form.venue || '—',
                trainer: form.trainer || '—',
                type: form.type,
                status: 'Draft',
            };

            setSchedules((prev) => [
                newSchedule,
                ...prev,
            ]);
        }

        closeModal();
    };

    const handleDelete = (id) => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this schedule?'
        );

        if (!confirmed) {
            return;
        }

        setSchedules((prev) =>
            prev.filter((schedule) => schedule.id !== id)
        );
    };

    const typeBadge = (type) => {

        const styles = {
            Training: 'bg-blue-50 text-blue-600',
            Assessment: 'bg-purple-50 text-purple-600',
            Orientation: 'bg-amber-50 text-amber-600',
            Intake: 'bg-cyan-50 text-cyan-600',
            Event: 'bg-emerald-50 text-emerald-600',
        };

        return (
            <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                    styles[type] || 'bg-slate-100 text-slate-600'
                }`}
            >
                {type}
            </span>
        );
    };

    const statusBadge = (status) => {

        const styles = {
            Published: 'bg-emerald-50 text-emerald-600',
            Updated: 'bg-blue-50 text-blue-600',
            Draft: 'bg-slate-100 text-slate-500',
        };

        return (
            <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                    styles[status] || 'bg-slate-100 text-slate-600'
                }`}
            >
                {status}
            </span>
        );
    };

    return (
    <div className="min-h-full">

        {/* HEADER */}
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

                <h1 className="text-3xl font-bold text-[#12284a] dark:text-white">
                    📅 Schedule Coordination
                </h1>

                <p className="mt-1 text-base text-[#66809f] dark:text-slate-400">
                    Manage batch training schedules, assessments, and events
                </p>

            </div>

            <button
                onClick={openAddModal}
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
                ➕ Add Schedule
            </button>

        </div>


        {/* VIEW BUTTONS */}
        <div className="mb-6 flex items-center justify-between">

            <div
                className="
                    flex
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-1
                    shadow-sm
                    dark:border-slate-700
                    dark:bg-slate-900
                "
            >

                <button
                    onClick={() => setView('list')}
                    className={`rounded-lg px-5 py-2.5 text-sm font-bold ${
                        view === 'list'
                            ? 'bg-[#10285d] text-white'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                    }`}
                >
                    ☰ List
                </button>

                <button
                    onClick={() => setView('week')}
                    className={`rounded-lg px-5 py-2.5 text-sm font-bold ${
                        view === 'week'
                            ? 'bg-[#10285d] text-white'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                    }`}
                >
                    📆 Week
                </button>

                <button
                    onClick={() => setView('month')}
                    className={`rounded-lg px-5 py-2.5 text-sm font-bold ${
                        view === 'month'
                            ? 'bg-[#10285d] text-white'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                    }`}
                >
                    📅 Month
                </button>

            </div>

        </div>


        {/* LIST VIEW */}
        {view === 'list' && (

            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    dark:border-slate-700
                    dark:bg-slate-900
                "
            >

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[1100px]">

                        <thead
                            className="
                                border-b
                                border-slate-200
                                bg-slate-50
                                dark:border-slate-700
                                dark:bg-slate-800
                            "
                        >

                            <tr
                                className="
                                    text-left
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >

                                <th className="px-6 py-4">
                                    Event
                                </th>

                                <th className="px-4 py-4">
                                    Batch
                                </th>

                                <th className="px-4 py-4">
                                    Date
                                </th>

                                <th className="px-4 py-4">
                                    Time
                                </th>

                                <th className="px-4 py-4">
                                    Venue
                                </th>

                                <th className="px-4 py-4">
                                    Trainer
                                </th>

                                <th className="px-4 py-4">
                                    Type
                                </th>

                                <th className="px-4 py-4">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-right">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody
                            className="
                                divide-y
                                divide-slate-100
                                dark:divide-slate-700
                            "
                        >

                            {schedules.map((schedule) => (

                                <tr
                                    key={schedule.id}
                                    className="
                                        transition
                                        hover:bg-slate-50
                                        dark:hover:bg-slate-800
                                    "
                                >

                                    <td className="px-6 py-5">

                                        <div className="font-bold text-[#12284a] dark:text-white">
                                            {schedule.title}
                                        </div>

                                    </td>

                                    <td className="px-4 py-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
                                        {schedule.batch}
                                    </td>

                                    <td className="px-4 py-5 text-sm text-slate-600 dark:text-slate-300">
                                        {schedule.date}
                                    </td>

                                    <td className="px-4 py-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
                                        {schedule.time}
                                    </td>

                                    <td className="px-4 py-5 text-sm text-slate-600 dark:text-slate-300">
                                        {schedule.venue}
                                    </td>

                                    <td className="px-4 py-5 text-sm text-slate-600 dark:text-slate-300">
                                        {schedule.trainer}
                                    </td>

                                    <td className="px-4 py-5">
                                        {typeBadge(schedule.type)}
                                    </td>

                                    <td className="px-4 py-5">
                                        {statusBadge(schedule.status)}
                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-end gap-2">

                                            <button
                                                onClick={() =>
                                                    openEditModal(schedule)
                                                }
                                                className="
                                                    rounded-lg
                                                    border
                                                    border-slate-200
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    transition
                                                    hover:bg-slate-100
                                                    dark:border-slate-600
                                                    dark:hover:bg-slate-800
                                                "
                                                title="Edit"
                                            >
                                                ✏️
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(schedule.id)
                                                }
                                                className="
                                                    rounded-lg
                                                    border
                                                    border-red-100
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    transition
                                                    hover:bg-red-50
                                                    dark:border-red-900/50
                                                    dark:hover:bg-red-950/40
                                                "
                                                title="Delete"
                                            >
                                                🗑️
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        )}


        {/* WEEK VIEW */}
        {view === 'week' && (

            <div
                className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    dark:border-slate-700
                    dark:bg-slate-900
                "
            >

                <div className="mb-6">

                    <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                        Weekly Schedule
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Weekly calendar view will be displayed here.
                    </p>

                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">

                    {[
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                        'Sun',
                    ].map((day) => (

                        <div
                            key={day}
                            className="
                                min-h-[180px]
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-3
                                dark:border-slate-700
                                dark:bg-slate-800
                            "
                        >

                            <div className="mb-3 text-sm font-bold text-[#12284a] dark:text-white">
                                {day}
                            </div>

                            <div className="space-y-2">

                                {schedules.slice(0, 2).map((schedule) => (

                                    <div
                                        key={`${day}-${schedule.id}`}
                                        className="
                                            rounded-lg
                                            border
                                            border-slate-200
                                            bg-white
                                            p-2
                                            shadow-sm
                                            dark:border-slate-600
                                            dark:bg-slate-900
                                        "
                                    >

                                        <div className="text-[11px] font-bold text-[#10285d] dark:text-blue-400">
                                            {schedule.time}
                                        </div>

                                        <div className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                                            {schedule.title}
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        )}


        {/* MONTH VIEW */}
        {view === 'month' && (

            <div
                className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    dark:border-slate-700
                    dark:bg-slate-900
                "
            >

                <div className="mb-6">

                    <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                        Monthly Schedule
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Monthly calendar view will be displayed here.
                    </p>

                </div>

                <div
                    className="
                        grid
                        grid-cols-7
                        overflow-hidden
                        rounded-xl
                        border
                        border-slate-200
                        dark:border-slate-700
                    "
                >

                    {[
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                    ].map((day) => (

                        <div
                            key={day}
                            className="
                                border-b
                                border-slate-200
                                bg-slate-50
                                p-3
                                text-center
                                text-xs
                                font-bold
                                text-slate-500
                                dark:border-slate-700
                                dark:bg-slate-800
                                dark:text-slate-400
                            "
                        >
                            {day}
                        </div>

                    ))}

                    {Array.from({ length: 35 }).map((_, index) => (

                        <div
                            key={index}
                            className="
                                min-h-[100px]
                                border-b
                                border-r
                                border-slate-100
                                p-2
                                dark:border-slate-700
                            "
                        >

                            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                                {index + 1 <= 31
                                    ? index + 1
                                    : ''}
                            </span>

                            {schedules
                                .filter((schedule) =>
                                    schedule.date.includes(
                                        `${index + 1}`
                                    )
                                )
                                .slice(0, 2)
                                .map((schedule) => (

                                    <div
                                        key={schedule.id}
                                        className="
                                            mt-2
                                            rounded-md
                                            bg-blue-50
                                            p-1.5
                                            text-[10px]
                                            font-semibold
                                            text-blue-700
                                            dark:bg-blue-950/40
                                            dark:text-blue-300
                                        "
                                    >
                                        {schedule.title}
                                    </div>

                                ))}

                        </div>

                    ))}

                </div>

            </div>

        )}


        {/* ADD / EDIT MODAL */}
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
                        max-w-2xl
                        overflow-y-auto
                        rounded-2xl
                        bg-white
                        shadow-2xl
                        dark:bg-slate-900
                    "
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* MODAL HEADER */}
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-200
                            px-7
                            py-5
                            dark:border-slate-700
                        "
                    >

                        <div>

                            <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                                {editingId
                                    ? '✏️ Edit Schedule'
                                    : '📅 Add New Schedule'}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Create and manage training schedules and events.
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
                                text-xl
                                text-slate-400
                                hover:bg-slate-100
                                hover:text-slate-700
                                dark:hover:bg-slate-800
                                dark:hover:text-slate-200
                            "
                        >
                            ✕
                        </button>

                    </div>


                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-7"
                    >

                        <div className="space-y-5">

                            {/* TITLE */}
                            <div>

                                <label
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-bold
                                        text-[#12284a]
                                        dark:text-slate-200
                                    "
                                >
                                    Event Title
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Batch 3 Final Assessment"
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
                                        dark:bg-slate-800
                                        dark:text-slate-200
                                        dark:placeholder:text-slate-500
                                    "
                                    required
                                />

                            </div>


                            {/* BATCH + TYPE */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Batch
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>

                                    <select
                                        name="batch"
                                        value={form.batch}
                                        onChange={handleChange}
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                        "
                                        required
                                    >

                                        <option value="">
                                            — Select Batch —
                                        </option>

                                        <option>Batch 1</option>
                                        <option>Batch 2</option>
                                        <option>Batch 3</option>
                                        <option>Batch 4</option>
                                        <option>Batch 5</option>
                                        <option>Batch 6</option>

                                    </select>

                                </div>


                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Event Type
                                    </label>

                                    <select
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                        "
                                    >

                                        <option>Training</option>
                                        <option>Assessment</option>
                                        <option>Orientation</option>
                                        <option>Intake</option>
                                        <option>Event</option>

                                    </select>

                                </div>

                            </div>


                            {/* DATE + TIME + DURATION */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Date
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                        "
                                        required
                                    />

                                </div>


                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Time
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        type="time"
                                        name="time"
                                        value={form.time}
                                        onChange={handleChange}
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                        "
                                        required
                                    />

                                </div>


                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Duration
                                    </label>

                                    <input
                                        type="text"
                                        name="duration"
                                        value={form.duration}
                                        onChange={handleChange}
                                        placeholder="e.g. 3 hours"
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                            dark:placeholder:text-slate-500
                                        "
                                    />

                                </div>

                            </div>


                            {/* VENUE + TRAINER */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Venue
                                    </label>

                                    <input
                                        type="text"
                                        name="venue"
                                        value={form.venue}
                                        onChange={handleChange}
                                        placeholder="e.g. Training Hall A"
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                            dark:placeholder:text-slate-500
                                        "
                                    />

                                </div>


                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                            text-[#12284a]
                                            dark:text-slate-200
                                        "
                                    >
                                        Assigned Trainer
                                    </label>

                                    <input
                                        type="text"
                                        name="trainer"
                                        value={form.trainer}
                                        onChange={handleChange}
                                        placeholder="e.g. Instructor Reyes"
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
                                            dark:bg-slate-800
                                            dark:text-slate-200
                                            dark:placeholder:text-slate-500
                                        "
                                    />

                                </div>

                            </div>


                            {/* DESCRIPTION */}
                            <div>

                                <label
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-bold
                                        text-[#12284a]
                                        dark:text-slate-200
                                    "
                                >
                                    Description / Notes
                                </label>

                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Enter additional details or notes..."
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
                                        focus:border-[#10285d]
                                        dark:border-slate-600
                                        dark:bg-slate-800
                                        dark:text-slate-200
                                        dark:placeholder:text-slate-500
                                    "
                                />

                            </div>

                        </div>


                        {/* ACTIONS */}
                        <div
                            className="
                                mt-7
                                flex
                                justify-end
                                gap-3
                                border-t
                                border-slate-200
                                pt-5
                                dark:border-slate-700
                            "
                        >

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
                                    dark:bg-slate-800
                                    dark:text-slate-300
                                    dark:hover:bg-slate-700
                                "
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="
                                    rounded-xl
                                    bg-[#10285d]
                                    px-6
                                    py-3
                                    text-sm
                                    font-bold
                                    text-white
                                    shadow-md
                                    transition
                                    hover:bg-[#173778]
                                "
                            >
                                💾 {editingId
                                    ? 'Update Schedule'
                                    : 'Save Schedule'}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        )}

    </div>
);
}