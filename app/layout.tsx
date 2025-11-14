import "./globals.css";
import { IBM_Plex_Sans_Arabic, Noto_Sans_Arabic } from "next/font/google";
import type { Metadata } from "next";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex"
});

const noto = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto"
});

export const metadata: Metadata = {
  title: "دار الراحة | تصميم معماري حديث",
  description:
    "صفحة هبوط بسيطة ومريحة لتقديم خدمات العمارة الحديثة مع تجربة سهلة لكبار السن."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${plex.variable} ${noto.variable} font-body bg-sand text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
