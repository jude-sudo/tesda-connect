import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({

    plugins: [

        /*
        |--------------------------------------------------------------------------
        | Laravel
        |--------------------------------------------------------------------------
        */

        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
            ],

            refresh: true,

            buildDirectory: 'build',
        }),


        /*
        |--------------------------------------------------------------------------
        | React
        |--------------------------------------------------------------------------
        */

        react(),


        /*
        |--------------------------------------------------------------------------
        | Tailwind CSS
        |--------------------------------------------------------------------------
        */

        tailwindcss(),


        /*
        |--------------------------------------------------------------------------
        | PWA
        |--------------------------------------------------------------------------
        */

        VitePWA({

            registerType: 'autoUpdate',

            injectRegister: 'auto',

            /*
            |--------------------------------------------------------------------------
            | Service Worker
            |--------------------------------------------------------------------------
            */

            filename: 'sw.js',

            strategies: 'generateSW',


            /*
            |--------------------------------------------------------------------------
            | Manifest
            |--------------------------------------------------------------------------
            */

            manifestFilename: 'manifest.webmanifest',

            manifest: {

                name: 'TESDA Connect',

                short_name: 'TESDA',

                description:
                    'TESDA Connect - Mamburao Integrated Farm',

                start_url: '/',

                scope: '/',

                display: 'standalone',

                background_color: '#061b1d',

                theme_color: '#0d2559',

                lang: 'en',

                orientation: 'portrait-primary',

                icons: [

                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },

                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },

                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },

                ],

            },


            /*
            |--------------------------------------------------------------------------
            | Workbox
            |--------------------------------------------------------------------------
            */

            workbox: {

                globPatterns: [
                    '**/*.{js,css,html,ico,png,svg,woff2}',
                ],

                navigateFallback: null,

            },


            /*
            |--------------------------------------------------------------------------
            | Development
            |--------------------------------------------------------------------------
            */

            devOptions: {

                enabled: true,

            },

        }),

    ],


    /*
    |--------------------------------------------------------------------------
    | Build
    |--------------------------------------------------------------------------
    */

    build: {

        manifest: 'manifest.json',

        outDir: 'public/build',

        emptyOutDir: true,

    },


    /*
    |--------------------------------------------------------------------------
    | Vite Server
    |--------------------------------------------------------------------------
    */

    server: {

        watch: {

            ignored: [
                '**/storage/framework/views/**',
            ],

        },

    },

});
