import Link from "next/link";
import Icon from "@/components/Icon";
import { WaveType } from "@/constants/waves";

type WaveCardProps = {
    wave: WaveType;
};

const WaveCard = ({ wave }: WaveCardProps) => (
    <Link
        className="group flex flex-col p-5 bg-[#161616] border border-n-3 rounded-xl transition-all hover:border-transparent hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] last:mb-0 2xl:p-4 lg:p-5 dark:border-n-5 dark:hover:border-n-7 dark:hover:bg-n-7"
        href={wave.url}
    >
        <div className="flex items-start mb-3">
            <div className="relative flex justify-center items-center w-14 h-14 shrink-0 mr-4">
                <div
                    className="absolute inset-0 opacity-20 rounded-xl bg-[#45B063]"
                ></div>
                <Icon
                    className="relative z-1 w-8 h-8"
                    fill="#45B063"
                    name={wave.icon}
                />
            </div>
            <div className="grow">
                <div className="mb-1 text-lg font-bold text-n-6 dark:text-n-1">
                    {wave.title}
                </div>
                <div className="flex flex-wrap items-center">
                    {wave.tags.filter(tag => tag !== "UX Research").map((tag, index) => (
                        <div
                            key={index}
                            className="mr-2 mb-2 px-2 py-0.5 bg-n-3/50 rounded text-xs font-medium text-n-6 dark:bg-n-5/50 dark:text-n-3"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="mb-3 text-sm text-n-4 dark:text-n-3">
            {wave.description}
        </div>
        <div className={`self-start px-3 py-1 rounded-lg text-xs font-semibold ${
            wave.level === "Básico"
                ? "bg-[#52BA69]/10 text-[#52BA69]"
                : wave.level === "Intermediário"
                ? "bg-[#E68A1D]/10 text-[#E68A1D]"
                : "bg-[#8E55EA]/10 text-[#8E55EA]"
        }`}>
            {wave.level}
        </div>
    </Link>
);

export default WaveCard; 