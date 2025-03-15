import { useState } from "react";
import Field from "@/components/Field";

type SignInProps = {
    onClick: () => void;
};

const SignIn = ({ onClick }: SignInProps) => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <form action="" onSubmit={() => console.log("Submit")}>
            <Field
                className="mb-4"
                classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
                placeholder="Nome da conta ou E-mail"
                icon="email"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
            />
            <Field
                className="mb-2"
                classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
                placeholder="Senha"
                icon="lock"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <button
                className="mb-6 base2 text-secondary-100 transition-colors hover:text-secondary-100/90"
                type="button"
                onClick={onClick}
            >
                Esqueci minha senha!
            </button>
            <button className="btn-blue btn-large w-full" type="submit">
                Entrar no WaveUX
            </button>
        </form>
    );
};

export default SignIn;
