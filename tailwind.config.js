function toRgba(cssVariable) {
  const color = `var(${cssVariable})`
  return ({ opacityValue }) => `rgba(${color}, ${opacityValue})`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: toRgba('--primary'),
        secondary: toRgba('--secondary'),
        tertiary: toRgba('--tertiary'),
        quaternary: toRgba('--quaternary'),
        hover: toRgba('--hover'),
        click: toRgba('--click'),
        icon: toRgba('--icon'),
        outline: toRgba('--outline'),
        divider: toRgba('--divider'),
        'bg-light': toRgba('--bg-light'),
        'bg-dark': toRgba('--bg-dark'),
        'bg-disabled': toRgba('--bg-disabled'),
        'text-primary': toRgba('--text-primary'),
        'text-secondary': toRgba('--text-secondary'),
        'text-tertiary': toRgba('--text-tertiary'),
        'text-disabled': toRgba('--text-disabled'),
      },
            
//código omitido
    },
        
  },
  plugins: [],
}
