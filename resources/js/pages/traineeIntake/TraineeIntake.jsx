import { useMemo, useState } from 'react';

const initialTrainees = [
    {
        id: 1,
        traineeId: 'T-2024-001',
        firstName: 'Juan',
        middleName: 'A.',
        lastName: 'Dela Cruz',
        batch: 'Batch 1',
        course: 'Electrical Installation',
        contact: '09171234567',
        status: 'Verified',
    },
    {
        id: 2,
        traineeId: 'T-2024-002',
        firstName: 'Maria',
        middleName: '',
        lastName: 'Santos',
        batch: 'Batch 1',
        course: 'Cookery NC II',
        contact: '09281234567',
        status: 'Incomplete',
    },
    {
        id: 3,
        traineeId: 'T-2024-003',
        firstName: 'Pedro',
        middleName: '',
        lastName: 'Reyes',
        batch: 'Batch 2',
        course: 'Welding NC II',
        contact: '09391234567',
        status: 'Draft',
    },
    {
        id: 4,
        traineeId: 'T-2024-004',
        firstName: 'Ana',
        middleName: '',
        lastName: 'Villanueva',
        batch: 'Batch 2',
        course: 'Housekeeping NC II',
        contact: '09451234567',
        status: 'Verified',
    },
    {
        id: 5,
        traineeId: 'T-2024-005',
        firstName: 'Carlo',
        middleName: '',
        lastName: 'Manalo',
        batch: 'Batch 3',
        course: 'Plumbing NC II',
        contact: '09561234567',
        status: 'Submitted',
    },
    {
        id: 6,
        traineeId: 'T-2024-006',
        firstName: 'Rosa',
        middleName: '',
        lastName: 'Fernandez',
        batch: 'Batch 3',
        course: 'Electrical Installation',
        contact: '09671234567',
        status: 'Verified',
    },
    {
        id: 7,
        traineeId: 'T-2024-007',
        firstName: 'Miguel',
        middleName: '',
        lastName: 'Torres',
        batch: 'Batch 4',
        course: 'Cookery NC II',
        contact: '09781234567',
        status: 'Draft',
    },
    {
        id: 8,
        traineeId: 'T-2024-008',
        firstName: 'Liza',
        middleName: '',
        lastName: 'Ramos',
        batch: 'Batch 4',
        course: 'Welding NC II',
        contact: '09891234567',
        status: 'Incomplete',
    },
    {
        id: 9,
        traineeId: 'T-2024-009',
        firstName: 'Eduardo',
        middleName: '',
        lastName: 'Cruz',
        batch: 'Batch 5',
        course: 'Housekeeping NC II',
        contact: '09901234567',
        status: 'Verified',
    },
    {
        id: 10,
        traineeId: 'T-2024-010',
        firstName: 'Josephine',
        middleName: '',
        lastName: 'Bautista',
        batch: 'Batch 5',
        course: 'Plumbing NC II',
        contact: '09011234567',
        status: 'Submitted',
    },
];

const emptyForm = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    gender: 'Male',
    civilStatus: 'Single',
    contact: '',
    email: '',
    address: '',
    barangay: '',
    municipality: 'Mamburao',
    province: 'Occidental Mindoro',

    tesdaRegistration: '',
    batch: '',
    course: '',
    trainingStartDate: '',
    trainingEndDate: '',
    trainer: '',
};

