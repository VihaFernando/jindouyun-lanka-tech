/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                heroTop: '#d7eef8',
                heroMid: '#eff7fb',
                heroAccent: '#0b7a8f',
                heroNav: '#0b7aa8',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
                script: ['Caveat', 'cursive'],
            },
        },
    },
    plugins: [],
};
