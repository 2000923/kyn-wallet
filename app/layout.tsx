import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KynWallet - Iniciar sesión",
  description: "Accede a tu billetera descentralizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
