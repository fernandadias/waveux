import { useState } from "react";
import Link from "next/link";
import Field from "@/components/Field";

type CreateAccountProps = {};

const CreateAccount = ({}: CreateAccountProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const getPasswordStrength = (pass: string) => {
        let strength = 0;
        if (pass.length >= 8) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        return strength;
    };

    const passwordStrength = getPasswordStrength(password);
    const strengthText = [
        "Muito fraca",
        "Fraca",
        "Média",
        "Forte",
        "Muito forte"
    ][passwordStrength];
    const strengthColor = [
        "text-red-500",
        "text-orange-500",
        "text-yellow-500",
        "text-green-500",
        "text-green-600"
    ][passwordStrength];

    return (
        <form action="" onSubmit={() => console.log("Submit")}>
            <Field
                className="mb-4"
                classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
                placeholder="E-mail"
                icon="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
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
            <div className="mb-4 text-sm">
                <div>Força da senha: <span className={strengthColor}>{strengthText}</span></div>
                <div className="text-xs text-n-4 mt-1">
                    A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, números e caracteres especiais
                </div>
            </div>
            <Field
                className="mb-6"
                classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
                placeholder="Confirmar senha"
                icon="lock"
                type="password"
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
                required
            />
            <button className="btn-blue btn-large w-full mb-6" type="submit">
                Criar minha conta
            </button>
            <div className="text-center caption1 text-n-4">
                ao criar minha conta eu aceito os{" "}
                <Link
                    className="text-n-5 transition-colors hover:text-n-7 dark:text-n-3 dark:hover:text-n-1"
                    href="/"
                >
                    Termos de Uso
                </Link>{" "}
                e a{" "}
                <Link
                    className="text-n-5 transition-colors hover:text-n-7 dark:text-n-3 dark:hover:text-n-1"
                    href="/"
                >
                    Política de Privacidade
                </Link>
            </div>
        </form>
    );
};

export default CreateAccount;
