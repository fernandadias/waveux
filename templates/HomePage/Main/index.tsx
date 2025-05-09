import Menu from "@/components/Menu";
import { waves } from "@/constants/waves";

type MainProps = {};

const Main = ({}: MainProps) => {
    return (
        <div className="px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
            <div className="mb-10 text-center">
                <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">
                    Waves para acelerar seu processo de UX
                </div>
                <div className="body1 text-n-4 2xl:body1S">
                    Experimente o poder da IA para deixar o seu trabalho com o que realmente importa: criatividade, empatia e inovação.
                </div>
            </div>
            <Menu className="max-w-[80rem] mx-auto" items={waves} />
        </div>
    );
};

export default Main;
