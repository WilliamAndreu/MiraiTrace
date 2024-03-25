/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    important: '#app',
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            grey: '#404040',
            white: '#ffffff',
            red: '#FF0000',
            blue: '#3222ff',
            magenta: '#873bff',
            yellow: '#ffd645',
            consoleColorAS: '#282b2e',
            consoleColorFooterAS: '#424242',
            consoleNumber: '#cccccc6b',
            ui: '#18181b',
            ui2: '#0e0e11',
            starship: {
                '50': '#feffe6',
                '100': '#fcfec9',
                '200': '#f6fe98',
                '300': '#ecf95d',
                '400': '#e0f146',
                '500': '#bed50d',
                '600': '#94ab05',
                '700': '#708209',
                '800': '#59660e',
                '900': '#495611',
                '950': '#273003',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
