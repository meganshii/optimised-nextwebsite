import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Initialize the fonts with the correct configurations
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Prefetch images */}
        <link
          rel="preload"
          href="https://www.nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-making-machine.webp"
          as="image"
          />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
