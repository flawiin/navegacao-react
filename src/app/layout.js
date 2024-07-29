import "./globals.css";
import Topo from "@/componentes/Topo";

export const metadata = {
  title: "Navegação React",
  description: "Projeto de Estudo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
