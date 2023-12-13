import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./styles/global.css";
import { Metadata } from "next";
import theme from "./theme";
import Head from "next/head";
import NavBar from "./components/nav-bar";

export const metadata: Metadata = {
  title: "Matthew McCracken - Portfolio",
  description:
    "Welcome to my website. This is the home of my Projects, Hobbies, and a place to show off my creativity.",
  openGraph: {
    url: "https://matthewwmcc.vercel.app/",
    title: "Matthew McCracken - Portfolio",
    description:
      "Welcome to my website. This is the home of my Projects, Hobbies, and a place to show off my creativity.",
    images: [
      {
        url: "/images/preview-image.png",
        width: 1220,
        height: 864,
        alt: "Matthew McCracken's Website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />
      </Head>
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode="dark" />
          <NavBar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
