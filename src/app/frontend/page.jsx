import Link from "next/link";
import styles from "@/app/frontend/frontend.module.css";

export default function Frontend() {
    return (
        <main className={styles.container_frontend}>
            <h2>React.JS</h2>
            <p>
                O React.js é uma biblioteca JavaScript utilizada para construir
                interfaces de usuário interativas e eficientes. Ele é amplamente adotado
                devido à sua abordagem baseada em componentes e à facilidade de criar
                aplicativos escaláveis. O React permite o desenvolvimento de Single Page
                Applications (SPAs) de forma eficiente e flexível.
            </p>
            <Link href="" target="_blank">Guia de Front-End</Link>
            <Link className="link_retorno" href="/">Voltar</Link>
        </main>
    );
}