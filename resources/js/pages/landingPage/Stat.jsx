export default function Stat({ number, label, sub }) {
    return (
        <div>

            <div className="text-2xl font-bold text-[#19d2c2]">
                {number}
            </div>

            <div className="text-[6px] font-bold tracking-widest text-white/40">
                {label}
            </div>

            <div className="text-[6px] font-bold tracking-widest text-white/40">
                {sub}
            </div>

        </div>
    );
}