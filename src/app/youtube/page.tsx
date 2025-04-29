import { Download } from "@/components/youtube/Download";
import { ErrorMessage } from "@/components/youtube/ErrorMessage";
import { VideoInput } from "@/components/youtube/VideoInput";
import { Format, Resolution } from "@/components/youtube/VideoOptions";

export default function YouTube() {
	return (
		<main className="flex flex-col gap-y-20">
			<section className="flex flex-col h-[500px] justify-center items-center gap-y-10">
				<span className="text-5xl font-semibold">YouTube Video</span>
				<div className="flex flex-col gap-y-2 w-1/2">
					<span className="text-sm font-semibold text-neutral-300">
						YouTube Video URL
					</span>
					<VideoInput />
					<div className="flex gap-x-5">
						<Format />

						<Resolution />
					</div>
					<ErrorMessage />
				</div>

				<Download />
			</section>
		</main>
	);
}
