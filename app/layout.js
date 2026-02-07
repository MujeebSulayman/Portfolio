import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thehemjay.vercel.app";
const ogImageUrl = `${siteUrl}/images/project/portfolio.png`;
const siteTitle = "Mujeeb Sulayman | Full-Stack Blockchain Developer — Web2, Web3";
const siteDescription =
  "Full-stack blockchain developer specializing in Web2, Web3. Portfolio of decentralized applications, smart contracts, and modern web solutions.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/images/project/portfolio.png",
    apple: "/images/project/portfolio.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "TheHemjay",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
