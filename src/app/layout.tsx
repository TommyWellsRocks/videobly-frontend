import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";

import { Header } from "@/components/layout/header/Header";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Videobly",
	description: "Download YouTube videos with the highest quality video, audio, or both.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} antialiased bg-brandWhite [&_a]:focus:outline-brandDark-500 [&_input]:focus:outline-brandDark-500 [&_select]:focus:outline-brandDark-500 [&_button]:focus:outline-brandDark-500 mx-10 relative`}
			>
				<div className="absolute left-0 right-0 bottom-0 top-0 -mx-10 gradient-background"></div>

				<div className="z-10">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
