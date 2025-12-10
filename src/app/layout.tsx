import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "OperisChatAI - AI Sales Agent | Tư vấn & Bán hàng Tự động 24/7",
  description:
    "Giải pháp AI Sales Agent giúp doanh nghiệp tự động hóa tư vấn, bán hàng và chăm sóc khách hàng 24/7. Hiểu ngữ cảnh, phản hồi tự nhiên như con người.",
  keywords:
    "AI Sales Agent, Chatbot AI, tư vấn tự động, bán hàng AI, chăm sóc khách hàng AI",
  openGraph: {
    title: "OperisChatAI - AI Sales Agent",
    description:
      "Giải pháp AI Sales Agent giúp doanh nghiệp tự động hóa tư vấn, bán hàng và chăm sóc khách hàng 24/7.",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${lexend.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
