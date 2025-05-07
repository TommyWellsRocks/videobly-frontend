"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export function Nav() {
	const pathName = usePathname();
	const page = pathName === "/" ? "home" : pathName.split("/")[1];
	return (
		<nav className="flex text-sm text-brandDark-700 font-semibold">
			<Link
				href="/"
				className={`${
					page === "home" ? "underline" : ""
				} underline-offset-4 hover:text-brandDark-400`}
			>
				YOUTUBE
			</Link>
		</nav>
	);
}
