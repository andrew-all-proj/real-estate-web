import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Siam Royal Agency — покупка и аренда недвижимости в Таиланде",
  description:
    "Персональный подбор недвижимости с помощью нейросетей. Только актуальные предложения. Твой дом — в одном клике от тебя",
  keywords:
    "недвижимость в Таиланде, покупка квартиры, аренда апартаментов, Бангкок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
