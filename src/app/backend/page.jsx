import Link from "next/link";
import styles from "@/app/backend/backend.module.css";

export default function Backend() {
    return (
        <main className={styles.container_backend}>
            <h2>Node.JS</h2>
            <p>
                    Node.js é uma plataforma de desenvolvimento que permite a execução de
                    código JavaScript no lado do servidor. Baseado no motor V8 do Google
                    Chrome, o Node.js é conhecido por sua eficiência e escalabilidade. Ele é
                    amplamente utilizado para construir aplicativos web, APIs e serviços em
                    tempo real. Com uma vasta gama de bibliotecas e um ecossistema robusto,
                    o Node.js é uma escolha popular para desenvolvedores que buscam criar
                    aplicativos rápidos e escaláveis.
            </p>
            <Link href="" target="_blank">Guia de Backend</Link>
            <Link className="link_retorno" href="/">Voltar</Link>
        </main>
    );
}