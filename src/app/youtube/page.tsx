import { VideoInput } from "@/components/youtube/VideoInput";
import { OutputSpecs } from "@/components/youtube/OutputSpecs";
import { ErrorMessage } from "@/components/youtube/ErrorMessage";
import { Thumbnail } from "@/components/youtube/Thumbnail";
import { Download } from "@/components/youtube/Download";

export default function YouTube() {
	return (
		<main className="flex flex-col items-center">
			<section className="flex flex-col w-full max-w-[2000px] justify-center items-center gap-y-8 py-30">
				<span className="text-5xl font-semibold">YouTube Video</span>
				<div className="flex flex-col gap-y-2 w-full sm:max-w-3/4 xl:max-w-1/2">
					<span className="text-sm font-semibold text-neutral-300">
						YouTube Video URL
					</span>
					<VideoInput />
					<OutputSpecs />
					<ErrorMessage />
				</div>

				<Thumbnail />
				<Download />
			</section>
		</main>
	);
}
