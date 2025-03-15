import { WaveType } from "@/constants/waves";
import WaveCard from "@/components/WaveCard";

type MenuProps = {
    className?: string;
    items: WaveType[];
};

const Menu = ({ className, items }: MenuProps) => (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
        {items.map((item, index) => (
            <WaveCard key={index} wave={item} />
        ))}
    </div>
);

export default Menu;
