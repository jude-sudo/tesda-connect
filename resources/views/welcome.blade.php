<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="manifest" href="/manifest.webmanifest">

    <meta name="theme-color" content="#0d2559">

    <link rel="icon" href="/pwa-192x192.png">

    <title>TESDA-Connect</title>

    {{-- =========================================
         DARK MODE INITIALIZATION
         Runs BEFORE React loads
    ========================================== --}}
    <script>
        (() => {
            const darkMode =
                localStorage.getItem('darkMode') === 'true';

            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        })();
    </script>

    @viteReactRefresh

    @vite([
        'resources/css/app.css',
        'resources/js/app.jsx'
    ])

</head>

<body class="bg-[#eef3f9] dark:bg-slate-950">

    <div id="app"></div>

</body>
</html>