import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import ResoponsiveNavbar from "@/components/Navbar/ResoponsiveNavbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/Helpers/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iman Safari | Portfolio",
  description: "Iman Safari | Senior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className} antialiased`}>
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{ backgroundColor: "white" }}
            outerStyle={{
              border:"3px solid white"
            }}
          />
        </div>
        <ResoponsiveNavbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
