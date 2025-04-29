"use client";

import { useYouTube } from "@/hooks/useYouTube";
import { useEffect, useState } from "react";

export function Download() {
	const format = useYouTube((state) => state.format);
	const resolution = useYouTube((state) => state.resolution);
	const videoLink = useYouTube((state) => state.link);
	const hasError = !!useYouTube((state) => state.errorMessage);
	const [statusMessage, setStatusMessage] = useState("");

	useEffect(() => {
		setStatusMessage("");
	}, [videoLink]);

	const downloadOutput = async () => {
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
	};

	return (
		<div className="flex flex-col gap-y-4">
			{!(hasError || statusMessage) && (
				<div className="flex justify-between">
					{/* Video Thumbnail */}
					<img src="" />

					<button onClick={downloadOutput}>Download</button>
				</div>
			)}
			<span>{statusMessage}</span>
		</div>
	);
}
