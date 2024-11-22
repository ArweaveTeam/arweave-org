/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'6xl': '4rem',
			},
			colors: {
				orange: '#ff6700',
      	link: '#0b0080'
			},
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        display: ['Roboto Mono', 'monospace'],
      },
		},
	},
	plugins: [],
}
