import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

//components
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: {
    default: "Abdulmajeed Okaka Jimoh | Frontend Web Developer",
    template: "%s | Abdulmajeed Okaka Jimoh",
  },
  description:
    "Portfolio of Abdulmajeed Okaka Jimoh, a frontend web developer specializing in React, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "Abdulmajeed Okaka Jimoh | Frontend Web Developer",
    description:
      "Portfolio of Abdulmajeed Okaka Jimoh, a frontend web developer specializing in React, Next.js, and Tailwind CSS.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1c1c22",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        
      </body>
    </html>
  );
};
