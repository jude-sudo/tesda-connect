import FeatureCard from './FeatureCard';

export default function Features() {

    const features = [
        {
            icon: '▣',
            title: 'Trainee Intake',
            description:
                'Digital registration and tracking of trainees, ensuring complete personal and training data.',
            type: 'blue',
        },
        {
            icon: '◎',
            title: 'Decision Support System',
            description:
                'Rule-based mechanism that analyzes records to assist in identifying qualified trainees and certifications.',
            type: 'purple',
        },
        {
            icon: '◴',
            title: 'Report Readiness',
            description:
                'Automated tracking of document completeness to optimize training reports.',
            type: 'cyan',
        },
        {
            icon: '▣',
            title: 'Schedule Coordination',
            description:
                'Secure digital calendar management for scheduling batches, orientations, and assessments.',
            type: 'green',
        },
        {
            icon: '♙',
            title: 'Profiles & Records',
            description:
                'Organizes and tracks comprehensive trainee and instructor demographic data and documents.',
            type: 'yellow',
        },
        {
            icon: '▤',
            title: 'Offline-First Engine',
            description:
                'Saves transactions natively using LocalStorage and seamlessly syncs upon internet restoration.',
            type: 'red',
        },
    ];

    return (
        <section
            id="features"
            className="relative overflow-hidden bg-[#07173d] px-6 py-9"
        >

            <div className="absolute right-[-100px] top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-[680px]">

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}