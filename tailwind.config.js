module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors - Web3 Brand
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)"
        },
        // Secondary Colors - Dark Theme
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          overlay: "var(--secondary-overlay)",
          accent: "var(--secondary-accent)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          dark: "var(--text-dark)",
          warning: "var(--text-warning)"
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          overlay: "var(--bg-overlay)",
          accent: "var(--bg-accent)",
          transparent: "var(--bg-transparent)",
          light: "var(--bg-light-overlay)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          accent: "var(--border-accent)",
          transparent: "var(--border-transparent)"
        },
        // Component-specific Colors
        header: {
          background: "var(--header-bg)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        button: {
          primary: {
            bg: "var(--button-primary-bg)",
            text: "var(--button-primary-text)"
          },
          secondary: {
            bg: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)"
          }
        },
        input: {
          border: "var(--input-border)",
          text: "var(--input-text)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        'special': 'var(--font-size-special)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)'
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
        '6xl': 'var(--radius-6xl)',
        'full': 'var(--radius-full)'
      },
      fontFamily: {
        'funnel': ['Funnel', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
