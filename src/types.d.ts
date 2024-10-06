export interface ButtonProps {
	content: string;
	link?: string;
}

export interface ItemProps {
	image: string;
	description: string;
	price: number;
	genre: string;
	artist: string;
}

export interface HeaderProps {
	title: string;
}

export interface PageLayoutProps {
	children: React.ReactNode;
	title: string;
}

export interface Vinyl {
	id: number;
	title: string;
	cover_image: string;
	artist: string;
	year?: number;
	genre?: string;
}

export interface Collection {
	id: number;
	basic_information: {
		id: number;
		cover_image: string;
		title: string;
		year: number;
		formats: {
			name: string;
			qty: string;
			descriptions: string[];
		}[];
		artists: {
			name: string;
		}[];

		genres: string[];
		styles: string[];
	};
}

export interface BentoGridProps {
	children: React.ReactNode[];
}
