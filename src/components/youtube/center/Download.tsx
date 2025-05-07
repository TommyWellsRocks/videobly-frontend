"use client";

import { useYouTube } from "@/hooks/useYouTube";
import { useState } from "react";

export function Download() {
	const format = useYouTube((state) => state.format);
	const resolution = useYouTube((state) => state.resolution);
	const formatOptions = useYouTube((state) => state.availableFormats);
	const videoLink = useYouTube((state) => state.link);
	const [statusMessage, setStatusMessage] = useState("");

	async function downloadOutput() {
		if (!videoLink) return;

		setStatusMessage("Working some magic...");
		let res;
		try {
			res = await fetch(
				`http://localhost:8000/api/v1/youtube?url=${videoLink}${
					format ? `&format=${format}` : ""
				}${resolution ? `&resolution=${resolution}` : ""}`
			);
		} catch (err: any) {
			console.error(err);
			setStatusMessage("Failed to download video 😭");
			return;
		}

		// Download
		setStatusMessage("Downloading...");
		const blob = await res.blob();
		const documentBlob = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = documentBlob;
		a.download = "output.mp4";
		document.body.appendChild(a);
		a.click();
		a.remove();
		setStatusMessage("✅ Check your downloads!");
	}

	if (formatOptions.length)
		return (
			<div className="flex flex-col gap-y-4">
				<button
					onClick={downloadOutput}
					className="bg-brandWhite text-brandDark px-4 py-2 rounded-md shadow-xl cursor-pointer"
				>
					Download
				</button>
				<span>{statusMessage}</span>
			</div>
		);
}
