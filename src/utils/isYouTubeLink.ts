import { z } from "zod";

const youtubeURLSchema = z
	.string()
	.url()
	.regex(
		/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?[A-Za-z0-9_-]{11}$/,
		"Invalid YouTube URL"
	);

export function isYouTubeLink(youtubeURL: string) {
	const isValidURL = youtubeURLSchema.safeParse(youtubeURL);
	if (!isValidURL.success) {
		return { ok: false, err: isValidURL.error.errors[0].message };
	}
	return { ok: true, err: "" };
}
