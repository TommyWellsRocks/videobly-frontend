import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";

import { Header } from "@/components/layout/header/Header";

const inter = Inter({
	variable: "--font-inter",
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
				className={`${inter.variable} antialiased bg-neutral-50 [&_input]:focus:outline-neutral-500 [&_select]:focus:outline-neutral-500 [&_button]:focus:outline-neutral-500 grid-background`}
			>
				<div className="mx-10 relative h-full z-10">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
