// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				"md-lg": "0.625rem",
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"card-bg": "#FFF",
				"card-border": "#E6E6E6",
				"font-dark": "#212121",
				"font-white": "#FAFAFA",
				"font-error": "#D86161",
				"font-placeholder": "#7A7A7A",
				primary: "#1597E4",
				"card-desc": "#212427",
				unselected: "#D8D8D8",
			},
			gap: {
				20.78: "5.1949rem",
				19.75: "4.9375rem",
			},
			spacing: {
				21.25: "5.3125rem",
				11.23: "2.8062rem",
				7.5: "1.875rem",
			},
		},
	},
	plugins: [],
};
