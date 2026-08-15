import EngineCard from './EngineCard';
import Stat from './Stat';

export default function Hero({ onGetStarted }) {
    const scrollToFeatures = () => {
        document
            .getElementById('features')
            ?.scrollIntoView({
                behavior: 'smooth',
            });
    };

    return (
        <section className="relative min-h-[500px] overflow-hidden pt-[58px]">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(13,110,117,.35),transparent_45%),linear-gradient(115deg,#061c18,#092b2b_50%,#071d1d)]" />

            <div className="absolute -left-32 top-24 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />

            <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                    backgroundSize: '70px 70px',
                }}
            />

            <div className="relative mx-auto grid min-h-[442px] max-w-[1150px] grid-cols-1 items-center gap-8 px-6 py-12 lg:grid-cols-2">

                {/* Left */}
                <div>

                    <div className="mb-4 flex items-center gap-2">

                        <span className="h-8 w-8 rounded-full border border-yellow-400/60 bg-yellow-400/10" />

                        <span className="h-8 w-8 rounded-full border border-cyan-400/60 bg-cyan-400/10" />

                        <div className="ml-2">

                            <div className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/40">
                                Partner Institutions
                            </div>

                            <div className="text-[8px] font-semibold text-white/70">
                                Balli School of Technology & Mamburao Integrated Farm
                            </div>

                        </div>

                    </div>

                    <div className="mb-4 inline-flex rounded-full border border-[#1acfc0]/20 bg-[#16cfc0]/10 px-3 py-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#20d6c7]">
                        Mamburao Integrated Farm
                    </div>

                    <h1 className="max-w-[500px] text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">

                        Streamlining{' '}

                        <span className="text-[#16d6c0]">
                            TESDA
                        </span>

                        <br />

                        Training
                        <br />
                        Operations

                    </h1>

                    <p className="mt-4 max-w-[470px] text-sm leading-6 text-white/60">
                        A complete offline-capable progressive web application
                        tailored for registration, schedule coordination,
                        and real-time training analytics.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                        <button
                            onClick={onGetStarted}
                            className="rounded-md bg-[#17cbbd] px-5 py-3 text-[9px] font-bold text-[#052d2b] shadow-lg shadow-cyan-500/10 transition hover:bg-[#27e1d2]"
                        >
                            Get Started →
                        </button>

                        <button
                            onClick={scrollToFeatures}
                            className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-[9px] font-bold text-white transition hover:bg-white/10"
                        >
                            Explore Features ↓
                        </button>

                    </div>

                    {/* Statistics */}
                    <div className="mt-7 grid max-w-[480px] grid-cols-4 border-t border-white/10 pt-5">

                        <Stat
                            number="0"
                            label="TRAINEES"
                            sub="ENROLLED"
                        />

                        <Stat
                            number="0"
                            label="ACTIVE"
                            sub="BATCHES"
                        />

                        <Stat
                            number="0"
                            label="AGRO"
                            sub="COURSES"
                        />

                        <Stat
                            number="0%"
                            label="OFFLINE"
                            sub="READY"
                        />

                    </div>

                </div>

                {/* Right */}
                <div className="relative hidden lg:block">
                    <EngineCard />
                </div>

            </div>

        </section>
    );
}