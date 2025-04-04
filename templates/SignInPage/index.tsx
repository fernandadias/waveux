"use client";

import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Form from "./Form";

const SignInPage = () => {
    return (
        <div className="relative flex min-h-screen min-h-screen-ios lg:p-6 md:px-6 md:pt-16 md:pb-10">
            <div className="relative shrink-0 w-[40rem] p-20 overflow-hidden flex flex-col justify-center 2xl:w-[37.5rem] xl:w-[30rem] xl:p-10 lg:hidden">
                <div className="max-w-[25.4rem]">
                    <Image
                        className="w-[124px] h-[112px] mb-8"
                        src="/images/waveux-big.png"
                        width={124}
                        height={112}
                        alt="WaveUX Logo"
                    />
                    <div className="mb-4 brand-header">
                        UX com Super poderes
                    </div>
                    <div className="body1 text-n-3">
                        Acelere seu processo de design usando IA e tenha tempo para <span className="text-secondary-100">focar no que realmente importa!</span>
                    </div>
                </div>
            </div>
            <div className="flex grow my-6 mr-6 p-10 bg-n-1 rounded-[1.25rem] lg:m-0 md:p-0 dark:bg-n-6">
                <Form />
            </div>
            <Link
                className="group absolute top-12 right-12 flex justify-center items-center w-10 h-10 bg-n-2 rounded-full text-0 transition-colors hover:bg-primary-1 md:top-6 md:right-6"
                href="/"
            >
                <Icon
                    className="fill-n-7 transition-colors group-hover:fill-n-1"
                    name="close"
                />
            </Link>
        </div>
    );
};

export default SignInPage;
