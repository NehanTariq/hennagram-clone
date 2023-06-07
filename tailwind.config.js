import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Segoe UI', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                'dark': '#18181A',
                'light': '#FFFFEE',
                'primary': '#FEFFD8',
            }
        },
    },

    plugins: [forms],
};
