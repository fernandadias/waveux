import Link from "next/link";
import Icon from "@/components/Icon";
import { WaveType } from "@/constants/waves";

type WaveCardProps = {
    wave: WaveType;
};

const WaveCard = ({ wave }: WaveCardProps) => (
    <Link
        className="group flex flex-col p-5 bg-n-1 border border-n-3 rounded-xl transition-all hover:border-transparent hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] last:mb-0 2xl:p-4 lg:p-5 dark:bg-n-6 dark:border-n-5 dark:hover:border-n-7 dark:hover:bg-n-7"
        href={wave.url}
    >
        <div className="flex items-center mb-3">
            <div className="relative flex justify-center items-center w-12 h-12 mr-4">
                <div
                    className="absolute inset-0 opacity-20 rounded-xl"
                    style={{
                        backgroundColor: wave.color,
                    }}
                ></div>
                <Icon
                    className="relative z-1"
                    fill={wave.color}
                    name={wave.icon}
                />
            </div>
            <div className="grow">
                <div className="mb-1 text-lg font-bold text-n-6 dark:text-n-1">
                    {wave.title}
                </div>
                <div className="flex items-center">
                    {wave.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="mr-2 px-2 py-0.5 bg-n-3/50 rounded text-xs font-medium text-n-6 dark:bg-n-5/50 dark:text-n-3"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                wave.level === "Básico"
                    ? "bg-[#52BA69]/10 text-[#52BA69]"
                    : wave.level === "Intermediário"
                    ? "bg-[#E68A1D]/10 text-[#E68A1D]"
                    : "bg-[#8E55EA]/10 text-[#8E55EA]"
            }`}>
                {wave.level}
            </div>
        </div>
        <div className="text-sm text-n-4 dark:text-n-3">
            {wave.description}
        </div>
    </Link>
);

export default WaveCard; 