"use client";

import { useYouTube } from "@/hooks/useYouTube";

export function ErrorMessage() {
	const errorMessage = useYouTube((state) => state.errorMessage);

	return errorMessage ? (
		<span className="text-center text-red-500 py-1 px-2 bg-red-950 rounded-md">
			{errorMessage}
		</span>
	) : null;
}
