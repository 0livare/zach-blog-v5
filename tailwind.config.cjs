let isInDevMode = process.env.NODE_ENV === 'development'

let content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
if (isInDevMode) {
  content.push('./.storybook/components/*.tsx')
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')],
  content,
  important: true,
  theme: {
    // These are the Tailwind defaults, just included here for quick reference
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bgprimary: 'var(--color-bg-primary)',
        'bgprimary-dark': 'var(--color-bg-primary-dark)',
        tprimary: 'var(--color-text-primary)',
        'tprimary-dark': 'var(--color-text-primary-dark)',
        tsecondary: 'var(--color-text-secondary)',
        tbase: 'var(--color-text-base)',
        teal: 'var(--teal)',
        'teal-dark': 'var(--teal-dark)',
        'teal-soft': 'var(--teal-soft)',
        'hot-pink': 'var(--hot-pink)',
        navy: 'var(--navy)',
        'navy-dark': 'var(--navy-dark)',
        'off-white': 'var(--off-white)',
        'off-white-dark': 'var(--off-white-dark)',
        topaz: 'var(--topaz)',
        'topaz-dark': 'var(--topaz-dark)',
        thunderbird: 'var(--thunderbird)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      dropShadow: {
        white: '10px 10px 50px white',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      serif: ['Anton', 'Arial'],
      sans: ['Roboto', 'ui-serif', 'Georgia', 'Cambria'],
      mono: [
        'LeagueMono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
}
