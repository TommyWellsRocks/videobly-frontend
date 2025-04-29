"use client";

import { isYouTubeLink } from "@/utils/isYouTubeLink";
import { create } from "zustand";

interface YouTubeState {
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
	// Get
	getPreview: () => void;
}

export const useYouTube = create<YouTubeState>((set, get) => ({
	link: "",
	availableFormats: [],
	availableResolutions: [],
	errorMessage: "",
	format: "",
	resolution: "",
	// Set
	setLink: async (link: string) => set((state) => ({ ...state, link })),
	setFormat: (format: string) => set((state) => ({ ...state, format })),
	setResolution: (resolution: string) => set((state) => ({ ...state, resolution })),
	// Get
	getPreview: async () => {
		const link = get().link;
		if (!link) return;

		// Validate Link
		const { ok, err } = isYouTubeLink(link);
		if (!ok) {
			set((state) => ({ ...state, errorMessage: err }));
			return;
		}

		// Clear Previous State (Search Data)
		set((state) => ({
			...state,
			availableFormats: [],
			availableResolutions: [],
			errorMessage: "",
			format: "",
			resolution: "",
		}));

		// Get Output Options
		try {
			const res = await fetch(`http://localhost:8000/api/v1/youtube?url=${link}`);
			const { availableFormats, availableResolutions } = await res.json();
			set((state) => ({ ...state, availableFormats, availableResolutions }));
		} catch (err: any) {
			console.error(err);
			const errorMessage = "Error fetching formats and resolutions";
			set((state) => ({ ...state, errorMessage }));
		}
	},
}));
