/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        rotateOne: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        rotateOne: 'rotateOne 4s ease-in-out infinite',
        rotateTwo: 'rotateOne 5s ease-in-out infinite'
      },
      outlineOffset: {
        "-1": '-1px',
        "-2": '-2px',
      },
      aspectRatio: {
        '5/4': '5 / 4',
      },
      transitionTimingFunction: {
        'primary': 'cubic-bezier(.215,.61,.355,1)',
        'secondary': 'cubic-bezier(.19,1,.22,1)',
        'third': 'cubic-bezier(.16,1,.3,1)',
      },
      fontSize: {
        'h1': ['var(--fs-h1)', {
          lineHeight: "var(--lh-h1)",
          letterSpacing: "var(--ls-5)"
        }],
        'h2': ['var(--fs-h2)', {
          lineHeight: "var(--lh-h2)",
          letterSpacing: "var(--ls-5)"
        }],
        'h3': ['var(--fs-h3)', {
          lineHeight: "var(--lh-h3)",
          letterSpacing: "var(--ls-4)"
        }],
        'h4': ['var(--fs-h4)', {
          lineHeight: "var(--lh-h4)",
          letterSpacing: "var(--ls-4)"
        }],
        'h5': ['var(--fs-h5)', {
          lineHeight: "var(--lh-h5)",
          letterSpacing: "var(--ls-3)"
        }],
        'h6': ['var(--fs-h6)', {
          lineHeight: "var(--lh-h6)",
          letterSpacing: "var(--ls-3)"
        }],
        'p1': ['var(--fs-body1)', {
          lineHeight: "var(--lh-body1)",
          letterSpacing: "var(--ls-2)"
        }],
        'p2': ['var(--fs-body2)', {
          lineHeight: "var(--lh-body2)",
          letterSpacing: "var(--ls-2)"
        }],
        'button': ['var(--fs-button)', {
          lineHeight: "var(--lh-button)",
          letterSpacing: "var(--ls-2)"
        }],
        'caption': ['var(--fs-caption)', {
          lineHeight: "var(--lh-caption)",
          letterSpacing: "var(--ls-2)"
        }],
      },
      fontFamily: {
        primary: ['Silka', 'sans-serif'],
        secondary: ['Boska', 'serif'],
      },
      colors: {
        primary: {
          '50': '#fbf3ff',
          '100': '#f5e3ff',
          '200': '#eccdff',
          '300': '#dda5ff',
          '400': '#c86cff',
          '500': '#b535ff',
          '600': '#a30fff',
          '700': '#9700ff',
          '800': '#7906c3',
          '900': '#64079c',
          '950': '#440076',
        },
        secondary: {
          '50': '#f6f5f0',
          '100': '#e9e4d8',
          '200': '#d4cab4',
          '300': '#bcaa88',
          '400': '#ac956f',
          '500': '#997e59',
          '600': '#83674b',
          '700': '#6a503e',
          '800': '#5a4439',
          '900': '#4f3c34',
          '950': '#2c201c',
        },
        dark: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#141414',
        },
        extra: {
          'white': "#ffffff",
          'black16': '#00000029',
          'white26': '#FFFFFF42',
          'green': '#517B7A'
        }
      }
    },
  },
  plugins: [],
}

