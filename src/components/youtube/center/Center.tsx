import { VideoInput } from "@/components/youtube/center/VideoInput";
import { OutputSpecs } from "@/components/youtube/center/OutputSpecs";
import { ErrorMessage } from "@/components/youtube/center/ErrorMessage";
import { Thumbnail } from "@/components/youtube/center/Thumbnail";
import { Download } from "@/components/youtube/center/Download";

export function Center() {
	return (
		<section className="flex flex-col w-full max-w-[600px] justify-center items-center gap-y-8 h-full text-center">
			<span className="text-6xl">Download YouTube videos in seconds</span>

			<span className="text-xl text-neutral-500">
				Introducing the YouTube downloader that actually works right.
			</span>

			<div className="flex flex-col gap-y-4 w-full">
				<VideoInput />
				<OutputSpecs />
				<ErrorMessage />
			</div>

			<Thumbnail />
			<Download />
		</section>
	);
}
