module.exports = {
    project: "qtt-h5",
    name: "h5商城",
    production: {
        qukan: {
            default: "http://api.1sapp.com/"
        },
    },
    preview: {
        qukan: {
            'default': 'http://pre.api.1sapp.com/'
        },

    },
    development: {
        qukan: {
            'default': 'http://127.0.0.1:3000/'
        },
        qupost: {
            'default': 'http://127.0.0.2:3000/'
        },

    }
};