import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Furniro - Modern Furniture Store",
  description: "Discover our collection of modern furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
