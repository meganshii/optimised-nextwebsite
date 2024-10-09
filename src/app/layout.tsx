import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

// Initialize the fonts with the correct configurations and use "font-display: swap"
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap", // Font will use fallback fonts until the Inter font is loaded
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "500", "600", "700"], // Limit to only necessary font weights
  display: "swap", // Font fallback until Poppins is ready
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload only the necessary assets */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dj4jijw2a/video/upload/v1728362941/NesscoIcons/hgjyjg9lydioz5suzjg9.webm"
          as="video"
          type="video/webm"
          crossOrigin="anonymous" // Include crossorigin for potential caching benefits
        />

        {/* Asynchronously load the external script */}
        <Script
          src="https://cdn.pagesense.io/js/nesscoindia/ff3c25fdacd845338fcb5edd343fcde6.js"
          strategy="lazyOnload" // Loads script after the page is interactive
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
