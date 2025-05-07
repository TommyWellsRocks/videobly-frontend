"use client";

import { useYouTube } from "@/hooks/useYouTube";
import { Search } from "lucide-react";

export function VideoInput() {
	const link = useYouTube((state) => state.link);
	const setLink = useYouTube.getState().setLink;
	const getPreview = useYouTube.getState().getPreview;

	return (
		<div className="flex items-center rounded-md outline-2 outline-brandWhite w-full shadow-md">
			<input
				value={link}
				onChange={(e) => setLink(e.currentTarget.value)}
				placeholder="https://www.youtube.com/watch?v=6f0T6UV-HiI"
				className="w-full p-3 placeholder:text-brandDark-300 outline-0 bg-brandWhite"
			/>
			<button
				onClick={() => getPreview()}
				className="bg-brandBlue-200 px-4 py-3 cursor-pointer hover:bg-brandBlue-300"
			>
				<Search />
			</button>
		</div>
	);
}
