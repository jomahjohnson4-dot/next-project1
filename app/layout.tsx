import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Container from "./components/container/container";
import NavBar from "./NavBar";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "NEWS",
  description: "Matangazo yetu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body>
         <NavBar/>
        <Container className="">

          {children}
        </Container>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
