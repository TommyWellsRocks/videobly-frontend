"use client";

import { useYouTube } from "@/hooks/useYouTube";

export function Thumbnail() {
	const thumbnailUrl = useYouTube((state) => state.thumbnailURL);
	if (thumbnailUrl)
		return (
			<img
				src={thumbnailUrl}
				alt="Thumbnail"
				width={700}
				height={500}
				className="aspect-video object-cover"
			/>
		);
}
