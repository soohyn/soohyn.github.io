import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "soohyn.log()",
  description: "soohyn developer blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-screen-xl px-5 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
