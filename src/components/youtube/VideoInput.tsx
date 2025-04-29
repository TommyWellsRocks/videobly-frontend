"use client";

import { useYouTube } from "@/hooks/useYouTube";

export function VideoInput() {
	const link = useYouTube((state) => state.link);
	const setLink = useYouTube.getState().setLink;

	return (
		<input
			value={link}
			onChange={(e) => setLink(e.currentTarget.value)}
			placeholder="https://www.youtube.com/watch?v=6f0T6UV-HiI"
			className="w-full outline-2 outline-neutral-200 p-3 rounded-md active:outline-neutral-50"
		/>
	);
}
