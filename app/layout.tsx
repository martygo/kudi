import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import { Toaster } from "@/components/ui/sonner";

const poppinsSans = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Kudi - Encontre o local ideal para você",
	description: "Encontre o local ideal para você.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppinsSans.variable} antialiased`}>
				<Header />
				<main className="container mx-auto px-2 py-6 min-h-screen">
					{children}
				</main>
				<BackToTop />
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
