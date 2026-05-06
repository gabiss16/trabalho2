import type { Metadata } from "next";
import "./globals.css";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

export const metadata: Metadata = {
  title: "Minha página Alice 301",
  description: "criada em 17-03-2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
