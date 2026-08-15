export default function Navbar({ onLogin }) {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#061715]/80 backdrop-blur-xl">

            <div className="mx-auto flex h-[58px] max-w-[1450px] items-center justify-between px-5">

                {/* Logo */}
                <div className="flex items-center gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white text-[10px] font-bold text-[#123c5a]">
                        BST
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white text-[9px] font-bold text-[#123c5a]">
                        TESDA
                    </div>

                    <div className="text-[15px] font-semibold tracking-tight">
                        TESDA
                        <span className="text-[#16d6c2]">
                            Connect
                        </span>
                    </div>

                </div>

                {/* Institution */}
                <div className="hidden items-center gap-2 md:flex">

                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">
                        Institution:
                    </span>

                    <button className="rounded-full bg-white/10 px-5 py-2 text-[9px] font-semibold text-white/60">
                        Balli Tech
                    </button>

                    <button className="rounded-full bg-[#18cfc0] px-6 py-2 text-[9px] font-bold text-[#062b2a]">
                        Mamburao Farm
                    </button>

                </div>

                {/* Right */}
                <div className="flex items-center gap-3">

                    <div className="hidden items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-[8px] font-bold text-yellow-400 sm:flex">

                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                        Sync: Offline

                    </div>

                    <button
                        onClick={onLogin}
                        className="rounded-md bg-[#0c2864] px-4 py-2 text-[9px] font-bold text-white transition hover:bg-[#123b8e]"
                    >
                        Sign In →
                    </button>

                </div>

                

            </div>

        </header>
    );
}