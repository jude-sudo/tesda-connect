import { useState } from 'react';

export default function ProfilesRecords() {

    const [activeTab, setActiveTab] = useState('trainees');
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [profileTab, setProfileTab] = useState('personal');

    const trainees = [
        {
            initials: 'JD',
            name: 'Juan Dela Cruz',
            fullName: 'Juan A. Dela Cruz',
            batch: 'Batch 1',
            program: 'Electrical Installation and Maintenance NC II',
            status: 'Verified',
            documents: '6/6',
            percentage: 100,

            personal: {
                firstName: 'Juan',
                middleName: 'A.',
                lastName: 'Dela Cruz',
                birthDate: 'Mar 12, 2000',
                gender: 'Male',
                civilStatus: 'Single',
                contact: '09171234567',
                email: 'juan@email.com',
                address: 'Brgy. Tangkalan, Mamburao',
                barangay: 'Tangkalan',
                municipality: 'Mamburao',
                province: 'Occidental Mindoro',
            },

            training: {
                tesdaRegNo: 'TESDA-2024-0001',
                batch: 'Batch 1',
                course: 'Electrical Installation and Maintenance NC II',
                startDate: 'Jan 15, 2024',
                endDate: 'Apr 15, 2024',
                trainer: 'Instructor Reyes',
                status: 'Verified',
            },

            documentsList: [
                {
                    name: 'Birth Certificate',
                    uploaded: true,
                },
                {
                    name: 'Valid ID',
                    uploaded: true,
                },
                {
                    name: 'Barangay Clearance',
                    uploaded: true,
                },
                {
                    name: 'Medical Certificate',
                    uploaded: true,
                },
                {
                    name: '2x2 ID Photo',
                    uploaded: true,
                },
                {
                    name: 'TESDA Registration Form',
                    uploaded: true,
                },
            ],

            activity: [
                {
                    text: 'Record created by Administrator',
                    date: 'Jan 15, 2025',
                },
                {
                    text: 'Document added: Birth Certificate',
                    date: 'Jan 15, 2025',
                },
                {
                    text: 'Profile updated by Registrar',
                    date: 'Feb 1, 2025',
                },
                {
                    text: 'Status changed to Verified',
                    date: 'Feb 1, 2025',
                },
            ],
        },

        {
    initials: 'MS',
    name: 'Maria Santos',
    fullName: 'Maria C. Santos',
    batch: 'Batch 1',
    program: 'Cookery NC II',
    status: 'Incomplete',
    documents: '4/6',
    percentage: 67,

    personal: {
        firstName: 'Maria',
        middleName: 'C.',
        lastName: 'Santos',
        birthDate: 'Jul 22, 2001',
        gender: 'Female',
        civilStatus: 'Single',
        contact: '09281234567',
        email: 'maria@email.com',
        address: 'Brgy. Tangkalan, Mamburao',
        barangay: 'Tangkalan',
        municipality: 'Mamburao',
        province: 'Occidental Mindoro',
    },

    training: {
        tesdaRegNo: 'TESDA-2024-0002',
        batch: 'Batch 1',
        course: 'Cookery NC II',
        startDate: 'Jan 15, 2024',
        endDate: 'Apr 15, 2024',
        trainer: 'Instructor Santos',
        status: 'Incomplete',
    },

    documentsList: [
        {
            name: 'Birth Certificate',
            uploaded: true,
        },
        {
            name: 'Valid ID',
            uploaded: true,
        },
        {
            name: 'Barangay Clearance',
            uploaded: true,
        },
        {
            name: 'Medical Certificate',
            uploaded: false,
        },
        {
            name: '2x2 ID Photo',
            uploaded: false,
        },
        {
            name: 'TESDA Registration Form',
            uploaded: true,
        },
    ],

    activity: [
        {
            text: 'Record created by Administrator',
            date: 'Jan 15, 2025',
        },
        {
            text: 'Document added: Birth Certificate',
            date: 'Jan 15, 2025',
        },
        {
            text: 'Profile updated by Registrar',
            date: 'Jan 16, 2025',
        },
        {
            text: 'Status changed to Incomplete',
            date: 'Jan 16, 2025',
        },
    ],
},

       {
    initials: 'PR',
    name: 'Pedro Reyes',
    fullName: 'Pedro R. Reyes',
    batch: 'Batch 2',
    program: 'Welding NC II',
    status: 'Draft',
    documents: '2/6',
    percentage: 33,

    personal: {
        firstName: 'Pedro',
        middleName: 'R.',
        lastName: 'Reyes',
        birthDate: 'Nov 8, 1999',
        gender: 'Male',
        civilStatus: 'Single',
        contact: '09192345678',
        email: 'pedro@email.com',
        address: 'Brgy. Tangkalan, Mamburao',
        barangay: 'Tangkalan',
        municipality: 'Mamburao',
        province: 'Occidental Mindoro',
    },

    training: {
        tesdaRegNo: 'TESDA-2024-0003',
        batch: 'Batch 2',
        course: 'Welding NC II',
        startDate: 'Feb 1, 2024',
        endDate: 'May 1, 2024',
        trainer: 'Instructor Reyes',
        status: 'Draft',
    },

    documentsList: [
        {
            name: 'Birth Certificate',
            uploaded: true,
        },
        {
            name: 'Valid ID',
            uploaded: true,
        },
        {
            name: 'Barangay Clearance',
            uploaded: false,
        },
        {
            name: 'Medical Certificate',
            uploaded: false,
        },
        {
            name: '2x2 ID Photo',
            uploaded: false,
        },
        {
            name: 'TESDA Registration Form',
            uploaded: false,
        },
    ],

    activity: [
        {
            text: 'Record created by Administrator',
            date: 'Feb 1, 2025',
        },
        {
            text: 'Document added: Birth Certificate',
            date: 'Feb 1, 2025',
        },
        {
            text: 'Document added: Valid ID',
            date: 'Feb 1, 2025',
        },
        {
            text: 'Profile saved as Draft',
            date: 'Feb 1, 2025',
        },
    ],
},
    ];

    const instructors = [
        {
            initials: 'RR',
            name: 'Roberto Reyes',
            specialization: 'Electrical Technology',
            status: 'Active',
            courses: [
                'Electrical Installation and Maintenance NC II',
                'Plumbing NC II',
            ],
        },
        {
            initials: 'MC',
            name: 'Maria Cruz',
            specialization: 'Food Technology',
            status: 'Active',
            courses: [
                'Cookery NC II',
                'Bread and Pastry Production NC II',
            ],
        },
        {
            initials: 'PS',
            name: 'Pedro Santos',
            specialization: 'Welding Technology',
            status: 'Active',
            courses: [
                'Shielded Metal Arc Welding NC II',
                'Gas Metal Arc Welding NC II',
            ],
        },
    ];

    const openProfile = (trainee) => {
        setSelectedTrainee(trainee);
        setProfileTab('personal');
    };

    const closeProfile = () => {
        setSelectedTrainee(null);
    };

    

    return (
    <div className="text-slate-800 dark:text-slate-200">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mb-7">

            <h1 className="text-3xl font-bold text-[#12284a] dark:text-white">
                Profiles & Records
            </h1>

            <p className="mt-1 text-base text-[#66809f] dark:text-slate-400">
                Manage trainee and instructor profiles
            </p>

        </div>


        {/* =========================
            TABS
        ========================= */}
        <div className="mb-7 flex gap-2 border-b border-slate-200 dark:border-slate-700">

            <button
                onClick={() => setActiveTab('trainees')}
                className={`px-5 py-3 text-sm font-bold transition ${
                    activeTab === 'trainees'
                        ? 'border-b-2 border-[#10285d] text-[#10285d] dark:border-blue-400 dark:text-blue-400'
                        : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
                }`}
            >
                👤 Trainees
            </button>

            <button
                onClick={() => setActiveTab('instructors')}
                className={`px-5 py-3 text-sm font-bold transition ${
                    activeTab === 'instructors'
                        ? 'border-b-2 border-[#10285d] text-[#10285d] dark:border-blue-400 dark:text-blue-400'
                        : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
                }`}
            >
                🏫 Instructors
            </button>

        </div>


        {/* =========================
            TRAINEES
        ========================= */}
        {activeTab === 'trainees' && (

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                {trainees.map((trainee, index) => (

                    <div
                        key={index}
                        className="
                            rounded-2xl
                            border border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                            transition
                            hover:-translate-y-1
                            hover:shadow-md
                            dark:border-slate-700
                            dark:bg-slate-800
                            dark:shadow-black/20
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10285d] text-lg font-bold text-white">
                                {trainee.initials}
                            </div>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-bold ${
                                    trainee.status === 'Verified'
                                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400'
                                        : trainee.status === 'Incomplete'
                                        ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400'
                                        : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                                }`}
                            >
                                {trainee.status}
                            </span>

                        </div>


                        <div className="mt-5">

                            <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                                {trainee.name}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {trainee.batch} · {trainee.program}
                            </p>

                        </div>


                        {/* DOCUMENT PROGRESS */}
                        <div className="mt-6">

                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                                    Documents
                                </span>

                                <span className="text-sm font-bold text-[#12284a] dark:text-slate-200">
                                    {trainee.documents} ({trainee.percentage}%)
                                </span>

                            </div>

                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">

                                <div
                                    className={`h-full rounded-full ${
                                        trainee.percentage === 100
                                            ? 'bg-emerald-500'
                                            : trainee.percentage >= 50
                                            ? 'bg-amber-500'
                                            : 'bg-red-400'
                                    }`}
                                    style={{
                                        width: `${trainee.percentage}%`,
                                    }}
                                />

                            </div>

                        </div>


                        {/* VIEW PROFILE */}
                        <button
                            onClick={() => openProfile(trainee)}
                            className="
                                mt-6
                                w-full
                                rounded-xl
                                border border-slate-200
                                bg-white
                                py-2.5
                                text-sm
                                font-bold
                                text-[#10285d]
                                transition
                                hover:bg-slate-50
                                dark:border-slate-600
                                dark:bg-slate-800
                                dark:text-blue-400
                                dark:hover:bg-slate-700
                            "
                        >
                            View Profile
                        </button>

                    </div>

                ))}

            </div>

        )}


        {/* =========================
            INSTRUCTORS
        ========================= */}
        {activeTab === 'instructors' && (

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                {instructors.map((instructor, index) => (

                    <div
                        key={index}
                        className="
                            rounded-2xl
                            border border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                            transition
                            hover:-translate-y-1
                            hover:shadow-md
                            dark:border-slate-700
                            dark:bg-slate-800
                            dark:shadow-black/20
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10285d] text-lg font-bold text-white">
                                {instructor.initials}
                            </div>

                            <span className="
                                rounded-full
                                bg-emerald-50
                                px-3
                                py-1
                                text-xs
                                font-bold
                                text-emerald-600
                                dark:bg-emerald-500/15
                                dark:text-emerald-400
                            ">
                                {instructor.status}
                            </span>

                        </div>

                        <div className="mt-5">

                            <h2 className="text-xl font-bold text-[#12284a] dark:text-white">
                                {instructor.name}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {instructor.specialization}
                            </p>

                        </div>

                        <div className="mt-6">

                            <h3 className="text-sm font-bold text-[#12284a] dark:text-slate-200">
                                Assigned Courses:
                            </h3>

                            <ul className="mt-3 space-y-2">

                                {instructor.courses.map(
                                    (course, courseIndex) => (

                                        <li
                                            key={courseIndex}
                                            className="
                                                flex
                                                items-start
                                                gap-2
                                                text-sm
                                                leading-5
                                                text-slate-600
                                                dark:text-slate-300
                                            "
                                        >

                                            <span className="
                                                mt-2
                                                h-1.5
                                                w-1.5
                                                shrink-0
                                                rounded-full
                                                bg-[#10285d]
                                                dark:bg-blue-400
                                            " />

                                            <span>
                                                {course}
                                            </span>

                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                        <button
                            className="
                                mt-6
                                w-full
                                rounded-xl
                                border border-slate-200
                                bg-white
                                py-2.5
                                text-sm
                                font-bold
                                text-[#10285d]
                                transition
                                hover:bg-slate-50
                                dark:border-slate-600
                                dark:bg-slate-800
                                dark:text-blue-400
                                dark:hover:bg-slate-700
                            "
                        >
                            View Profile
                        </button>

                    </div>

                ))}

            </div>

        )}


        {/* ==================================================
            VIEW PROFILE MODAL
        ================================================== */}
        {selectedTrainee && (

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
                onClick={closeProfile}
            >

                <div
                    className="
                        flex
                        max-h-[92vh]
                        w-full
                        max-w-6xl
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        bg-white
                        shadow-2xl
                        dark:bg-slate-900
                    "
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* =========================
                        PROFILE HEADER
                    ========================= */}
                    <div className="
                        border-b
                        border-slate-200
                        bg-white
                        px-7
                        py-6
                        dark:border-slate-700
                        dark:bg-slate-900
                    ">

                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#10285d] text-xl font-bold text-white">
                                    {selectedTrainee.initials}
                                </div>

                                <div>

                                    <h2 className="text-2xl font-bold text-[#12284a] dark:text-white">
                                        {selectedTrainee.fullName}
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                                        {selectedTrainee.batch}
                                        {' · '}
                                        {selectedTrainee.program}
                                        {' · '}

                                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                                            {selectedTrainee.status}
                                        </span>

                                    </p>

                                </div>

                            </div>


                            <div className="flex gap-3">

                                <button
                                    className="
                                        rounded-xl
                                        border border-slate-200
                                        bg-white
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-bold
                                        text-[#10285d]
                                        transition
                                        hover:bg-slate-50
                                        dark:border-slate-600
                                        dark:bg-slate-800
                                        dark:text-blue-400
                                        dark:hover:bg-slate-700
                                    "
                                >
                                    ✏️ Edit
                                </button>

                                <button
                                    onClick={closeProfile}
                                    className="
                                        rounded-xl
                                        border border-slate-200
                                        bg-white
                                        px-5
                                        py-2.5
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
                                    ← Back
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        PROFILE TABS
                    ========================= */}
                    <div className="
                        overflow-x-auto
                        border-b
                        border-slate-200
                        px-7
                        dark:border-slate-700
                    ">

                        <div className="flex min-w-max gap-1">

                            <button
                                onClick={() => setProfileTab('personal')}
                                className={`px-5 py-4 text-sm font-bold ${
                                    profileTab === 'personal'
                                        ? 'border-b-2 border-[#10285d] text-[#10285d] dark:border-blue-400 dark:text-blue-400'
                                        : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
                                }`}
                            >
                                Personal Info
                            </button>

                            <button
                                onClick={() => setProfileTab('training')}
                                className={`px-5 py-4 text-sm font-bold ${
                                    profileTab === 'training'
                                        ? 'border-b-2 border-[#10285d] text-[#10285d] dark:border-blue-400 dark:text-blue-400'
                                        : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
                                }`}
                            >
                                Training Details
                            </button>

                            <button
                                onClick={() => setProfileTab('documents')}
                                className={`px-5 py-4 text-sm font-bold ${
                                    profileTab === 'documents'
                                        ? 'border-b-2 border-[#10285d] text-[#10285d] dark:border-blue-400 dark:text-blue-400'
                                        : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
                                }`}
                            >
                                Documents ({selectedTrainee.documents})
                            </button>

                            <button
                                onClick={() => setProfileTab('activity')}
                                className={`px-5 py-4 text-sm font-bold ${
                                    profileTab === 'activity'
                                        ? 'border-b-2 border-[#10285d] text-[#10285d] dark:border-blue-400 dark:text-blue-400'
                                        : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200'
                                }`}
                            >
                                Activity Log
                            </button>

                        </div>

                    </div>


                    {/* =========================
                        PROFILE CONTENT
                    ========================= */}
                    <div className="
                        flex-1
                        overflow-y-auto
                        bg-[#f8fafc]
                        p-7
                        dark:bg-slate-950
                    ">

                        {/* PERSONAL INFO */}
                        {profileTab === 'personal' && (

                            <div className="
                                rounded-2xl
                                border border-slate-200
                                bg-white
                                p-6
                                dark:border-slate-700
                                dark:bg-slate-900
                            ">

                                <h3 className="mb-6 text-lg font-bold text-[#12284a] dark:text-white">
                                    Personal Information
                                </h3>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                                    <InfoItem
                                        label="First Name"
                                        value={selectedTrainee.personal.firstName}
                                    />

                                    <InfoItem
                                        label="Middle Name"
                                        value={selectedTrainee.personal.middleName}
                                    />

                                    <InfoItem
                                        label="Last Name"
                                        value={selectedTrainee.personal.lastName}
                                    />

                                    <InfoItem
                                        label="Date of Birth"
                                        value={selectedTrainee.personal.birthDate}
                                    />

                                    <InfoItem
                                        label="Gender"
                                        value={selectedTrainee.personal.gender}
                                    />

                                    <InfoItem
                                        label="Civil Status"
                                        value={selectedTrainee.personal.civilStatus}
                                    />

                                    <InfoItem
                                        label="Contact No."
                                        value={selectedTrainee.personal.contact}
                                    />

                                    <InfoItem
                                        label="Email"
                                        value={selectedTrainee.personal.email}
                                    />

                                    <InfoItem
                                        label="Address"
                                        value={selectedTrainee.personal.address}
                                    />

                                    <InfoItem
                                        label="Barangay"
                                        value={selectedTrainee.personal.barangay}
                                    />

                                    <InfoItem
                                        label="Municipality"
                                        value={selectedTrainee.personal.municipality}
                                    />

                                    <InfoItem
                                        label="Province"
                                        value={selectedTrainee.personal.province}
                                    />

                                </div>

                            </div>

                        )}


                        {/* TRAINING DETAILS */}
                        {profileTab === 'training' && (

                            <div className="
                                rounded-2xl
                                border border-slate-200
                                bg-white
                                p-6
                                dark:border-slate-700
                                dark:bg-slate-900
                            ">

                                <h3 className="mb-6 text-lg font-bold text-[#12284a] dark:text-white">
                                    Training Details
                                </h3>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    <InfoItem
                                        label="TESDA Reg. No."
                                        value={selectedTrainee.training.tesdaRegNo}
                                    />

                                    <InfoItem
                                        label="Batch"
                                        value={selectedTrainee.training.batch}
                                    />

                                    <InfoItem
                                        label="Course / Qualification"
                                        value={selectedTrainee.training.course}
                                    />

                                    <InfoItem
                                        label="Training Start Date"
                                        value={selectedTrainee.training.startDate}
                                    />

                                    <InfoItem
                                        label="Training End Date"
                                        value={selectedTrainee.training.endDate}
                                    />

                                    <InfoItem
                                        label="Trainer Assigned"
                                        value={selectedTrainee.training.trainer}
                                    />

                                    <InfoItem
                                        label="Status"
                                        value={selectedTrainee.training.status}
                                    />

                                </div>

                            </div>

                        )}


                        {/* DOCUMENTS */}
                        {profileTab === 'documents' && (

                            <div className="
                                rounded-2xl
                                border border-slate-200
                                bg-white
                                p-6
                                dark:border-slate-700
                                dark:bg-slate-900
                            ">

                                <div className="mb-6">

                                    <h3 className="text-lg font-bold text-[#12284a] dark:text-white">
                                        Documents
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                                        Document Completeness:{' '}

                                        <strong
                                            className={
                                                selectedTrainee.percentage === 100
                                                    ? 'text-emerald-600 dark:text-emerald-400'
                                                    : 'text-amber-600 dark:text-amber-400'
                                            }
                                        >
                                            {selectedTrainee.percentage}%
                                        </strong>

                                        {' '}({selectedTrainee.documents})

                                    </p>

                                </div>


                                {/* PROGRESS BAR */}
                                <div className="mb-6">

                                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">

                                        <div
                                            className={`h-full rounded-full transition-all ${
                                                selectedTrainee.percentage === 100
                                                    ? 'bg-emerald-500'
                                                    : selectedTrainee.percentage >= 50
                                                    ? 'bg-amber-500'
                                                    : 'bg-red-400'
                                            }`}
                                            style={{
                                                width: `${selectedTrainee.percentage}%`,
                                            }}
                                        />

                                    </div>

                                </div>


                                {/* DOCUMENT LIST */}
                                <div className="space-y-3">

                                    {selectedTrainee.documentsList.map(
                                        (document, index) => (

                                            <div
                                                key={index}
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    rounded-xl
                                                    border border-slate-200
                                                    p-4
                                                    dark:border-slate-700
                                                    dark:bg-slate-800
                                                "
                                            >

                                                <div className="flex items-center gap-3">

                                                    <div
                                                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                                            document.uploaded
                                                                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400'
                                                                : 'bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-400'
                                                        }`}
                                                    >
                                                        {document.uploaded ? '✓' : '📄'}
                                                    </div>

                                                    <div>

                                                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                            {document.name}
                                                        </div>

                                                        <div className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                                                            {document.uploaded
                                                                ? 'Uploaded'
                                                                : 'Missing document'}
                                                        </div>

                                                    </div>

                                                </div>


                                                <button
                                                    className={`text-sm font-bold ${
                                                        document.uploaded
                                                            ? 'text-[#10285d] dark:text-blue-400'
                                                            : 'text-orange-500 dark:text-orange-400'
                                                    } hover:underline`}
                                                >
                                                    {document.uploaded
                                                        ? 'View'
                                                        : 'Upload'}
                                                </button>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        )}


                        {/* ACTIVITY */}
                        {profileTab === 'activity' && (

                            <div className="
                                rounded-2xl
                                border border-slate-200
                                bg-white
                                p-6
                                dark:border-slate-700
                                dark:bg-slate-900
                            ">

                                <h3 className="mb-6 text-lg font-bold text-[#12284a] dark:text-white">
                                    Activity Log
                                </h3>

                                <div className="space-y-6">

                                    {selectedTrainee.activity.map(
                                        (item, index) => (

                                            <div
                                                key={index}
                                                className="flex gap-4"
                                            >

                                                <div className="relative flex flex-col items-center">

                                                    <div className="h-3 w-3 rounded-full bg-[#10285d] dark:bg-blue-400" />

                                                    {index !== selectedTrainee.activity.length - 1 && (
                                                        <div className="absolute top-3 h-full w-px bg-slate-200 dark:bg-slate-700" />
                                                    )}

                                                </div>

                                                <div className="pb-2">

                                                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                        {item.text}
                                                    </p>

                                                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                                        {item.date}
                                                    </p>

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        )}

    </div>
);


/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({ label, value }) {

    return (
        <div>

            <div className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-slate-400
                dark:text-slate-500
            ">
                {label}
            </div>

            <div className="
                mt-1
                rounded-lg
                bg-slate-50
                px-3
                py-2.5
                text-sm
                font-semibold
                text-slate-700
                dark:bg-slate-800
                dark:text-slate-200
            ">
                {value}
            </div>

        </div>
    );
}
}