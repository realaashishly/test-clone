import type { Metadata } from "next";
import "./globals.css";
import { louize, inter, nunito } from "../styles/fonts";
import RootLayout from "@/components/layout/RootLayout";

export const metadata: Metadata = {
    title: "Korizen",
    description: "",
    icons: {
        apple: "/apple-touch-icon.png",
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${louize.variable} ${inter.variable} ${nunito.variable}`}
    >
      <body>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
