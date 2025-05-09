import "../styles/global.css";
import "../styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { Metadata } from "next";
import { DARK_COLORS, LIGHT_COLORS } from "theme";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shantanu Fuke | Data Engineer | Software Developer",
  description:
    "Shantanu Fuke is a Computer Science Graduate Student at Texas A&M University, who loves learning new things.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shantanufuke.github.io/",
    title: "Shantanu Fuke | Data Engineer | Software Developer"
  },
};

function RootLayout({children}: { children: React.ReactNode }) {
    const theme = "light";
    const themeColors = theme === "light" ? LIGHT_COLORS: DARK_COLORS;

  return (
      <html
          lang="en"
          suppressHydrationWarning
          className="bg-neutral-900"
          data-color-theme={theme}
          //@ts-ignore
          style={themeColors}
      >
      <GoogleAnalytics gaId="G-JJBG91P2EL"/>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
        <title></title>
      </head>
      <body suppressHydrationWarning={true}>
      <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
      </html>
  );
}

export default RootLayout;
