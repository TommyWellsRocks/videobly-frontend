"use client";

import { useYouTube } from "@/hooks/useYouTube";

export function OutputSpecs() {
	const formatOptions = useYouTube((state) => state.availableFormats);
	const resolutionOptions = useYouTube((state) => state.availableResolutions);
	if (formatOptions.length || resolutionOptions.length)
		return (
			<div className="flex gap-x-5">
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
			<span>Format:</span>
			<select value={format} onChange={(e) => setFormat(e.target.value)}>
				{formatOptions.map((option, key) => (
					<option value={option.toLowerCase()} key={key}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

export function Resolution() {
	const resolutionOptions = useYouTube((state) => state.availableResolutions);
	const format = useYouTube((state) => state.format);
	const resolution = useYouTube((state) => state.resolution);

	const setResolution = useYouTube.getState().setResolution;

	if (format === "av" || format === "video")
		return (
			<div className="flex gap-x-2">
				<span>Resolution:</span>
				<select value={resolution} onChange={(e) => setResolution(e.target.value)}>
					{resolutionOptions.map((option, key) => (
						<option value={option.toLowerCase()} key={key}>
							{option}
						</option>
					))}
				</select>
			</div>
		);
}
