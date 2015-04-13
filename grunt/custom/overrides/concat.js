module.exports = {
    jquery: {
        src: '<%= config.js.src %>/dev/lib/jquery-2.0.0b2.js',
        dest: '<%= config.js.src %>/dist/jquery-2.0.0b2.js'
    },

    js: {
        src: [
            '<%= config.js.src %>/dev/addons/**/*.js',
            '<%= config.js.src %>/dev/custom/**/*.js'
        ],
    }
}