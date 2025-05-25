import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "敏迪医疗",
  description: "",
};

import TopNav  from "@/ui/TopNav"
import Footer from "@/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative`}
      >
          <div className="sticky top-0 left-0 right-0 z-20">
            <TopNav />
          </div>
          <div className="min-h-screen">
            {children}
          </div>
          <div>
            <Footer />
          </div>
      </body>
    </html>
  );
}
