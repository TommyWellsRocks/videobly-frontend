import Link from "next/link";
import { Nav } from "./Nav";

export function Header() {
	return (
		<header className="fixed left-10 right-10 top-8 flex items-center justify-between py-4 px-8 rounded-2xl border-brandDark-100 bg-brandWhite border-2 drop-shadow-xl z-[999]">
			<Link href="/" className="text-3xl font-semibold text-brandBlue">
				Videobly
			</Link>

			<Nav />
		</header>
	);
}
