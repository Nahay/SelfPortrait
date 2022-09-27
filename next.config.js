const withPWA = require('next-pwa')({
    dest: 'public',
});

module.exports = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
    i18n: {
        locales: ['fr'],
        defaultLocale: 'fr',
    },

    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
            },
        });
        return config;
    },
});
