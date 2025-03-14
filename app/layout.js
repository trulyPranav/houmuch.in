import { Geist, Geist_Mono, Inter, Courgette, Antonio } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: [
    "100",
    "500",
    "700"
  ],
  subsets: ["latin"],
})

const courgette = Courgette({
  variable: "--font-courgette",
  weight: [ "400"
  ],
  subsets: ["latin"],
})

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"]
})

export const metadata = {
  title: "HouMuch App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${courgette.variable} ${antonio.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
