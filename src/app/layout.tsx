import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Footer from "./components/footer/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gremlili Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}style={{'--fontMain':quicksand.style.fontFamily,'--fontAlt':fredoka.style.fontFamily} as CSSProperties} >
				{children}
				<Footer/>
			</body>
    </html>
  );
}
