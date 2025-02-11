import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['PT Serif', 'serif'],
        decorative: ['Cinzel Decorative', 'cursive'],
        mono: ['Space Mono', 'monospace'],
        fraktur: ['UnifrakturMaguntia', 'cursive']
      },
      colors: {
        background: 'var(--bg-color)',
        foreground: 'var(--text-color)',
        accent: 'var(--accent)',
        'accent-dim': 'var(--accent-dim)',
        'text-dim': 'var(--text-dim)'
      }
    },
  },
  plugins: [],
} satisfies Config;
