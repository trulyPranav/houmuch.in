import { Geist, Geist_Mono, Inter, Courgette } from "next/font/google";
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
  ]
})

const courgette = Courgette({
  variable: "--font-courgette",
  weight: [ "400"
  ]
})

export const metadata = {
  title: "HouMuch App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${courgette.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
