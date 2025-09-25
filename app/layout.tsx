import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thilaka Ayurveda Osu Hala",
  description: "Traditional Ayurvedic Medicine Shop in Sri Lanka - Since 1982",
  icons: {
    icon: "https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/9510dabe9b0c5502c6074eea8f45bd0b.png",
    shortcut: "https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/9510dabe9b0c5502c6074eea8f45bd0b.png",
    apple: "https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/9510dabe9b0c5502c6074eea8f45bd0b.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
