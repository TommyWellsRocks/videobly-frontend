"use client";

import { validateYouTubeLink } from "@/utils/validateYouTubeLink";
import { create } from "zustand";

interface youtubeState {
	link: string;
	availableFormats: string[];
	availableResolutions: string[];
	errorMessage: string;
	format: string;
	resolution: string;
	// Set
	setLink: (link: string) => void;
	setFormat: (format: string) => void;
	setResolution: (resolution: string) => void;
}

export const useYouTube = create<youtubeState>((set) => ({
	link: "",
	availableFormats: [],
	availableResolutions: [],
	errorMessage: "",
	format: "",
	resolution: "",
	// Set
	setLink: async (link: string) => {
		set((state) => ({ ...state, link }));
		let errorMessage = "";
		// Validate
		errorMessage = validateYouTubeLink(link);
		if (!link) {
			set((state) => ({ ...state, errorMessage }));
			return;
		}
		if (errorMessage) {
			set((state) => ({ ...state, errorMessage }));
			return;
		}
		// Clear Error Message And Get Output Options
		set((state) => ({ ...state, errorMessage }));

		let formatOptions: string[] = [];
		let resolutionOptions: string[] = [];
		try {
			const res = await fetch(`http://localhost:8000/api/v1/youtube?url=${link}`);
			const { availableFormats, availableResolutions } = await res.json();
			formatOptions = availableFormats;
			resolutionOptions = availableResolutions;
		} catch (err: any) {
			console.error(err);
			errorMessage = "Error fetching formats and resolutions";
		} finally {
			set((state) => ({
				...state,
				availableFormats: formatOptions ? formatOptions : [],
				format: formatOptions ? formatOptions[-1] : "",
				availableResolutions: resolutionOptions ? resolutionOptions : [],
				resolution: resolutionOptions ? resolutionOptions[-1] : "",
				errorMessage,
			}));
		}
	},
	setFormat: (format: string) => set((state) => ({ ...state, format })),
	setResolution: (resolution: string) => set((state) => ({ ...state, resolution })),
}));
