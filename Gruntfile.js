module.exports = function(grunt) {
    
    // Project configuration
    grunt.initConfig({
        concat: {
            js: {
                options: {separator: ';'},
                src: [
                    'source/js/jquery-2.0.0b2.js',
                    'source/js/custom/*.js'
                ],
                dest: 'public/js/main.js'
            },
        },
        uglify: {
            options: {mangle: false},
            js: {
                files: {'public/js/main.min.js': ['public/js/main.js']}
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'source/css',
                    cssDir: 'source/css',
                    cacheDir: 'source/.sass-cache',
                    outputStyle: 'compressed'
                }
            }
        },
        watch: {
            css: {
                files: 'source/css/**/*.scss',
                tasks: ['compass']
            },
            js: {
                files: ['source/js/**/*.js'],
                tasks: ['concat:js', 'uglify:js']
            }
        }
    });
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register the tasks
    grunt.registerTask('default', ['compass','watch']);
};