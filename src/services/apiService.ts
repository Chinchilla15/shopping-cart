import type { Vinyl, Collection } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;

const BASE_URL = "https://api.discogs.com/database/search";

export const getData = async (query: string): Promise<Vinyl[]> => {
	const API_URL = `${BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}&secret=${API_SECRET}`;
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		return data.results as Vinyl[];
	} catch (err) {
		console.error("Error: ", err);
		return [];
	}
};

export const getCollection = async (): Promise<Collection[]> => {
	const API_URL = `https://api.discogs.com/users/chinchilla_/collection/folders/0/releases?key=${API_KEY}&secret=${API_SECRET}`;
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		return data.releases as Collection[];
	} catch (err) {
		console.error("Error: ", err);
		return [];
	}
};

getCollection();