export default function TraineeIntake() {

    const [trainees, setTrainees] = useState(initialTrainees);

    const [search, setSearch] = useState('');
    const [batchFilter, setBatchFilter] = useState('All Batches');
    const [statusFilter, setStatusFilter] = useState('All Statuses');

    const [showModal, setShowModal] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState(emptyForm);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;


    /*
    |--------------------------------------------------------------------------
    | Search + Filter
    |--------------------------------------------------------------------------
    */

    const filteredTrainees = useMemo(() => {

        return trainees.filter((trainee) => {

            const fullName =
                `${trainee.firstName} ${trainee.middleName} ${trainee.lastName}`
                    .toLowerCase();

            const searchValue = search.toLowerCase();

            const matchesSearch =
                fullName.includes(searchValue) ||
                trainee.traineeId.toLowerCase().includes(searchValue) ||
                trainee.contact.includes(searchValue);

            const matchesBatch =
                batchFilter === 'All Batches' ||
                trainee.batch === batchFilter;

            const matchesStatus =
                statusFilter === 'All Statuses' ||
                trainee.status === statusFilter;

            return matchesSearch && matchesBatch && matchesStatus;
        });

    }, [trainees, search, batchFilter, statusFilter]);


    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    */

    const totalPages = Math.ceil(
        filteredTrainees.length / itemsPerPage
    );

    const paginatedTrainees = filteredTrainees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    /*
    |--------------------------------------------------------------------------
    | Modal
    |--------------------------------------------------------------------------
    */

    const openAddModal = () => {

        setEditingId(null);

        setForm(emptyForm);

        setShowModal(true);
    };


    const closeModal = () => {

        setShowModal(false);

        setEditingId(null);

        setForm(emptyForm);
    };


    /*
    |--------------------------------------------------------------------------
    | Form
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };


    /*
    |--------------------------------------------------------------------------
    | Save Trainee
    |--------------------------------------------------------------------------
    */

    const saveTrainee = (status) => {

        if (
            !form.firstName ||
            !form.lastName ||
            !form.contact ||
            !form.batch ||
            !form.course
        ) {
            alert(
                'Please complete the required fields before saving.'
            );

            return;
        }


        if (editingId) {

            setTrainees((previous) =>
                previous.map((trainee) =>
                    trainee.id === editingId
                        ? {
                            ...trainee,
                            firstName: form.firstName,
                            middleName: form.middleName,
                            lastName: form.lastName,
                            contact: form.contact,
                            batch: form.batch,
                            course: form.course,
                            status,
                        }
                        : trainee
                )
            );

        } else {

            const newTrainee = {

                id: Date.now(),

                traineeId:
                    `T-${new Date().getFullYear()}-${String(
                        trainees.length + 1
                    ).padStart(3, '0')}`,

                firstName: form.firstName,

                middleName: form.middleName,

                lastName: form.lastName,

                batch: form.batch,

                course: form.course,

                contact: form.contact,

                status,
            };


            setTrainees((previous) => [
                ...previous,
                newTrainee,
            ]);
        }


        closeModal();

        setCurrentPage(1);
    };


    /*
    |--------------------------------------------------------------------------
    | Edit
    |--------------------------------------------------------------------------
    */

    const editTrainee = (trainee) => {

        setEditingId(trainee.id);

        setForm({

            firstName: trainee.firstName,

            middleName: trainee.middleName,

            lastName: trainee.lastName,

            birthDate: '',

            gender: 'Male',

            civilStatus: 'Single',

            contact: trainee.contact,

            email: '',

            address: '',

            barangay: '',

            municipality: 'Mamburao',

            province: 'Occidental Mindoro',

            tesdaRegistration: '',

            batch: trainee.batch,

            course: trainee.course,

            trainingStartDate: '',

            trainingEndDate: '',

            trainer: '',
        });

        setShowModal(true);
    };


    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const deleteTrainee = (id) => {

        const confirmed = window.confirm(
            'Are you sure you want to delete this trainee?'
        );

        if (!confirmed) return;

        setTrainees((previous) =>
            previous.filter(
                (trainee) => trainee.id !== id
            )
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Status Badge
    |--------------------------------------------------------------------------
    */

    const statusBadge = (status) => {

        const styles = {

            Verified:
                'bg-emerald-100 text-emerald-700',

            Incomplete:
                'bg-red-100 text-red-600',

            Draft:
                'bg-slate-100 text-slate-600',

            Submitted:
                'bg-blue-100 text-blue-700',
        };

        return (
            <span
                className={`
                    inline-flex items-center gap-1.5
                    rounded-full
                    px-3 py-1
                    text-xs font-semibold
                    ${styles[status]}
                `}
            >

                <span
                    className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        ${status === 'Verified'
                            ? 'bg-emerald-500'
                            : status === 'Incomplete'
                                ? 'bg-red-500'
                                : status === 'Submitted'
                                    ? 'bg-blue-500'
                                    : 'bg-slate-500'
                        }
                    `}
                />

                {status}

            </span>
        );
    };


return (

    <>

        {/* =====================================================
            PAGE
        ====================================================== */}

        <div
            className="
                min-h-screen
                bg-[#eef3f9]
                dark:bg-slate-950
            "
        >


            {/* =====================================================
                HEADER
            ====================================================== */}

            <div
                className="
                    mb-6
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <div className="flex items-center gap-2">

                        <span className="text-2xl">
                            📋
                        </span>

                        <h1
                            className="
                                text-3xl
                                font-bold
                                text-[#12284a]
                                dark:text-white
                            "
                        >
                            Trainee Intake
                        </h1>

                    </div>

                    <p
                        className="
                            mt-1
                            text-base
                            text-[#66809f]
                            dark:text-slate-400
                        "
                    >
                        Manage and process new trainee registrations
                    </p>

                </div>


                <div className="flex gap-3">

                    {/* IMPORT */}

                    <button
                        type="button"
                        className="
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-[#16345f]
                            shadow-sm
                            transition
                            hover:shadow-md

                            dark:border-slate-700
                            dark:bg-slate-900
                            dark:text-slate-200
                            dark:hover:bg-slate-800
                        "
                        onClick={() =>
                            alert('CSV import will be connected next.')
                        }
                    >
                        📥 Import CSV
                    </button>


                    {/* ADD */}

                    <button
                        type="button"
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
                        ＋ Add New Trainee
                    </button>

                </div>

            </div>


            {/* =====================================================
                TABLE CARD
            ====================================================== */}

            <div
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm

                    dark:border-slate-700
                    dark:bg-slate-900
                "
            >


                {/* SEARCH / FILTER BAR */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        border-b
                        border-slate-200
                        p-4

                        dark:border-slate-700
                    "
                >

                    <div className="relative flex-1">

                        <span
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                            "
                        >
                            🔍
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            placeholder="Search by name, ID, or contact..."
                            className="
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-[#f8fafc]
                                py-2.5
                                pl-11
                                pr-4
                                text-sm
                                text-[#16345f]
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-[#10285d]
                                focus:ring-2
                                focus:ring-[#10285d]/10

                                dark:border-slate-700
                                dark:bg-slate-800
                                dark:text-white
                                dark:placeholder:text-slate-500
                                dark:focus:border-blue-500
                                dark:focus:ring-blue-500/20
                            "
                        />

                    </div>


                    {/* BATCH */}

                    <select
                        value={batchFilter}
                        onChange={(e) => {
                            setBatchFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2.5
                            text-sm
                            text-[#16345f]
                            outline-none

                            dark:border-slate-700
                            dark:bg-slate-800
                            dark:text-white
                        "
                    >

                        <option>All Batches</option>
                        <option>Batch 1</option>
                        <option>Batch 2</option>
                        <option>Batch 3</option>
                        <option>Batch 4</option>
                        <option>Batch 5</option>

                    </select>


                    {/* STATUS */}

                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2.5
                            text-sm
                            text-[#16345f]
                            outline-none

                            dark:border-slate-700
                            dark:bg-slate-800
                            dark:text-white
                        "
                    >

                        <option>All Statuses</option>
                        <option>Verified</option>
                        <option>Incomplete</option>
                        <option>Draft</option>
                        <option>Submitted</option>

                    </select>


                    <span
                        className="
                            whitespace-nowrap
                            text-sm
                            text-[#66809f]
                            dark:text-slate-400
                        "
                    >

                        Showing {paginatedTrainees.length} of{' '}
                        {filteredTrainees.length} trainees

                    </span>

                </div>


                {/* =====================================================
                    TABLE
                ====================================================== */}

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr
                                className="
                                    border-b
                                    border-slate-200
                                    bg-[#f8fafc]
                                    text-left
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-[#58708f]

                                    dark:border-slate-700
                                    dark:bg-slate-800
                                    dark:text-slate-300
                                "
                            >

                                <th className="w-12 px-4 py-3">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                    />
                                </th>

                                <th className="px-4 py-3">
                                    Trainee ID
                                </th>

                                <th className="px-4 py-3">
                                    Full Name
                                </th>

                                <th className="px-4 py-3">
                                    Batch
                                </th>

                                <th className="px-4 py-3">
                                    Course
                                </th>

                                <th className="px-4 py-3">
                                    Contact No.
                                </th>

                                <th className="px-4 py-3">
                                    Status
                                </th>

                                <th className="px-4 py-3 text-center">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {paginatedTrainees.map((trainee) => (

                                <tr
                                    key={trainee.id}
                                    className="
                                        border-b
                                        border-slate-100
                                        transition
                                        hover:bg-slate-50

                                        dark:border-slate-800
                                        dark:hover:bg-slate-800/70
                                    "
                                >

                                    <td className="px-4 py-4">

                                        <input
                                            type="checkbox"
                                            className="rounded"
                                        />

                                    </td>


                                    {/* TRAINEE ID */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            font-medium
                                            text-[#456a96]

                                            dark:text-blue-400
                                        "
                                    >
                                        {trainee.traineeId}
                                    </td>


                                    {/* NAME */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            font-semibold
                                            text-[#12284a]

                                            dark:text-white
                                        "
                                    >

                                        {trainee.firstName}{' '}

                                        {trainee.middleName
                                            ? `${trainee.middleName} `
                                            : ''
                                        }

                                        {trainee.lastName}

                                    </td>


                                    {/* BATCH */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            text-[#16345f]

                                            dark:text-slate-300
                                        "
                                    >
                                        {trainee.batch}
                                    </td>


                                    {/* COURSE */}

                                    <td
                                        className="
                                            max-w-[180px]
                                            truncate
                                            px-4
                                            py-4
                                            text-sm
                                            text-[#16345f]

                                            dark:text-slate-300
                                        "
                                    >
                                        {trainee.course}
                                    </td>


                                    {/* CONTACT */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            text-[#16345f]

                                            dark:text-slate-300
                                        "
                                    >
                                        {trainee.contact}
                                    </td>


                                    {/* STATUS */}

                                    <td className="px-4 py-4">
                                        {statusBadge(trainee.status)}
                                    </td>


                                    {/* ACTIONS */}

                                    <td className="px-4 py-4">

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-center
                                                gap-3
                                            "
                                        >

                                            {/* VIEW */}

                                            <button
                                                type="button"
                                                title="View"
                                                className="
                                                    text-slate-500
                                                    transition
                                                    hover:text-[#10285d]

                                                    dark:text-slate-400
                                                    dark:hover:text-blue-400
                                                "
                                                onClick={() =>
                                                    alert(
                                                        `Viewing ${trainee.firstName} ${trainee.lastName}`
                                                    )
                                                }
                                            >
                                                👁
                                            </button>


                                            {/* EDIT */}

                                            <button
                                                type="button"
                                                title="Edit"
                                                className="
                                                    text-orange-500
                                                    transition
                                                    hover:text-orange-700
                                                "
                                                onClick={() =>
                                                    editTrainee(trainee)
                                                }
                                            >
                                                ✏️
                                            </button>


                                            {/* DELETE */}

                                            <button
                                                type="button"
                                                title="Delete"
                                                className="
                                                    text-slate-400
                                                    transition
                                                    hover:text-red-500

                                                    dark:text-slate-500
                                                    dark:hover:text-red-400
                                                "
                                                onClick={() =>
                                                    deleteTrainee(trainee.id)
                                                }
                                            >
                                                🗑
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}


                            {/* EMPTY */}

                            {paginatedTrainees.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="
                                            px-6
                                            py-16
                                            text-center
                                            text-slate-400

                                            dark:text-slate-500
                                        "
                                    >

                                        <div className="text-4xl">
                                            📋
                                        </div>

                                        <p
                                            className="
                                                mt-3
                                                font-semibold
                                                text-slate-600
                                                dark:text-slate-300
                                            "
                                        >
                                            No trainees found
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-slate-400
                                                dark:text-slate-500
                                            "
                                        >
                                            Try changing your search or filters.
                                        </p>

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* =====================================================
                    PAGINATION
                ====================================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-200
                        px-4
                        py-3

                        dark:border-slate-700
                    "
                >

                    <span
                        className="
                            text-sm
                            text-[#66809f]
                            dark:text-slate-400
                        "
                    >

                        Page {currentPage} of {totalPages || 1}

                    </span>


                    <div className="flex items-center gap-2">

                        {/* PREVIOUS */}

                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage((page) =>
                                    Math.max(page - 1, 1)
                                )
                            }
                            className="
                                rounded-lg
                                border
                                border-slate-200
                                px-3
                                py-2
                                text-sm
                                text-[#16345f]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                                hover:bg-slate-50

                                dark:border-slate-700
                                dark:text-slate-300
                                dark:hover:bg-slate-800
                            "
                        >
                            ‹
                        </button>


                        {/* PAGE NUMBERS */}

                        {Array.from(
                            { length: totalPages || 1 },
                            (_, index) => index + 1
                        ).map((page) => (

                            <button
                                key={page}
                                type="button"
                                onClick={() =>
                                    setCurrentPage(page)
                                }
                                className={`
                                    rounded-lg
                                    px-3
                                    py-2
                                    text-sm
                                    font-semibold

                                    ${currentPage === page
                                        ? 'bg-[#10285d] text-white'
                                        : `
                                            border
                                            border-slate-200
                                            text-[#16345f]
                                            hover:bg-slate-50

                                            dark:border-slate-700
                                            dark:text-slate-300
                                            dark:hover:bg-slate-800
                                        `
                                    }
                                `}
                            >
                                {page}
                            </button>

                        ))}


                        {/* NEXT */}

                        <button
                            type="button"
                            disabled={
                                currentPage === totalPages ||
                                totalPages === 0
                            }
                            onClick={() =>
                                setCurrentPage((page) =>
                                    Math.min(
                                        page + 1,
                                        totalPages
                                    )
                                )
                            }
                            className="
                                rounded-lg
                                border
                                border-slate-200
                                px-3
                                py-2
                                text-sm
                                text-[#16345f]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                                hover:bg-slate-50

                                dark:border-slate-700
                                dark:text-slate-300
                                dark:hover:bg-slate-800
                            "
                        >
                            ›
                        </button>

                    </div>

                </div>

            </div>

        </div>


        {/* =====================================================
            ADD / EDIT TRAINEE DRAWER
        ====================================================== */}

        {showModal && (

            <div className="fixed inset-0 z-[100]">

                {/* BACKDROP */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-slate-900/50
                        backdrop-blur-[2px]

                        dark:bg-black/70
                    "
                    onClick={closeModal}
                />


                {/* DRAWER */}

                <div
                    className="
                        absolute
                        right-0
                        top-0
                        flex
                        h-full
                        w-full
                        max-w-[560px]
                        flex-col
                        bg-white
                        shadow-2xl

                        dark:bg-slate-900
                    "
                >


                    {/* DRAWER HEADER */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            bg-[#10285d]
                            px-6
                            py-5
                            text-white
                        "
                    >

                        <div className="flex items-center gap-3">

                            <span className="text-xl">
                                📋
                            </span>

                            <h2 className="text-lg font-bold">

                                {editingId
                                    ? 'Edit Trainee'
                                    : 'Add New Trainee'
                                }

                            </h2>

                        </div>


                        <button
                            type="button"
                            onClick={closeModal}
                            className="
                                text-xl
                                text-white/80
                                transition
                                hover:text-white
                            "
                        >
                            ✕
                        </button>

                    </div>


                    {/* FORM */}

                    <div
                        className="
                            flex-1
                            overflow-y-auto
                            px-6
                            py-5

                            dark:bg-slate-900
                        "
                    >


                        {/* ======================================
                            SECTION 1
                        ======================================= */}

                        <FormSection
                            number="1"
                            title="PERSONAL INFORMATION"
                        >

                            <div className="grid grid-cols-2 gap-4">

                                <Input
                                    label="First Name"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Juan"
                                />

                                <Input
                                    label="Middle Name"
                                    name="middleName"
                                    value={form.middleName}
                                    onChange={handleChange}
                                    placeholder="A."
                                />

                                <Input
                                    label="Last Name"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Dela Cruz"
                                />

                                <Input
                                    label="Date of Birth"
                                    name="birthDate"
                                    type="date"
                                    value={form.birthDate}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* GENDER */}

                            <div className="mt-4">

                                <label
                                    className="
                                        form-label
                                        text-slate-700
                                        dark:text-slate-300
                                    "
                                >
                                    Gender <Required />
                                </label>

                                <div className="flex gap-6">

                                    <label
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-slate-600

                                            dark:text-slate-300
                                        "
                                    >

                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={
                                                form.gender === 'Male'
                                            }
                                            onChange={handleChange}
                                        />

                                        Male

                                    </label>


                                    <label
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-slate-600

                                            dark:text-slate-300
                                        "
                                    >

                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={
                                                form.gender === 'Female'
                                            }
                                            onChange={handleChange}
                                        />

                                        Female

                                    </label>

                                </div>

                            </div>


                            <div className="mt-4 grid grid-cols-2 gap-4">

                                <Select
                                    label="Civil Status"
                                    name="civilStatus"
                                    value={form.civilStatus}
                                    onChange={handleChange}
                                    options={[
                                        'Single',
                                        'Married',
                                        'Widowed',
                                        'Separated',
                                    ]}
                                />

                                <Input
                                    label="Contact Number"
                                    name="contact"
                                    value={form.contact}
                                    onChange={handleChange}
                                    required
                                    placeholder="09XXXXXXXXX"
                                />

                            </div>


                            <div className="mt-4">

                                <Input
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                />

                            </div>


                            <div className="mt-4">

                                <Input
                                    label="Complete Address"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="Purok, Street, Barangay..."
                                />

                            </div>


                            <div className="mt-4 grid grid-cols-2 gap-4">

                                <Input
                                    label="Barangay"
                                    name="barangay"
                                    value={form.barangay}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tangkalan"
                                />

                                <Input
                                    label="Municipality"
                                    name="municipality"
                                    value={form.municipality}
                                    onChange={handleChange}
                                    required
                                    placeholder="Mamburao"
                                />

                            </div>


                            <div className="mt-4">

                                <Input
                                    label="Province"
                                    name="province"
                                    value={form.province}
                                    onChange={handleChange}
                                    required
                                    placeholder="Occidental Mindoro"
                                />

                            </div>

                        </FormSection>


                        {/* ======================================
                            SECTION 2
                        ======================================= */}

                        <FormSection
                            number="2"
                            title="TRAINING DETAILS"
                        >

                            <Input
                                label="TESDA Registration No."
                                name="tesdaRegistration"
                                value={form.tesdaRegistration}
                                onChange={handleChange}
                                placeholder="TESDA-2024-XXXX"
                            />


                            <div className="mt-4 grid grid-cols-2 gap-4">

                                <Select
                                    label="Batch Assignment"
                                    name="batch"
                                    value={form.batch}
                                    onChange={handleChange}
                                    required
                                    options={[
                                        'Batch 1',
                                        'Batch 2',
                                        'Batch 3',
                                        'Batch 4',
                                        'Batch 5',
                                    ]}
                                    placeholder="— Select Batch —"
                                />


                                <Select
                                    label="Course / Qualification"
                                    name="course"
                                    value={form.course}
                                    onChange={handleChange}
                                    required
                                    options={[
                                        'Electrical Installation',
                                        'Cookery NC II',
                                        'Welding NC II',
                                        'Housekeeping NC II',
                                        'Plumbing NC II',
                                    ]}
                                    placeholder="— Select Course —"
                                />

                            </div>


                            <div className="mt-4 grid grid-cols-2 gap-4">

                                <Input
                                    label="Training Start Date"
                                    name="trainingStartDate"
                                    type="date"
                                    value={form.trainingStartDate}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Training End Date"
                                    name="trainingEndDate"
                                    type="date"
                                    value={form.trainingEndDate}
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="mt-4">

                                <Select
                                    label="Trainer Assigned"
                                    name="trainer"
                                    value={form.trainer}
                                    onChange={handleChange}
                                    options={[
                                        'Instructor Reyes',
                                        'Instructor Santos',
                                        'Instructor Cruz',
                                        'Instructor Garcia',
                                    ]}
                                    placeholder="— Select Trainer —"
                                />

                            </div>

                        </FormSection>

                    </div>


                    {/* FOOTER */}

                    <div
                        className="
                            flex
                            items-center
                            justify-end
                            gap-3
                            border-t
                            border-slate-200
                            bg-white
                            px-6
                            py-4

                            dark:border-slate-700
                            dark:bg-slate-900
                        "
                    >

                        <button
                            type="button"
                            onClick={closeModal}
                            className="
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-slate-600
                                hover:bg-slate-50

                                dark:border-slate-700
                                dark:bg-slate-800
                                dark:text-slate-300
                                dark:hover:bg-slate-700
                            "
                        >
                            Cancel
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                saveTrainee('Draft')
                            }
                            className="
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-[#16345f]
                                shadow-sm
                                hover:bg-slate-50

                                dark:border-slate-700
                                dark:bg-slate-800
                                dark:text-slate-200
                                dark:hover:bg-slate-700
                            "
                        >
                            💾 Save as Draft
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                saveTrainee('Submitted')
                            }
                            className="
                                rounded-lg
                                bg-[#10285d]
                                px-5
                                py-2.5
                                text-sm
                                font-bold
                                text-white
                                shadow-md
                                hover:bg-[#173778]
                            "
                        >
                            📤 Submit for Review
                        </button>

                    </div>

                </div>

            </div>

        )}

    </>
);
}


/*
|--------------------------------------------------------------------------
| FORM COMPONENTS
|--------------------------------------------------------------------------
*/

function Required() {
    return (
        <span className="text-red-500 dark:text-red-400">
            *
        </span>
    );
}


function FormSection({ number, title, children }) {

    return (

        <section className="mb-7">

            <div
                className="
                    mb-4
                    flex
                    items-center
                    gap-2
                    border-b
                    border-slate-200
                    pb-3
                    dark:border-slate-700
                "
            >

                <span className="text-sm">
                    {number === '1' ? '👤' : '🎓'}
                </span>

                <h3
                    className="
                        text-xs
                        font-bold
                        tracking-wide
                        text-[#17345f]
                        dark:text-slate-200
                    "
                >
                    SECTION {number} — {title}
                </h3>

            </div>

            {children}

        </section>
    );
}


function Input({
    label,
    name,
    value,
    onChange,
    type = 'text',
    required = false,
    placeholder = '',
}) {

    return (

        <div>

            <label
                className="
                    form-label
                    text-slate-700
                    dark:text-slate-300
                "
            >

                {label}{' '}

                {required && <Required />}

            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-[#f8fafc]
                    px-3
                    py-2.5
                    text-sm
                    text-slate-700
                    placeholder:text-slate-400
                    outline-none
                    transition

                    focus:border-[#10285d]
                    focus:ring-2
                    focus:ring-[#10285d]/10

                    dark:border-slate-600
                    dark:bg-slate-800
                    dark:text-slate-200
                    dark:placeholder:text-slate-500

                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/20
                "
            />

        </div>
    );
}


function Select({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
    placeholder,
}) {

    return (

        <div>

            <label
                className="
                    form-label
                    text-slate-700
                    dark:text-slate-300
                "
            >

                {label}{' '}

                {required && <Required />}

            </label>

            <select
                name={name}
                value={value}
                onChange={onChange}
                className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-[#f8fafc]
                    px-3
                    py-2.5
                    text-sm
                    text-slate-700
                    outline-none
                    transition

                    focus:border-[#10285d]
                    focus:ring-2
                    focus:ring-[#10285d]/10

                    dark:border-slate-600
                    dark:bg-slate-800
                    dark:text-slate-200

                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/20
                "
            >

                {placeholder && (
                    <option
                        value=""
                        className="
                            bg-white
                            text-slate-700
                            dark:bg-slate-800
                            dark:text-slate-300
                        "
                    >
                        {placeholder}
                    </option>
                )}

                {options.map((option) => (

                    <option
                        key={option}
                        value={option}
                        className="
                            bg-white
                            text-slate-700
                            dark:bg-slate-800
                            dark:text-slate-200
                        "
                    >
                        {option}
                    </option>

                ))}

            </select>

        </div>
    );
}