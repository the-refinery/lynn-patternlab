module.exports = {
    jquery: {
        src: '<%= config.js.src %>/lib/jquery-2.0.0b2.js',
        dest: '<%= config.js.src %>/dist/jquery-2.0.0b2.js'
    },

    js: {
        src: [
            '<%= config.js.src %>/lib/jquery.flexslider.js',
            '<%= config.js.src %>/lib/featherlight-1.2.0.js',
            '<%= config.js.src %>/lib/fitvids.js',
            '<%= config.js.src %>/custom/**/*.js'
        ],
    }
}