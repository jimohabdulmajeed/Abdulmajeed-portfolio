/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
         
	},
	screens: {
		sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px', 
        
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			primary: "#1c1c22",
			accent:{
				DEFAULT: "#00ff99",
				hover: "#00e187",
			},
			card: "#232329",
			border: "rgba(255, 255, 255, 0.08)",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			card: "0 8px 30px rgba(0, 0, 0, 0.25)",
  			glow: "0 0 0 1px rgba(0, 255, 153, 0.15), 0 8px 30px rgba(0, 255, 153, 0.08)",
  		},
  		keyframes: {
  			"fade-up": {
  				"0%": { opacity: "0", transform: "translateY(12px)" },
  				"100%": { opacity: "1", transform: "translateY(0)" },
  			},
  		},
  		animation: {
  			"fade-up": "fade-up 0.6s ease-out both",
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
