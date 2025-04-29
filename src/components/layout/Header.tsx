import Link from "next/link";

export function Header() {
	const navItems = [
		{ name: "Home", linkTo: "/" },
		{ name: "YouTube", linkTo: "/youtube" },
	];

	return (
		<header className="flex justify-between text-lg font-semibold py-2">
			<Link href="/">Videobly</Link>
			<nav className="flex gap-x-5">
				{navItems.map((item, index) => (
					<Link key={index} href={item.linkTo}>
						{item.name}
					</Link>
				))}
			</nav>
		</header>
	);
}
