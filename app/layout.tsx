import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Sai Rakesh Pokala | Java Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Sai Rakesh Pokala - Java Full Stack Developer & AI Engineer specializing in microservices, Agentic AI frameworks, RAG pipelines, and cloud-native solutions on AWS and Azure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics></Analytics>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
