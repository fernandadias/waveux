import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Navigation from "./Navigation";
import { twMerge } from "tailwind-merge";

type LeftSidebarProps = {
    value: boolean;
    setValue?: any;
    smallSidebar?: boolean;
    visibleRightSidebar?: boolean;
};

const LeftSidebar = ({
    value,
    setValue,
    smallSidebar,
    visibleRightSidebar,
}: LeftSidebarProps) => {
    const navigation = [
        {
            title: "Instruções",
            icon: "help-circle",
            color: "stroke-[#45B063]",
            url: "/instrucoes",
        },
        {
            title: "Waves",
            icon: "message-square",
            color: "stroke-[#45B063]",
            url: "/",
        },
        {
            title: "Biblioteca de UX",
            icon: "book-open",
            color: "stroke-[#45B063]",
            url: "/biblioteca",
        },
        {
            title: "Novidades",
            icon: "zap",
            color: "stroke-[#45B063]",
            url: "/novidades",
        },
        {
            title: "Grupo exclusivo",
            icon: "award",
            color: "stroke-[#45B063]",
            url: "/grupo",
        },
    ];

    const handleClick = () => {
        setValue(!value);
        smallSidebar && value ? disablePageScroll() : enablePageScroll();
    };

    return (
        <div
            className={twMerge(
                `fixed z-20 top-0 left-0 bottom-0 flex flex-col pt-30 px-4 bg-n-7 md:invisible md:opacity-0 md:transition-opacity ${
                    value
                        ? "w-24 pb-38 md:w-16 md:px-0 md:pb-30"
                        : "w-80 pb-58"
                } ${visibleRightSidebar && "md:visible md:opacity-100"}`
            )}
        >
            <div
                className={`absolute top-0 right-0 left-0 flex items-center h-30 pl-7 pr-6 ${
                    value ? "justify-center md:px-4" : "justify-between"
                }`}
            >
                {!value && <Logo />}
                <button
                    className="group tap-highlight-color"
                    onClick={handleClick}
                >
                    <Icon
                        className="fill-n-4 transition-colors group-hover:fill-n-3"
                        name={value ? "chevrons-left" : "chevrons-right"}
                    />
                </button>
            </div>
            <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
                <Navigation visible={value} items={navigation} />
            </div>
        </div>
    );
};

export default LeftSidebar;
