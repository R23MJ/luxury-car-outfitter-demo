import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  title: "Alta Mere Plano",
  description: "Luxury window tinting and auto accessories in Plano, TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-zinc-950 animate-fadeIn ease-in-out`}
      >
        {/* <NavigationBar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
