import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import DarkModeToggle from "./DarkModeToggle";

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cards That Are Dealt",
  description: "A Novel by Nathan Peel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre.className}>
        <ThemeProvider>
          <div className="text-lg py-10">
            <div className="flex justify-end px-10 mb-5">
              <DarkModeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
