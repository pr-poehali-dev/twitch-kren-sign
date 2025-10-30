import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green)), 0 0 30px hsl(var(--neon-green)), 0 0 40px hsl(var(--neon-green))'
					},
					'50%': {
						textShadow: '0 0 5px hsl(var(--neon-green)), 0 0 10px hsl(var(--neon-green)), 0 0 15px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green))'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px hsl(var(--neon-green)), 0 0 10px hsl(var(--neon-green)), 0 0 15px hsl(var(--neon-green))'
					},
					'50%': {
						boxShadow: '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green)), 0 0 30px hsl(var(--neon-green))'
					}
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'41%': { opacity: '1' },
					'42%': { opacity: '0.8' },
					'43%': { opacity: '1' },
					'45%': { opacity: '0.2' },
					'46%': { opacity: '1' }
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)',
						textShadow: '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green))'
					},
					'20%': {
						transform: 'translate(-2px, 2px)',
						textShadow: '-2px 0 hsl(var(--neon-pink)), 2px 0 hsl(var(--neon-blue))'
					},
					'40%': {
						transform: 'translate(-2px, -2px)',
						textShadow: '2px 0 hsl(var(--neon-blue)), -2px 0 hsl(var(--neon-pink))'
					},
					'60%': {
						transform: 'translate(2px, 2px)',
						textShadow: '-2px 0 hsl(var(--neon-green)), 2px 0 hsl(var(--neon-pink))'
					},
					'80%': {
						transform: 'translate(2px, -2px)',
						textShadow: '2px 0 hsl(var(--neon-pink)), -2px 0 hsl(var(--neon-blue))'
					},
					'100%': {
						transform: 'translate(0)',
						textShadow: '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green))'
					}
				},
				'scan-line': {
					'0%': { top: '0%' },
					'100%': { top: '100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-glow': 'neon-glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'flicker': 'flicker 3s linear infinite',
				'glitch': 'glitch 0.5s cubic-bezier(.25, .46, .45, .94) infinite',
				'scan-line': 'scan-line 4s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;