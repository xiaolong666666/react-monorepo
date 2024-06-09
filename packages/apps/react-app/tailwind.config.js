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
				black: "xl(black)",
				white: "xl(white)",
				slate: {
					50: "xl(slate50)",
					100: "xl(slate100)",
					200: "xl(slate200)",
					300: "xl(slate300)",
					400: "xl(slate400)",
					500: "xl(slate500)",
					600: "xl(slate600)",
					700: "xl(slate700)",
					800: "xl(slate800)",
					900: "xl(slate900)",
					950: "xl(slate950)",
				},
			},
		},
	},
	plugins: [],
};
