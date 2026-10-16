import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manhaj | Learn Islam through a clear path",
  description:
    "A calm, structured, source-conscious learning platform for the Seerah and the lives of the Sahabah.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400..800&family=Source+Sans+3:wght@400..800&family=Source+Serif+4:opsz,wght@8..60,500..700&display=swap" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
