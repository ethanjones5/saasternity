import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-lexend)', 'Lexend', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Eva Build & Design brand colors
  			mocha: {
  				50: '#faf8f5',
  				100: '#f4efe6',
  				200: '#e8dcc7',
  				300: '#d8c5a0',
  				400: '#c7a876',
  				500: '#b89558',
  				600: '#a67f4c',
  				700: '#8b6840',
  				800: '#715639',
  				900: '#5d4830',
  				950: '#312517',
  			},
  			warm: {
  				50: '#fefcfb',
  				100: '#fdf7f3',
  				200: '#fbeee6',
  				300: '#f7dfd0',
  				400: '#f1c9b0',
  				500: '#e8a87c',
  				600: '#dd8a56',
  				700: '#d16f3c',
  				800: '#ae5a32',
  				900: '#8b4a2d',
  				950: '#4b2416',
  			},
  			earth: {
  				50: '#f8f6f4',
  				100: '#f0ebe5',
  				200: '#e2d6ca',
  				300: '#cfbba6',
  				400: '#ba9c81',
  				500: '#a78465',
  				600: '#9a7659',
  				700: '#80614c',
  				800: '#695041',
  				900: '#554137',
  				950: '#2e221c',
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
