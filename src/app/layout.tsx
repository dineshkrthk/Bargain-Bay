import type { Metadata } from "next";
import { Radley  } from "next/font/google";
import "./globals.css";
import Layout from '@/components/Layout/index'
const inter = Radley ({ weight:['400','400'],subsets:["latin"] });

export const metadata: Metadata = {
  title: "Bargain Bay |  Reselling Platform",
  description: "Sell and Buy your products with us on our platform safely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
