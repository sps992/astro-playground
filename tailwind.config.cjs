/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2.5rem",
				lg: "3rem",
			},
		},
		extend: {
			minHeight: {
			'25vh': '25vh',
			'35vh': '35vh',
			'50vh': '50vh',
			'75vh': '75vh',
			},
			maxHeight: {
			'168': '42rem'
			},
			colors: {
				offwhite : '#f7f6fd',
				primary: {
					500 : '#EF3D2C'
				},
				secondary: {
					500 : '#29B2AA'
				},
				tertiary: {
					500 : '#002626'
				}
			}
		},
	},
	plugins: [],
}
