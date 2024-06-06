/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx, ts, jsx, js}"],
	theme: {
		extend: {
			spacing: {
				13: "3.25rem",
				"694px": "694px",
				"1000px": "1000px",
			},
			minWidth: {
				"6xl": "68rem",
			},
			colors: {
				black: "var(--black)",
				white: "#var(--white)",
				slate: {
					50: "var(--slate-50)",
					100: "var(--slate-100)",
					200: "var(--slate-200)",
					300: "var(--slate-300)",
					400: "var(--slate-400)",
					500: "var(--slate-500)",
					600: "var(--slate-600)",
					700: "var(--slate-700)",
					800: "var(--slate-800)",
					900: "var(--slate-900)",
					950: "var(--slate-950)",
				},
			},
		},
	},
	plugins: [],
};
