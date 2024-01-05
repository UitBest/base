<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    {{--  Meta  --}}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="api-host" content="{API_HOST}">

    {{--  Styles  --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">

    {{--  Scripts  --}}
    @vite('resources/css/app.css')

    {{--  Title  --}}
    <title>Laravel Vue Template</title>

</head>
<body>
    <div id="app"></div>

    @vite('resources/js/app.js')
</body>
</html>
