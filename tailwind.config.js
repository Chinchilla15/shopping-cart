/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom1: ["CustomFont1", "sans-serif"],
				custom2: ["CustomFont2", "sans-serif"],
			},
			colors: {
				redPrimary: "var(--red-primary)",
				redSecondary: "var(--red-secondary)",
				bluePrimary: "var(--blue-primary)",
				blueSecondary: "var(--blue-secondary)",
				bgWhite: "var(--bg-white)",
			},
		},
	},
	plugins: [],
};
