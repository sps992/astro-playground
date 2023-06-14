/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			minHeight: {
			'25vh': '25vh',
			'35vh': '35vh',
			'50vh': '50vh',
			'75vh': '75vh',
			},
			maxHeight: {
			'168': '42rem'
			}
		},
	},
	plugins: [],
}
