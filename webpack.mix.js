const mix = require('laravel-mix');
mix.postCss('resource/css/min.style.css', 'public/style.css', [
    require('tailwindcss')
])
    .options({
        postCss: [
            require('autoprefixer')({
                browsers: ['last 50 versions'],
            })
        ]
    })
    .setPublicPath('public');