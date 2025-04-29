import { z } from "zod";

const youtubeURLSchema = z
	.string()
	.url()
	.regex(
		/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?[A-Za-z0-9_-]{11}$/,
		"Invalid YouTube URL"
	);

export function validateYouTubeLink(youtubeURL: string) {
	const isValidURL = youtubeURLSchema.safeParse(youtubeURL);
	if (!isValidURL.success) {
		return isValidURL.error.errors[0].message;
	} else {
		return "";
	}
}
