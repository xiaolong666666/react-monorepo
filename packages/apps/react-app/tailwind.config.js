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
		},
	},
	plugins: [],
};
