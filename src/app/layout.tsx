import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MyTube Video Stuff",
	description:
		"YouTube video downloader. Download YouTube videos with the highest quality video, audio, or both.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased [&_input]:focus:outline-neutral-700 [&_select]:focus:outline-neutral-700 [&_button]:focus:outline-neutral-700`}
			>
				<div className="mx-10">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
