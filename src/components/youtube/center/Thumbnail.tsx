"use client";

import Link from "next/link";

import { useYouTube } from "@/hooks/useYouTube";

export function Thumbnail() {
	const videoUrl = useYouTube((state) => state.link);
	const thumbnailUrl = useYouTube((state) => state.thumbnailURL);

	if (thumbnailUrl)
		return (
			<Link href={videoUrl} target="_blank">
				<img
					src={thumbnailUrl}
					alt="Thumbnail"
					width={700}
					height={500}
					className="aspect-video object-cover rounded-lg border-3 border-neutral-100 shadow-2xl shadow-neutral-500"
				/>
			</Link>
		);
}
