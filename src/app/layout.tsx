import type { Metadata } from "next";
import '@unocss/reset/tailwind.css'
import "./globals.css";

export const metadata: Metadata = {
  title: "敏迪医疗",
  description: "",
};

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
        {children}
      </body>
    </html>
  );
}
