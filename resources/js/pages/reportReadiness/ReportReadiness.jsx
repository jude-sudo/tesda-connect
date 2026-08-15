import { useMemo, useState } from 'react';

export default function ReportReadiness() {

    const [expandedBatch, setExpandedBatch] = useState(null);

const toggleBatch = (batch) => {
    setExpandedBatch(
        expandedBatch === batch ? null : batch
    );
};

 
    const [generated, setGenerated] = useState(false);


 
 const batches = [
    {
        batch: 'Batch 1',
        total: 25,
        complete: 24,
        incomplete: 1,
        missingTrainees: [
            {
                name: 'Maria Santos',
                missing: 'Medical Cert, 2x2 Photo',
                completeness: 67,
            },
        ],
    },

    {
        batch: 'Batch 2',
        total: 25,
        complete: 21,
        incomplete: 4,
        missingTrainees: [
            {
                name: 'Pedro Reyes',
                missing:
                    'Valid ID, Brgy. Clearance, Medical Cert, TESDA Form',
                completeness: 33,
            },
        ],
    },

    {
        batch: 'Batch 3',
        total: 25,
        complete: 18,
        incomplete: 7,
        missingTrainees: [
            {
                name: 'Carlo Manalo',
                missing: 'TESDA Form',
                completeness: 83,
            },
        ],
    },

    {
        batch: 'Batch 4',
        total: 25,
        complete: 15,
        incomplete: 10,
        missingTrainees: [
            {
                name: 'Miguel Torres',
                missing:
                    'Birth Cert, Valid ID, Medical Cert, 2x2 Photo, TESDA Form',
                completeness: 17,
            },
            {
                name: 'Liza Ramos',
                missing:
                    'Brgy. Clearance, Medical Cert',
                completeness: 67,
            },
        ],
    },

    {
        batch: 'Batch 5',
        total: 25,
        complete: 20,
        incomplete: 5,
        missingTrainees: [
            {
                name: 'Josephine Bautista',
                missing: '2x2 Photo, TESDA Form',
                completeness: 67,
            },
        ],
    },

    {
        batch: 'Batch 6',
        total: 23,
        complete: 16,
        incomplete: 7,
        missingTrainees: [
            {
                name: 'Arnaldo Garcia',
                missing: 'Medical Cert',
                completeness: 83,
            },
            {
                name: 'Corazon Lim',
                missing:
                    'Birth Cert, Brgy. Clearance, Medical Cert, 2x2 Photo, TESDA Form',
                completeness: 17,
            },
        ],
    },
];

    const totals = useMemo(() => {

        const total = batches.reduce(
            (sum, batch) => sum + batch.total,
            0
        );

        const complete = batches.reduce(
            (sum, batch) => sum + batch.complete,
            0
        );

        const incomplete = batches.reduce(
            (sum, batch) => sum + batch.incomplete,
            0
        );

        const percentage = Math.round(
            (complete / total) * 100
        );

        return {
            total,
            complete,
            incomplete,
            percentage,
        };

    }, []);


    const getStatus = (percentage) => {

        if (percentage >= 80) {
            return {
                label: 'Ready',
                icon: '✅',
                className:
                    'bg-emerald-50 text-emerald-600',
            };
        }

        if (percentage >= 70) {
            return {
                label: 'Attention',
                icon: '⚠️',
                className:
                    'bg-amber-50 text-amber-600',
            };
        }

        return {
            label: 'Incomplete',
            icon: '🔴',
            className:
                'bg-red-50 text-red-600',
        };
    };


    const exportCSV = () => {

        const headers = [
            'Batch',
            'Total Trainees',
            'Complete',
            'Incomplete',
            'Completeness',
            'Status',
        ];

        const rows = batches.map((batch) => {

            const percentage = Math.round(
                (batch.complete / batch.total) * 100
            );

            const status = getStatus(percentage);

            return [
                batch.batch,
                batch.total,
                batch.complete,
                batch.incomplete,
                `${percentage}%`,
                status.label,
            ];
        });

        rows.push([
            'TOTAL',
            totals.total,
            totals.complete,
            totals.incomplete,
            `${totals.percentage}%`,
            '',
        ]);

        const csv = [
            headers,
            ...rows,
        ]
            .map((row) =>
                row
                    .map((value) =>
                        `"${String(value).replace(/"/g, '""')}"`
                    )
                    .join(',')
            )
            .join('\n');

        const blob = new Blob(
            [csv],
            {
                type: 'text/csv;charset=utf-8;',
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');

        link.href = url;
        link.download = 'training-completion-report.csv';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };


    const printReport = () => {

        window.print();

    };


    const generateReport = () => {

        setGenerated(true);

        setTimeout(() => {

            document
                .getElementById('report-preview')
                ?.scrollIntoView({
                    behavior: 'smooth',
                });

        }, 100);

    };


    return (
        <div className="space-y-7">

            {/* =========================================
                HEADER
            ========================================= */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-[#12284a]">
                        📊 Report Readiness
                    </h1>

                    <p className="mt-1 text-base text-[#66809f]">
                        Document completeness tracking and report
                        preparation support
                    </p>

                </div>


                <div className="flex flex-wrap gap-3">

                    <button
                        onClick={exportCSV}
                        className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#10285d] shadow-sm transition hover:bg-slate-50"
                    >
                        ⬇️ Export CSV
                    </button>

                    <button
                        onClick={printReport}
                        className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#10285d] shadow-sm transition hover:bg-slate-50"
                    >
                        🖨️ Print / PDF
                    </button>

                    <button
                        onClick={generateReport}
                        className="rounded-xl bg-[#10285d] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#173778]"
                    >
                        📊 Generate Report
                    </button>

                </div>

            </div>


            {/* =========================================
                SUMMARY CARDS
            ========================================= */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

                {/* COMPLETENESS */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-sm font-semibold text-slate-500">
                                Overall Document Completeness
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#12284a]">
                                {totals.percentage}%
                            </h2>

                        </div>

                        <div className="text-3xl">
                            📊
                        </div>

                    </div>


                    <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">

                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                            style={{
                                width: `${totals.percentage}%`,
                            }}
                        />

                    </div>

                    <p className="mt-2 text-xs text-slate-400">
                        {totals.complete} of {totals.total} trainees complete
                    </p>

                </div>


                {/* COMPLETE */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-sm font-semibold text-slate-500">
                                Trainees with Complete Records
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#12284a]">
                                {totals.complete}
                            </h2>

                            <p className="mt-2 text-sm font-semibold text-emerald-600">
                                ↑ 6 since last week
                            </p>

                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-2xl">
                            ✅
                        </div>

                    </div>

                </div>


                {/* INCOMPLETE */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-sm font-semibold text-slate-500">
                                Incomplete Records
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#12284a]">
                                {totals.incomplete}
                            </h2>

                            <p className="mt-2 text-sm font-semibold text-amber-600">
                                ↓ needs attention
                            </p>

                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-2xl">
                            ⚠️
                        </div>

                    </div>

                </div>


                {/* PREP TIME */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-sm font-semibold text-slate-500">
                                Est. Report Prep Time
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#12284a]">
                                ~1.8h
                            </h2>

                            <p className="mt-2 text-sm font-semibold text-emerald-600">
                                ✅ Within 2-hour target
                            </p>

                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
                            ⏱️
                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================
                BATCH BREAKDOWN
            ========================================= */}

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="border-b border-slate-200 px-6 py-5">

                    <h2 className="text-lg font-bold text-[#12284a]">
                        📦 Batch-by-Batch Breakdown
                    </h2>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-slate-50">

                            <tr className="text-xs uppercase tracking-wide text-slate-400">

                                <th className="px-6 py-4">
                                    Batch
                                </th>

                                <th className="px-6 py-4">
                                    Total Trainees
                                </th>

                                <th className="px-6 py-4">
                                    Complete
                                </th>

                                <th className="px-6 py-4">
                                    Incomplete
                                </th>

                                <th className="px-6 py-4">
                                    Completeness
                                </th>

                                <th className="px-6 py-4">
                                    Status
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-slate-100">

                            {batches.map((batch) => {

                                const percentage = Math.round(
                                    (batch.complete / batch.total) * 100
                                );

                                const status =
                                    getStatus(percentage);

                                return (
                                    <tr
                                        key={batch.batch}
                                        className="transition hover:bg-slate-50"
                                    >

                                        <td className="px-6 py-4">

                                            <button
                                                onClick={() =>
                                                    setExpandedBatch(
                                                        expandedBatch === batch.batch
                                                            ? null
                                                            : batch.batch
                                                    )
                                                }
                                                className="font-bold text-[#10285d] hover:underline"
                                            >
                                                {batch.batch}
                                            </button>

                                        </td>

                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {batch.total}
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-emerald-600">
                                            {batch.complete}
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-red-500">
                                            {batch.incomplete}
                                        </td>

                                        <td className="min-w-[180px] px-6 py-4">

                                            <div className="flex items-center gap-3">

                                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">

                                                    <div
                                                        className={`h-full rounded-full ${
                                                            percentage >= 80
                                                                ? 'bg-emerald-500'
                                                                : percentage >= 70
                                                                ? 'bg-amber-500'
                                                                : 'bg-red-500'
                                                        }`}
                                                        style={{
                                                            width: `${percentage}%`,
                                                        }}
                                                    />

                                                </div>

                                                <span className="text-sm font-bold text-[#12284a]">
                                                    {percentage}%
                                                </span>

                                            </div>

                                        </td>

                                        <td className="px-6 py-4">

                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${status.className}`}
                                            >
                                                {status.icon} {status.label}
                                            </span>

                                        </td>

                                    </tr>
                                );
                            })}

                        </tbody>

                    </table>

                </div>


                {/* MISSING DOCUMENTS */}

                {expandedBatch && (

                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">

                        <h3 className="text-sm font-bold text-[#12284a]">
                            📄 Missing Documents — {expandedBatch}
                        </h3>

                        <div className="mt-4 space-y-2">

                          {batches
    .find(
        (batch) =>
            batch.batch === expandedBatch
    )
    ?.missingTrainees?.map((trainee, index) => (
        <div
            key={index}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3"
        >
            <div className="font-semibold text-[#12284a]">
                {trainee.name}
            </div>

            <div className="mt-1 text-sm text-slate-600">
                Missing Documents:
                <span className="ml-1">
                    {trainee.missing}
                </span>
            </div>

            <div className="mt-2 text-sm font-bold text-amber-600">
                Completeness: {trainee.completeness}%
            </div>
        </div>
    ))}
                        </div>

                    </div>

                )}

            </div>



                    {/* ================================
    MISSING DOCUMENTS REPORT
================================ */}

<div className="mt-7 rounded-2xl border border-slate-200 bg-white shadow-sm">

    {/* HEADER */}
    <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-lg font-bold text-[#12284a]">
            📄 Missing Documents Report
        </h2>

        <p className="mt-1 text-sm text-slate-500">
            Click a batch to expand
        </p>

    </div>


    {/* BATCH LIST */}
    <div className="divide-y divide-slate-200">

        {batches.map((batch) => (

            <div key={batch.batch}>

                {/* BATCH HEADER */}
                <button
                    type="button"
                    onClick={() => toggleBatch(batch.batch)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-slate-50"
                >

                    <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-[#10285d]">
                            {batch.missingTrainees?.length ?? 0}
                        </div>

                        <div>

                            <div className="font-bold text-[#12284a]">
                                {batch.batch}
                            </div>

                            <div className="text-xs text-slate-400">
                                {batch.missingTrainees?.length ?? 0}{' '}
                                {(batch.missingTrainees?.length ?? 0) === 1
                                    ? 'trainee'
                                    : 'trainees'}
                            </div>

                        </div>

                    </div>


                    {/* ARROW */}
                    <span
                        className={`text-lg text-slate-400 transition-transform ${
                            expandedBatch === batch.batch
                                ? 'rotate-90'
                                : ''
                        }`}
                    >
                        ›
                    </span>

                </button>


                {/* EXPANDED CONTENT */}
                {expandedBatch === batch.batch && (

                    <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">

                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                            {/* TABLE HEADER */}
                            <div className="grid grid-cols-12 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">

                                <div className="col-span-4">
                                    Trainee
                                </div>

                                <div className="col-span-6">
                                    Missing Documents
                                </div>

                                <div className="col-span-2 text-right">
                                    Completeness
                                </div>

                            </div>


                            {/* TRAINEES */}
                            {batch.missingTrainees?.map(
                                (trainee, index) => (

                                    <div
                                        key={index}
                                        className="grid grid-cols-12 items-center gap-3 border-b border-slate-100 px-4 py-4 last:border-b-0"
                                    >

                                        {/* NAME */}
                                        <div className="col-span-4">

                                            <div className="font-semibold text-[#12284a]">
                                                {trainee.name}
                                            </div>

                                        </div>


                                        {/* MISSING DOCUMENTS */}
                                        <div className="col-span-6">

                                            <div className="text-sm text-slate-600">
                                                {trainee.missing}
                                            </div>

                                        </div>


                                        {/* COMPLETENESS */}
                                        <div className="col-span-2">

                                            <div className="flex items-center justify-end gap-3">

                                                <div className="hidden w-16 overflow-hidden rounded-full bg-slate-100 sm:block">

                                                    <div
                                                        className={`h-2 rounded-full ${
                                                            trainee.completeness >= 80
                                                                ? 'bg-emerald-500'
                                                                : trainee.completeness >= 50
                                                                ? 'bg-amber-500'
                                                                : 'bg-red-500'
                                                        }`}
                                                        style={{
                                                            width: `${trainee.completeness}%`,
                                                        }}
                                                    />

                                                </div>


                                                <span
                                                    className={`text-sm font-bold ${
                                                        trainee.completeness >= 80
                                                            ? 'text-emerald-600'
                                                            : trainee.completeness >= 50
                                                            ? 'text-amber-600'
                                                            : 'text-red-600'
                                                    }`}
                                                >
                                                    {trainee.completeness}%
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                )}

            </div>

        ))}

    </div>

</div>

 


            {/* =========================================
                REPORT PREVIEW
            ========================================= */}

            <div
                id="report-preview"
                className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >

                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                    <h2 className="text-lg font-bold text-[#12284a]">
                        📋 Report-Ready Summary Preview
                    </h2>

                    <button
                        onClick={printReport}
                        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#10285d] hover:bg-slate-50"
                    >
                        🖨️ Print Preview
                    </button>

                </div>


                <div className="p-8">

                    <div className="mx-auto max-w-4xl text-center">

                        <p className="text-sm font-semibold">
                            Republic of the Philippines
                        </p>

                        <p className="mt-1 text-lg font-bold">
                            TECHNICAL EDUCATION AND
                            SKILLS DEVELOPMENT AUTHORITY
                        </p>

                        <p className="mt-2 font-semibold">
                            Balli School of Technology &
                            Mamburao Integrated Farm
                        </p>

                        <p className="text-sm text-slate-500">
                            Brgy. Tangkalan, Mamburao,
                            Occidental Mindoro
                        </p>


                        <h3 className="mt-8 text-xl font-bold">
                            TRAINING COMPLETION REPORT —
                            SUMMARY
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Date Generated: August 15, 2026
                        </p>

                    </div>


                    <div className="mt-8 overflow-x-auto">

                        <table className="w-full border-collapse text-sm">

                            <thead>

                                <tr className="bg-slate-100">

                                    <th className="border border-slate-300 px-4 py-3 text-left">
                                        Batch
                                    </th>

                                    <th className="border border-slate-300 px-4 py-3">
                                        Total
                                    </th>

                                    <th className="border border-slate-300 px-4 py-3">
                                        Complete
                                    </th>

                                    <th className="border border-slate-300 px-4 py-3">
                                        Incomplete
                                    </th>

                                    <th className="border border-slate-300 px-4 py-3">
                                        Rate
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {batches.map((batch) => {

                                    const percentage =
                                        Math.round(
                                            (batch.complete /
                                                batch.total) *
                                                100
                                        );

                                    return (

                                        <tr key={batch.batch}>

                                            <td className="border border-slate-300 px-4 py-3 font-semibold">
                                                {batch.batch}
                                            </td>

                                            <td className="border border-slate-300 px-4 py-3 text-center">
                                                {batch.total}
                                            </td>

                                            <td className="border border-slate-300 px-4 py-3 text-center font-bold">
                                                {batch.complete}
                                            </td>

                                            <td className="border border-slate-300 px-4 py-3 text-center">
                                                {batch.incomplete}
                                            </td>

                                            <td className="border border-slate-300 px-4 py-3 text-center font-bold">
                                                {percentage}%
                                            </td>

                                        </tr>

                                    );
                                })}


                                <tr className="font-bold">

                                    <td className="border border-slate-300 px-4 py-3">
                                        TOTAL
                                    </td>

                                    <td className="border border-slate-300 px-4 py-3 text-center">
                                        {totals.total}
                                    </td>

                                    <td className="border border-slate-300 px-4 py-3 text-center">
                                        {totals.complete}
                                    </td>

                                    <td className="border border-slate-300 px-4 py-3 text-center">
                                        {totals.incomplete}
                                    </td>

                                    <td className="border border-slate-300 px-4 py-3 text-center">
                                        {totals.percentage}%
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>


                    <div className="mt-8 text-sm text-slate-600">

                        <strong>Notes:</strong>

                        <p className="mt-2">
                            Trainees with incomplete records must
                            submit missing documents within 5
                            working days.
                        </p>

                        <p className="mt-1">
                            Report prepared by the TESDAConnect
                            system.
                        </p>

                    </div>

                </div>

            </div>


            {generated && (

                <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg">
                    ✅ Report generated successfully.
                </div>

            )}

        </div>
    );
}