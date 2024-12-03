import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/ModeToggle";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Poppins, Noto_Serif } from "next/font/google";

const poppins = Poppins({
   weight: ["500"],
   subsets: ["latin"],
   variable: "--font-poppins",
});

const notoSerif = Noto_Serif({
   weight: ["500"],
   subsets: ["latin"],
   variable: "--font-noto_serif",
})

export const metadata: Metadata = {
   title: "The OGAT Guardian",
   description: "OGAT premiere news service",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${poppins.variable} ${notoSerif.variable}  antialiased`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
               disableTransitionOnChange
            >
               <Header />
               <Navbar />
               {children}
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
