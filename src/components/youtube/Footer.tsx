import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
	const year = new Date().getFullYear();
	return (
		<section className="absolute bottom-10 left-0 right-0 flex items-center justify-between w-full text-neutral-400">
			<div className="flex gap-x-8 items-center">
				<span>© {year} Videobly. All Rights Reserved.</span>
				<Link href="/">Terms of Use</Link>
			</div>

			<div className="flex">
				<Link href="mailto:help@videobly.com">
					<Mail size={20} />
				</Link>
			</div>
		</section>
	);
}
