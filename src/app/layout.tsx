import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon Reports",
  description:
    "Stay informed with the latest news and updates on our comprehensive news website. Explore breaking news, in-depth analyses, and insightful articles covering a wide range of topics. From politics to technology, sports to entertainment, we bring you timely and trustworthy news from around the world. Join us for a reliable source of information that matters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoSerif.className} max-w-7xl mx-auto px-5`}>
        <Header />
        {children}
      </body>
    </html>
  );
}