module.exports = function(grunt) {

    /*
        Target Environment

        Flag the target environment when running the grunt task:
            grunt task --env=target

        Target = development || production
    */
    var env = grunt.option('env') || process.env.GRUNT_ENV || 'development';
    
    // Project configuration
    grunt.initConfig({
        // Generate stylesheets
        compass: {
            development: {
                options: {
                    sassDir: 'source/css',
                    cssDir: 'source/css',
                    cacheDir: 'source/.sass-cache',
                    environment: 'development',
                    outputStyle: 'nested'
                }
            },
            production: {
                options: {
                    sassDir: 'source/css',
                    cssDir: 'source/css',
                    cacheDir: 'source/.sass-cache',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            }
        },

        // Combine Javascript files
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'source/js/lib/jquery.flexslider.js',
                    'source/js/lib/fitvids.js',
                    'source/js/custom/expandable.js',
                    'source/js/custom/pullquote.js',
                    'source/js/custom/sticky-nav.js',
                    'source/js/custom/fitvid.js',
                    'source/js/custom/flexslider.js'
                ],
                dest: 'source/js/main.js'
            }
        },

        // Minify Javascript
        uglify: {
            development: {
                options: {
                    mangle: false,
                    beautify: true
                },
                files: {
                    'source/js/min/jquery.min.js': ['source/js/jquery-2.0.0b2.js'],
                    'source/js/min/main.min.js': ['source/js/main.js']
                }
            },
            production: {
                options: {
                    mangle: false,
                    beautify: false
                },
                files: {
                    'source/js/min/jquery.min.js': ['source/js/jquery-2.0.0b2.js'],
                    'source/js/min/main.min.js': ['source/js/main.js']
                }
            }
        },

        // Compile Pattern Lab
        shell: {
            options: {
                stdout: true
            },
            pl: {
                command: 'php core/builder.php -g',
            },
            pl_patterns: {
                command: 'php core/builder.php -g -p',
            }
        },

        // Clean public folder
        clean: {
            resources: {
                css: {
                    src: ['public/css/**/*']
                },
                js: {
                    src: ['public/js/**/*']
                }
            },
            all: ['public/**/*']
        },

        // Copy resources
        copy: {
            css: {
                expand: true,
                cwd: 'source/css/',
                src: '**/*.css',
                dest: 'public/css/'
            },
            js: {
                expand: true,
                cwd: 'source/js/min',
                src: ['jquery.min.js','main.min.js'],
                dest: 'public/js/'
            }
        },

        // Watch for updates
        watch: {
            sass: {
                files: 'source/css/**/*.scss',
                tasks: ['compass:'+env],
            },
            css: {
               files: 'source/css/**/*.css',
               tasks: ['copy:css']
            },
            js: {
                files: ['source/js/custom/**/*.js','source/js/lib/**/*.js'],
                tasks: ['concat:js', 'uglify:'+env]
            },
            patterns: {
                files: [
                    'source/_patterns/**/*.mustache',
                    'source/_patterns/**/*.json'
                ],
                tasks: ['shell:pl_patterns']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['public/**/*']
            }
        }
    });
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    // Default task
    grunt.registerTask(
        'default',
        'Deploy Pattern Lab from source to public and watch for updates',
        ['compass:'+env,'concat','uglify:'+env,'clean:resources','copy','watch']
    );

    // Build Pattern Lab
    grunt.registerTask(
        'build-pl',
        'Build pattern lab in an unalterted state.',
        ['clean:all','compass:'+env,'concat','uglify:'+env,'shell:pl']
    );

    // Build Pattern Lab and cleanup
    grunt.registerTask(
        'build-pl-clean',
        'Build pattern lab, cleaning up resources afterward.',
        ['clean:all','compass:'+env,'concat','uglify:'+env,'shell:pl','clean:resources','copy']
    );

    // Build only Pattern Lab patterns
    grunt.registerTask(
        'build-pl-patterns',
        'Build only the patterns for pattern lab.',
        ['shell:pl_patterns']
    );

};