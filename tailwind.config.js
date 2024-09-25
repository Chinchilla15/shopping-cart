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
			keyframes: {
				scroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
			animation: {
				"scroll-slow": "scroll 90s linear infinite",
				"scroll-mid": "scroll 85s linear infinite",
				"scroll-fast": "scroll 80s linear infinite",
			},
		},
	},
	plugins: [],
};
