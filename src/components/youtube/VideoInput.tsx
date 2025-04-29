"use client";

import { useYouTube } from "@/hooks/useYouTube";
import { Search } from "lucide-react";

export function VideoInput() {
	const link = useYouTube((state) => state.link);
	const setLink = useYouTube.getState().setLink;
	const getPreview = useYouTube.getState().getPreview;

	return (
		<div className="flex items-center rounded-md outline-2 outline-neutral-200">
			<input
				value={link}
				onChange={(e) => setLink(e.currentTarget.value)}
				placeholder="https://www.youtube.com/watch?v=6f0T6UV-HiI"
				className="w-full p-3"
			/>
			<button
				onClick={() => getPreview()}
				className="bg-neutral-200 text-neutral-950 px-4 py-3 hover:cursor-pointer hover:bg-neutral-400"
			>
				<Search />
			</button>
		</div>
	);
}
