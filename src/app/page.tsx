import { GridBackground } from "@/components/common/GridBackground";
import { Center } from "@/components/youtube/center/Center";
import { Footer } from "@/components/youtube/Footer";

export default function YouTube() {
	return (
		<>
			<GridBackground />
			<main className="relative flex flex-col min-h-svh py-30 justify-center items-center">
				<Center />
				<Footer />
			</main>
		</>
	);
}
