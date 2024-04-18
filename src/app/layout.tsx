import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Mr & Mrs Hon`,
  description: `Invitation Card`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preload" href="/assets/boy.png" as="image" />
        <link rel="preload" href="/assets/boy_smile.png" as="image" />
        <link rel="preload" href="/assets/girl.png" as="image" />
        <link rel="preload" href="/assets/girl_smile.png" as="image" />
        <link rel="preload" href="/assets/cover.jpg" as="image" />
        <link rel="preload" href="/assets/story.jpg" as="image" />
        <link rel="preload" href="/assets/story2.jpg" as="image" />
        <link rel="preload" href="/assets/story3.jpg" as="image" />
        <link rel="preload" href="/assets/groom.png" as="image" />
        <link rel="preload" href="/assets/bride.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&family=PT+Sans+Narrow:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&family=PT+Sans+Narrow:wght@400;700&family=ZCOOL+KuaiLe&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${inter.className} bg-off-white`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
