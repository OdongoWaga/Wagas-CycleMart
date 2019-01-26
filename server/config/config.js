const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGOLAB_MAUVE_URI
    },
    default: {
        SECRET: "SUPERSECRETPASSWORD123",
        DATABASE: 'mongodb://localhost:27017/cycle'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}