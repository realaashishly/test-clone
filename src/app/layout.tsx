import type { Metadata } from "next";
import "./globals.css";
import { louize, inter, nunito } from "../styles/fonts";
import RootLayout from "@/components/layout/RootLayout";

export const metadata: Metadata = {
  title: "mymind is the extension for your mind.",
  description: "A private place to save your most precious notes, images, quotes and highlights. Enhanced with AI to help you remember without wasting time on categorizing & organizing.",
  icons: {
    icon: [
      {
        url: "https://ext.same-assets.com/1239943432/901201020.svg+xml",
        href: "https://ext.same-assets.com/1239943432/901201020.svg+xml",
      }
    ]
  }
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
