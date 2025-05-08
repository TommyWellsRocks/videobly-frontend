"use client";

import { useYouTube } from "@/hooks/useYouTube";

export function OutputSpecs() {
	const formatOptions = useYouTube((state) => state.availableFormats);

	if (formatOptions.length)
		return (
			<div className="flex flex-wrap gap-x-5 gap-y-2">
				<Format />

				<Resolution />
			</div>
		);
}

export function Format() {
	const formatOptions = useYouTube((state) => state.availableFormats);
	const format = useYouTube((state) => state.format);

	const setFormat = useYouTube.getState().setFormat;

	return (
		<div className="flex gap-x-2">
			{formatOptions.map((option, key) => (
				<button
					key={key}
					onClick={() => setFormat(option)}
					className={`rounded-full ${
						format === option ? "bg-brandDark text-brandWhite" : "bg-brandWhite"
					} py-2 px-4 cursor-pointer shadow-md border border-brandDark-200`}
				>
					{option}
				</button>
			))}
		</div>
	);
}

export function Resolution() {
	const resolutionOptions = useYouTube((state) => state.availableResolutions);
	const format = useYouTube((state) => state.format);
	const resolution = useYouTube((state) => state.resolution);

	const setResolution = useYouTube.getState().setResolution;

	if (format && format.toLowerCase() !== "audio")
		return (
			<div className="flex gap-x-2">
				{resolutionOptions.map((option, key) => (
					<button
						key={key}
						onClick={() => setResolution(option)}
						className={`rounded-full ${
							resolution === option ? "bg-brandDark text-brandWhite" : "bg-brandWhite"
						} py-2 px-4 cursor-pointer shadow-md border border-brandDark-200`}
					>
						{option}
					</button>
				))}
			</div>
		);
}
