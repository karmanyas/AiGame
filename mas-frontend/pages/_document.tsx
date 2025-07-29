// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans bg-gradient-to-br from-[#0e0f11] via-[#1a1c1f] to-[#101317] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
